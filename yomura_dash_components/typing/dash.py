from collections.abc import MutableSequence
from typing import Optional, TypeAlias, TypeVar, Callable, Any

from dash import Output, Input, State
import dash

__all__ = ["ComponentID", "ComponentUndefined", "Component", "DashChildrenProp", "DashDependencies", "SetProgress"]

ComponentID: TypeAlias = Optional[str | dict]
ComponentUndefined: TypeAlias = dash.development.base_component.Component._UNDEFINED
Component: TypeAlias = dash.development.base_component.Component

# https://community.plotly.com/t/a-question-about-type-hints/64031
SingleChild: TypeAlias = Optional[str | float | Component]
DashChildrenProp = SingleChild | MutableSequence[SingleChild] | tuple[SingleChild]

DashDependency = TypeVar("DashDependency", bound=Output | Input | State)
DashDependencies: TypeAlias = list[DashDependency] | list[()] | tuple[DashDependency] | tuple[()]

SetProgress: TypeAlias = Callable[[tuple[Any, ...]], None]
