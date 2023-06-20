import time

import dash
from dash import callback, html, Input, Output, State


@callback(
    [
        Output("chat-with-background-callbacks", "history"),
        Output("chat-with-background-callbacks", "disable_submission")
    ],
    Input("chat-with-background-callbacks", "n_submits"),
    State("chat-with-background-callbacks", "history"),
    background=True,
    progress=[Output("chat-with-background-callbacks", "is_bot_typing")]
)
def update_assistant_message(set_progress, n_submits, history: list[dict]):
    if n_submits is None:
        raise dash.exceptions.PreventUpdate

    user_message = history[-1]["content"]
    print(n_submits, user_message)

    set_progress((True,))
    time.sleep(1)
    history.append({"role": "assistant", "content": user_message})
    set_progress((False,))
    return history, False


@callback(
    Output("output-with-background-callbacks", "children"),
    Input("chat-with-background-callbacks", "history")
)
def show_history(history):
    if history is None:
        raise dash.exceptions.PreventUpdate
    return [
        html.P(str(h))
        for h in history
    ]
