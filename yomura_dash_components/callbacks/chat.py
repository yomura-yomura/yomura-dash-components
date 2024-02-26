from typing import Callable, Concatenate, Optional, ParamSpec, TypeAlias, overload

import dash
from dash import Output, State

from ..typing import ComponentID, DashDependencies

OutputArgs = ParamSpec("OutputArgs")
InputArgs = ParamSpec("InputArgs")

DesiredFunc: TypeAlias = Callable[Concatenate[list[str], InputArgs], list[str]]

Decorator: TypeAlias = Callable[[DesiredFunc[InputArgs]], bool]


@overload
def callback(
    func: DesiredFunc[InputArgs],
    *,
    id: None = ...,  # noqa: PyShadowingBuiltins
    output: None = ...,
    inputs: None = ...,
    **kwargs,
) -> bool:
    ...


@overload
def callback(
    func: None = ...,
    *,
    id: ComponentID = ...,  # noqa: PyShadowingBuiltins
    output: Optional[DashDependencies[OutputArgs]] = ...,
    inputs: Optional[DashDependencies[State]] = ...,
    **kwargs,
) -> Decorator[InputArgs]:
    ...


def callback(
    func: Optional[DesiredFunc[InputArgs]] = None,
    *,
    id: Optional[ComponentID] = None,  # noqa: PyShadowingBuiltins
    output: OutputArgs.args = None,
    inputs: InputArgs.args = None,
    **kwargs,
) -> bool | Decorator[InputArgs]:
    multi_output = True
    if output is None:
        output = []
    elif isinstance(output, Output):
        output = [output]
        multi_output = False

    if inputs is None:
        inputs = []

    def decorator(func_: DesiredFunc[InputArgs]) -> bool:
        @dash.callback(
            output=[
                Output(id, "_disable_submission"),
                *output,
            ],
            inputs=inputs,
            **kwargs,
        )
        def wrapper(
            *input_args: InputArgs.args,
        ) -> tuple[list[str], int]:
            if multi_output:
                return False, *func_(*input_args)
            return False, func_(*input_args)

        return True

    if func is None:
        return decorator
    else:
        return decorator(func)
