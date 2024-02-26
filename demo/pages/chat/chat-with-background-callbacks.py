import time
from typing import Optional

import dash
import dash.exceptions
from dash import Input, Output, State, callback, html

import yomura_dash_components as ydc
from yomura_dash_components.typing import DashChildrenProp, History, SetProgress

dash.register_page(__name__)


def layout() -> DashChildrenProp:
    return html.Div(
        [
            ydc.Chat(
                id="chat-with-background-callbacks",
                bot_name="Test Bot",
                avatar_image_path="/assets/bot-assistant.png",
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
                disable_submission_after_user_sends=True,
                style={
                    "height": "80vh",
                    "width": "90vw"
                    # "height": "400px", "width": "400px"
                },
            ),
            html.P("Submitted: "),
            html.Div(id="output-with-background-callbacks"),
        ]
    )


@ydc.callbacks.chat.callback(
    id="chat-with-background-callbacks",
    output=[
        Output("chat-with-background-callbacks", "history"),
    ],
    inputs=[
        Input("chat-with-background-callbacks", "n_submits"),
        State("chat-with-background-callbacks", "history"),
    ],
    background=True,
    progress=[
        Output("chat-with-background-callbacks", "is_bot_typing"),
    ],
)
def display_output(
    set_progress: SetProgress, n_submits: Optional[int], history: History
) -> tuple[History, bool]:
    if n_submits is None:
        raise dash.exceptions.PreventUpdate

    user_message = history[-1]["content"]
    print(n_submits, user_message)

    set_progress((True,))
    time.sleep(3)
    history.append({"role": "assistant", "content": user_message})
    set_progress((False,))
    return (history,)


@callback(
    Output("output-with-background-callbacks", "children"),
    Input("chat-with-background-callbacks", "history"),
)
def show_history(history: History) -> DashChildrenProp:
    if history is None:
        raise dash.exceptions.PreventUpdate
    return [html.P(str(h)) for h in history]
