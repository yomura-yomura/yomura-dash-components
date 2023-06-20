from dash import html
import dash.exceptions

import yomura_dash_components as ydc


dash.register_page(__name__)


def layout():
    return html.Div([
        html.Div(
            ydc.Chat(
                id="chat",
                bot_name="Test Bot",
                avatar_image_path="/assets/bot-assistant.png",
                disable_submission_after_user_sends=True
            ),
            style={
                "height": "80vh", "width": "90vw"
            }
        ),
        html.P("Submitted: "),
        html.Div(id="output")
    ])
