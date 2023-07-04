import os
import pathlib
import importlib

import dash
from dash import Dash, html, dcc
from dash import DiskcacheManager, CeleryManager

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
    background_callback_manager=background_callback_manager,
    use_pages=True,
    pages_folder="tests/layout",
)

app.layout = html.Div([
    html.H1('Demo Pages of yomura-dash-components'),

    html.Div(
        [
            html.Div(
                dcc.Link(
                    f"{page['name']} - {page['path']}", href=page["relative_path"]
                )
            )
            for page in dash.page_registry.values()
        ]
    ),
    html.Hr(),
    dash.page_container
])

for python_script_path in (pathlib.Path(".") / "tests" / "callback").rglob("*.py"):
    print(python_script_path)
    importlib.import_module(".".join(python_script_path.with_suffix("").parts))


if __name__ == "__main__":
    app.run_server(debug=True)
