import time
import urllib.parse
from typing import Optional

import dash
import dash.exceptions
from dash import Input, Output, State, callback, dcc, html

import yomura_dash_components as ydc
from yomura_dash_components.typing import DashChildrenProp, History

dash.register_page(__name__)


def layout(
    message: str = "", user_input: str = "", type_on_link_clicked: str = "link"
) -> DashChildrenProp:
    return html.Div(
        [
            dcc.Location(id="chat-url", refresh=False),
            ydc.Chat(
                id="chat",
                bot_name="Test Bot",
                avatar_image_path="/assets/bot-assistant.png",
                disable_submission_after_user_sends=True,
                initial_user_input_value=message,
                user_input_value=user_input,
                type_on_link_clicked=type_on_link_clicked,
                style={"height": "80vh", "width": "90vw"},
            ),
            dcc.Input(id="min-standard-font-size-in-px", type="number", value=0),
            html.P("User input: "),
            html.Div(id="user-input"),
            html.P("disable_submission: "),
            html.Div(id="disable-submission"),
            html.P("Submitted: "),
            html.Div(id="output"),
            html.P("data_on_link_clicked: "),
            html.Div(id="data-on-link-clicked"),
        ]
    )


@callback(
    Output("data-on-link-clicked", "children"),
    Input("chat", "data_on_link_clicked"),
)
def update_data_on_link_clicked(data_on_link_clicked: Optional[str]) -> str:
    print(f"{data_on_link_clicked = }")
    if data_on_link_clicked is None:
        raise dash.exceptions.PreventUpdate
    return data_on_link_clicked


@callback(
    Output("chat-url", "search"),
    Input("chat", "last_submitted_user_input_value"),
    State("chat-url", "search"),
)
def update_url(message: str, search: str) -> str:
    if message is None:
        raise dash.exceptions.PreventUpdate

    if search.startswith("?"):
        query_dict = urllib.parse.parse_qs(search[1:])
    else:
        query_dict = {}

    query_dict["message"] = [message]
    if len(query_dict) > 0:
        return "?" + urllib.parse.urlencode(query_dict, doseq=True)
    else:
        return ""


@callback(
    Output("user-input", "children"),
    Input("chat", "user_input_value"),
)
def update_user_input(user_input: Optional[str]) -> str:
    if user_input is None:
        raise dash.exceptions.PreventUpdate
    return user_input


@callback(
    Output("chat", "min_standard_font_size_in_px"),
    Input("min-standard-font-size-in-px", "value"),
)
def update_min_standard_font_size_in_px(min_standard_font_size: Optional[int]) -> int:
    if min_standard_font_size is None:
        raise dash.exceptions.PreventUpdate
    print(f"{min_standard_font_size = }")
    return min_standard_font_size


@callback(
    Output("disable-submission", "children"),
    [
        Input("chat", "disable_submission"),
    ],
)
def update_disable_submission(disable_submission: Optional[bool]) -> str:
    if disable_submission is None:
        raise dash.exceptions.PreventUpdate
    return str(disable_submission)


@ydc.callbacks.chat.callback(
    id="chat",
    output={
        "history": Output("chat", "history"),
    },
    inputs=[
        Input("chat", "n_submits"),
        State("chat", "history"),
    ],
)
def update_assistant_message(
    n_submits: Optional[int], history: History
) -> tuple[History, bool]:
    if n_submits is None:
        raise dash.exceptions.PreventUpdate

    user_message = history[-1]["content"]
    print(n_submits, user_message)

    time.sleep(3)
    history.append({"role": "assistant", "content": user_message})
    return {"history": history}


@callback(Output("output", "children"), Input("chat", "history"))
def show_history(history: History) -> DashChildrenProp:
    if history is None:
        raise dash.exceptions.PreventUpdate
    return [html.P(str(h)) for h in history]
