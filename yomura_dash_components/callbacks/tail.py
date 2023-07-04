import re
from typing import Union, Optional

import dash
from dash import Output, Input, State
from ..components.tail import get_component_id_list, filepath_dict


def callback(
        func=None,
        *,
        id=None,
        outputs=(),
        states=()
):
    tlc_id, interval_id, cursor_position_id = get_component_id_list(id)

    def decorator(func):

        @dash.callback(
            [
                Output(tlc_id, "children"),
                Output(cursor_position_id, "data"),
            ],
            [
                Input(interval_id, "n_intervals"),
            ],
            [
                State(cursor_position_id, "data"),
                State(tlc_id, "children"),
                *states
            ]
        )
        def wrapper(
                _,
                current_cursor_position: int,
                children_so_far: list[Optional[Union[str, dict]]],
                *state_args
        ):
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

            children = func(lines, *state_args)

            if children_so_far is None:
                children_so_far = []

            return children_so_far + children, current_cursor_position
        return wrapper

    if func is None:
        return decorator
    else:
        return decorator(func)
