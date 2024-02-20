import re
from typing import (Callable, Concatenate, Optional, ParamSpec, TypeAlias,
                    overload)

import dash
from dash import Input, Output, State

from ..components.tail import filepath_dict, get_component_id_list
from ..typing import ComponentID, DashDependencies

StateArgs = ParamSpec("StateArgs")

DesiredFunc: TypeAlias = Callable[Concatenate[list[str], StateArgs], list[str]]

Decorator: TypeAlias = Callable[[DesiredFunc[StateArgs]], bool]


@overload
def callback(
    func: DesiredFunc[StateArgs],
    *,
    id: None = ...,  # noqa: PyShadowingBuiltins
    states: None = ...,
) -> bool:
    ...


@overload
def callback(
    func: None = ...,
    *,
    id: ComponentID = ...,  # noqa: PyShadowingBuiltins
    states: Optional[DashDependencies[State]] = ...,
) -> Decorator[StateArgs]:
    ...


def callback(
    func: Optional[DesiredFunc[StateArgs]] = None,
    *,
    id: Optional[ComponentID] = None,  # noqa: PyShadowingBuiltins
    states: StateArgs.args = (),
) -> bool | Decorator[StateArgs]:
    tlc_id, interval_id, cursor_position_id = get_component_id_list(id)

    def decorator(func_: DesiredFunc[StateArgs]) -> bool:
        @dash.callback(
            [
                Output(tlc_id, "children"),
                Output(cursor_position_id, "data"),
            ],
            [
                Input(interval_id, "n_intervals"),
            ],
            [State(cursor_position_id, "data"), State(tlc_id, "children"), *states],
        )
        def wrapper(
            _: Optional[int],
            current_cursor_position: int,
            children_so_far: Optional[list[str]],
            *state_args: StateArgs.args,
        ) -> tuple[list[str], int]:
            if not filepath_dict[id].exists():
                return [], current_cursor_position

            with open(filepath_dict[id], "rb") as f:
                f.seek(current_cursor_position)
                s = f.read()
                text_left = s.decode()
                current_cursor_position = f.tell()

            if children_so_far is not None and len(children_so_far) > 0:
                last_component = children_so_far.pop(-1)
                if isinstance(last_component, str):
                    text_left = last_component + text_left
                elif isinstance(last_component, dict):
                    text_left = last_component["props"]["children"] + text_left
                else:
                    raise TypeError(f"Type '{type(last_component)}' is not expected.")

            text_left = re.sub(r"(?:.+\r)+([^\n]+)", r"\1", text_left)
            lines = text_left.splitlines(keepends=True)

            children = func_(lines, *state_args)

            if children_so_far is None:
                children_so_far = []

            return children_so_far + children, current_cursor_position

        return True

    if func is None:
        return decorator
    else:
        return decorator(func)
