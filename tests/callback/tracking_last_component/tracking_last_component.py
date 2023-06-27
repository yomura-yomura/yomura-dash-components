import random
import time
import pathlib

import dash
from dash import html, callback, Input, Output, State


target_file_path = pathlib.Path(__file__).parent / "sample-output.log"


@callback(
    [
        Output("tail", "children"),
        Output("tail-file-current-cursor-position", "data")
    ],
    Input("tail-interval", "n_intervals"),
    State("tail-file-current-cursor-position", "data"),
    State("tail", "children")
)
def update_tail(n_intervals, current_cursor_position, children_so_far: list[dict]):
    if not target_file_path.exists():
        return [], current_cursor_position

    if not n_intervals:
        raise dash.exceptions.PreventUpdate
    print("update_tail called")

    with open(target_file_path, "r") as f:
        f.seek(current_cursor_position)
        text_left = f.read()
        current_cursor_position = f.tell()

    if children_so_far is not None and len(children_so_far) > 0:
        last_component = children_so_far.pop(-1)
        text_left = last_component["props"]["children"] + text_left

    children = [
        html.P(line)
        for line in text_left.splitlines(keepends=True)
    ]
    return children_so_far + children, current_cursor_position


@callback(
    [
        Output("tail-button", "disabled")
    ],
    Input("tail-button", "n_clicks"),
    background=True,
    running=[
        (Output("tail-button", "disabled"), True, False)
    ]
)
def generate_dummy_data(n_clicks):
    target_file_path.unlink(missing_ok=True)

    if not n_clicks:
        raise dash.exceptions.PreventUpdate

    with open(target_file_path, "a") as f:
        for i in range(100):
            if random.random() < 0.5:
                dummy_data = f"{i}/{100}"
                print(f"Dummy data added: {dummy_data}")
                f.write(f"{dummy_data}\n")
                f.flush()
                time.sleep(random.random())
            else:
                for dummy_data in f"{i}/{100}: generating dummy data...":
                    f.write(f"{dummy_data}")
                    f.flush()
                    time.sleep(random.random())
                f.write("\n")
                f.flush()

    return False,
