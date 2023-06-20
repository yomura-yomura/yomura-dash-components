import time

import dash
from dash import callback, html, Input, Output, State


@callback(
    [
        Output("chat", "history"),
        Output("chat", "disable_submission")
    ],
    Input("chat", "n_submits"),
    State("chat", "history")
)
def update_assistant_message(n_submits, history):
    if n_submits is None:
        raise dash.exceptions.PreventUpdate

    user_message = history[-1]["content"]
    print(n_submits, user_message)

    time.sleep(1)
    history.append({"role": "assistant", "content": user_message})
    return history, False


@callback(
    Output("output", "children"),
    Input("chat", "history")
)
def show_history(history):
    if history is None:
        raise dash.exceptions.PreventUpdate
    return [
        html.P(str(h))
        for h in history
    ]
