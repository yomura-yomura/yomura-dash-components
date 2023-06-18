import time
import os

import yomura_dash_components as ydc
from dash import Dash, callback, html, Input, Output, State
from dash import DiskcacheManager, CeleryManager
import dash.exceptions
import dash_bootstrap_components as dbc


if "REDIS_URL" in os.environ:
    # Use Redis & Celery if REDIS_URL set as an env variable
    from celery import Celery  # noqa
    celery_app = Celery(__name__, broker=os.environ["REDIS_URL"], backend=os.environ["REDIS_URL"])
    background_callback_manager = CeleryManager(celery_app)

else:
    # Diskcache for non-production apps when developing locally
    import diskcache  # noqa
    cache = diskcache.Cache("./cache")
    background_callback_manager = DiskcacheManager(cache)


app = Dash(
    __name__,
    external_stylesheets=[dbc.themes.BOOTSTRAP],
    background_callback_manager=background_callback_manager
)

app.layout = dbc.Container([
    html.Div(
        ydc.Chat(
            id="chat",
            bot_name="Test Bot",
            avatar_image_path="https://storage.googleapis.com/kaggle-avatars/images/default-thumb.png",
            # initial_history=[
            #     {"role": "user", "content": "こんにちは！", "date": "1970-01-01 12:00"},
            #     {"role": "assistant", "content": "こんばんは！", "date": "1970-01-01 22:00"}
            # ],
            lock_submission_till_bot_sends=True
        ),
        style={
            "height": "100vh", "width": "60vw"
            # "height": "300px", "width": "600px"
        }
    ),
    dbc.Row(
        children=[
            dbc.Col(
                html.P("Submitted: ")
            ),
            dbc.Col(
                html.Div(id="output")
            )
        ]
    )
])


@callback(
    Output("chat", "send_bot_message"),
    Input("chat", "n_submits"),
    State("chat", "user_message"),
    background=True,
    progress=[Output("chat", "is_bot_typing"), Output("chat", "disable_submission")]
)
def display_output(set_progress, _n_submits, user_message):
    print(_n_submits, user_message)
    if user_message is None or user_message == "":
        raise dash.exceptions.PreventUpdate
    set_progress((True, True))
    time.sleep(1)
    set_progress((False, False))
    return user_message


@callback(
    Output("output", "children"),
    Input("chat", "n_submits"),
    Input("chat", "history")
)
def display_output(_, history):
    if history is None:
        raise dash.exceptions.PreventUpdate
    return [
        html.P(str(h))
        for h in history
    ]


if __name__ == "__main__":
    app.run_server(debug=True)
