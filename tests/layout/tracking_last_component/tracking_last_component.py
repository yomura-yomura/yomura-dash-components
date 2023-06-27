from dash import html, dcc
import dash.exceptions

import yomura_dash_components as ydc


dash.register_page(__name__)


def layout():
    return html.Div([
        html.Button(id="tail-button", children="generate dummy data"),
        html.Div(
            children=[
                ydc.TrackingLastComponent(id="tail"),
                dcc.Interval(id="tail-interval", interval=3000),
                dcc.Store(id="tail-file-current-cursor-position", data=0)
            ],
            style={
                "height": "40vh",
                "width": "90vw",
                "border": "solid rgba(30, 29, 30, .58)",
            }
        ),
    ])
