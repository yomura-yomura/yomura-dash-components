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
    disable_submission_output = Output(id, "_disable_submission")
    multi_output = True
    if output is None:
        output = [
            disable_submission_output,
        ]
    elif isinstance(output, Output):
        output = [
            disable_submission_output,
            output,
        ]
        multi_output = False
    elif isinstance(output, dict):
        assert (
            "_disable_submission" not in output
        ), "Output key '_disable_submission' is reserved."
        output = {
            "_disable_submission": disable_submission_output,
            **output,
        }
        multi_output = None
    else:
        output = [
            disable_submission_output,
            *output,
        ]

    if inputs is None:
        inputs = []

    def decorator(func_: DesiredFunc[InputArgs]) -> bool:
        @dash.callback(
            output=output,
            inputs=inputs,
            **kwargs,
        )
        def wrapper(
            *input_args: InputArgs.args,
        ) -> tuple[list[str], int]:
            ret = func_(*input_args)
            if multi_output is None:
                assert (
                    "_disable_submission" not in ret
                ), "Output key '_disable_submission' is reserved."
                return {
                    "_disable_submission": False,
                    **ret,
                }
            if multi_output:
                return False, *ret
            return False, ret

        return True

    if func is None:
        return decorator
    else:
        return decorator(func)
