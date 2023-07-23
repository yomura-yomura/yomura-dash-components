import dash.exceptions
from dash import html

import yomura_dash_components as ydc
from yomura_dash_components.typing import DashChildrenProp

dash.register_page(__name__)


def layout() -> DashChildrenProp:
    return html.Div([
        html.Div(
            ydc.Chat(
                id="chat-with-bot-action",
                bot_name="Test Bot",
                avatar_image_path="/assets/bot-assistant.png",
                history=[
                    {"role": "user", "content": "こんにちは！", "date": "1970-01-01 12:00"},
                    {"role": "assistant", "content": "こんばんは！", "date": "1970-01-01 22:00"}
                ],
                disable_submission_after_user_sends=True
            ),
            style={
                "height": "80vh", "width": "90vw"
                # "height": "400px", "width": "400px"
            }
        ),
        html.P("Submitted: "),
        html.Div(id="output-with-bot-action")
    ])
