import pathlib
from typing import Optional, Union

from dash import html, dcc
from dash.development.base_component import Component
from .._imports_ import TrackingLastComponent


__all__ = [
    "Tail",
    "filepath_dict",
    "get_component_id_list"
]


filepath_dict: dict[str, pathlib.Path] = {}


class Tail(html.Div):
    def __init__(
            self,
            id: Optional[Union[str, dict]] = None,
            interval_to_watch_file: int = 3,
            style=Component.UNDEFINED,
            *,
            filepath
    ):
        tlc_id, interval_id, cursor_position_id = get_component_id_list(id)

        if id in filepath_dict.keys() and filepath_dict[id] != filepath:
            raise ValueError(f"Tail ID '{id}' is already defined.")
        filepath_dict[id] = pathlib.Path(filepath)

        super().__init__(
            children=[
                TrackingLastComponent(id=tlc_id),
                dcc.Interval(id=interval_id, interval=interval_to_watch_file * 1000),
                dcc.Store(id=cursor_position_id, data=0)
            ],
            style=style
        )


def get_component_id_list(base_id: Optional[Union[str, dict]]):
    if base_id is None:
        base_id = ""

    if isinstance(base_id, dict):
        first_key, *other_keys = base_id.keys()
        return [
            {
                first_key: component_id,
                **{key: base_id[key] for key in other_keys}
            }
            for component_id in _get_component_id_list(base_id)
        ]

    return _get_component_id_list(base_id)


def _get_component_id_list(base_id: str):
    return [
        f"tail-{base_id}",
        f"tail-interval-{base_id}",
        f"tail-file-current-cursor-position-{base_id}",
    ]
