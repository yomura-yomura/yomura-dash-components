import dash

from yomura_dash_components.typing import DashChildrenProp

dash.register_page(__name__, path="/")


def layout() -> DashChildrenProp:
    return []
