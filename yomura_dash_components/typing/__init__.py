from os import PathLike
from typing import TypeAlias

from . import dash
from .dash import *

__all__ = ["FilePath", "History"]
__all__ += dash.__all__


FilePath: TypeAlias = str | PathLike[str]

History: TypeAlias = list[dict[str, str]]
