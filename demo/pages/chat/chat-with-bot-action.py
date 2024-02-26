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
                id="chat-with-bot-action",
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
            html.Div(id="output-with-bot-action"),
        ]
    )


@ydc.callbacks.chat.callback(
    id="chat-with-bot-action",
    output=[
        Output("chat-with-bot-action", "history"),
    ],
    inputs=[
        Input("chat-with-bot-action", "n_submits"),
        State("chat-with-bot-action", "history"),
    ],
    background=True,
    progress=[
        Output("chat-with-bot-action", "is_bot_typing"),
        Output("chat-with-bot-action", "history"),
    ],
)
def update_assistant_message(
    set_progress: SetProgress, n_submits: Optional[int], history: History
) -> tuple[History, bool]:
    if n_submits is None:
        raise dash.exceptions.PreventUpdate

    user_message = history[-1]["content"]
    print(n_submits, user_message)

    set_progress((True, history))
    time.sleep(1)
    history.append({"role": "assistant-action", "content": "Searching with 'fuga'…"})
    set_progress((True, history))
    time.sleep(1)
    history.append(
        {"role": "assistant-action", "content": "Searching with 'fuga fuga'…"}
    )
    set_progress((True, history))
    time.sleep(1)
    set_progress((False, history))

    history.append({"role": "assistant", "content": user_message})

    return (history,)


@callback(
    Output("output-with-bot-action", "children"),
    Input("chat-with-bot-action", "history"),
)
def show_history(history: History) -> DashChildrenProp:
    if history is None:
        raise dash.exceptions.PreventUpdate
    return [html.P(str(h)) for h in history]
