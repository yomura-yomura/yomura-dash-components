import pathlib
import random
import time
from typing import Optional

import dash
import tqdm
from dash import Input, Output, callback

import yomura_dash_components as ydc

project_root_path = pathlib.Path(__file__).parent.parent.parent.parent
target_file_path = project_root_path / "sample-output.log"


@ydc.callbacks.tail.callback
def update_tail(lines: list[str]) -> list[str]:
    print("update_tail called")
    return [line for line in lines]


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
def generate_dummy_data(n_clicks: Optional[int]) -> tuple[bool]:
    target_file_path.unlink(missing_ok=True)

    if not n_clicks:
        raise dash.exceptions.PreventUpdate

    with open(target_file_path, "a") as f:
        for i in range(100):
            r = random.random()
            if r < 0.5:
                for _ in tqdm.tqdm(range(100), file=f, desc=f"{i}/{100}"):
                    f.flush()
                    time.sleep(random.random() * 0.03)
            else:
                for dummy_data in f"{i}/{100}: generating dummy data...":
                    f.write(f"{dummy_data}")
                    f.flush()
                    time.sleep(random.random() * 0.03)
                f.write("\n")
                f.flush()

    return False,
