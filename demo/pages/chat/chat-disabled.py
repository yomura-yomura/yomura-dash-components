import dash.exceptions
from dash import html

import yomura_dash_components as ydc
from yomura_dash_components.typing import DashChildrenProp

dash.register_page(__name__)


def layout() -> DashChildrenProp:
    return html.Div(
        [
            ydc.Chat(
                id="chat-disabled",
                bot_name="Test Bot",
                avatar_image_path="/assets/bot-assistant.png",
                disable_submission=True,
                disable_textarea=True,
                history=[
                    {
                        "role": "user",
                        "content": "こんにちは！",
                        "date": "1970-01-01 12:00",
                    },
                    {
                        "role": "assistant",
                        "content": "こんばんは！",
                        "date": "1970-01-01 22:00",
                    },
                ],
                style={"height": "80vh", "width": "90vw"},
            ),
            html.P("Submitted: "),
            html.Div(id="output-disabled"),
        ]
    )


import time
from typing import Optional

import dash
from dash import Input, Output, State, callback, html

from yomura_dash_components.typing import DashChildrenProp, History


@callback(
    [
        Output("chat-disabled", "history"),
        Output("chat-disabled", "disable_submission"),
    ],
    Input("chat-disabled", "n_submits"),
    State("chat-disabled", "history"),
)
def update_assistant_message(
    n_submits: Optional[int], history: History
) -> tuple[History, bool]:
    if n_submits is None:
        raise dash.exceptions.PreventUpdate

    user_message = history[-1]["content"]
    print(n_submits, user_message)

    time.sleep(1)
    history.append({"role": "assistant", "content": user_message})
    return history, False


@callback(
    Output("output-disabled", "children"),
    Input("chat-disabled", "history"),
)
def show_history(history: History) -> DashChildrenProp:
    if history is None:
        raise dash.exceptions.PreventUpdate
    return [html.P(str(h)) for h in history]
