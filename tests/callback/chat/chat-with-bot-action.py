import time
from typing import Optional

import dash
from dash import Input, Output, State, callback, html
from yomura_dash_components.typing import DashChildrenProp, History, SetProgress


@callback(
    [
        Output("chat-with-bot-action", "history"),
        Output("chat-with-bot-action", "disable_submission")
    ],
    Input("chat-with-bot-action", "n_submits"),
    State("chat-with-bot-action", "history"),
    background=True,
    progress=[
        Output("chat-with-bot-action", "is_bot_typing"),
        Output("chat-with-bot-action", "history"),
    ]
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
    history.append({"role": "assistant-action", "content": "Searching with 'fuga fuga'…"})
    set_progress((True, history))
    time.sleep(1)
    set_progress((False, history))

    history.append({"role": "assistant", "content": user_message})

    return history, False


@callback(
    Output("output-with-bot-action", "children"),
    Input("chat-with-bot-action", "history")
)
def show_history(history: History) -> DashChildrenProp:
    if history is None:
        raise dash.exceptions.PreventUpdate
    return [
        html.P(str(h))
        for h in history
    ]
