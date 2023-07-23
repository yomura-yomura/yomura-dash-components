import pathlib

import dash.exceptions
from dash import html

import yomura_dash_components as ydc
from yomura_dash_components.typing import DashChildrenProp

dash.register_page(__name__)


project_root_path = pathlib.Path(__file__).parent.parent.parent.parent
target_file_path = project_root_path / "sample-output.log"


def layout() -> DashChildrenProp:
    print("layout")
    return html.Div([
        html.Button(id="tail-button", children="generate dummy data"),
        ydc.Tail(
            filepath=target_file_path,
            interval_to_watch_file=1,
            style={
                "height": "40vh",
                "width": "90vw",
                "border": "solid rgba(30, 29, 30, .58)",
                "white-space": "break-spaces",
            }
        ),
    ])
