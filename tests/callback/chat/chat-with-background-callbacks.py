import time
from typing import Optional

import dash
from dash import Input, Output, State, callback, html
from yomura_dash_components.typing import DashChildrenProp, History, SetProgress


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
def display_output(set_progress: SetProgress, n_submits: Optional[int], history: History) -> tuple[History, bool]:
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
def show_history(history: History) -> DashChildrenProp:
    if history is None:
        raise dash.exceptions.PreventUpdate
    return [
        html.P(str(h))
        for h in history
    ]
