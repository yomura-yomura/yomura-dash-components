from dash import html
from dash.development.base_component import Component

from .._imports_ import ChatComponent

__all__ = ["Chat"]


class Chat(html.Div):
    def __init__(
        self,
        bot_name,
        avatar_image_path,
        is_bot_typing=None,
        n_submits=None,
        initial_user_input_value=None,
        user_input_value=None,
        last_submitted_user_input_value=None,
        history=None,
        disable_submission=None,
        # _disable_submission=None,
        disable_submission_after_user_sends=None,
        disable_textarea=None,
        type_on_link_clicked=None,
        min_standard_font_size_in_px=None,
        id=None,  # noqa: PyShadowingBuiltins
        style=None,
    ):
        super().__init__(
            children=[
                ChatComponent(
                    bot_name=bot_name,
                    avatar_image_path=avatar_image_path,
                    is_bot_typing=is_bot_typing,
                    n_submits=n_submits,
                    initial_user_input_value=initial_user_input_value,
                    user_input_value=user_input_value,
                    last_submitted_user_input_value=last_submitted_user_input_value,
                    history=history,
                    # disable_submission=disable_submission,
                    _disable_submission=disable_submission,
                    disable_submission_after_user_sends=disable_submission_after_user_sends,
                    disable_textarea=disable_textarea,
                    type_on_link_clicked=type_on_link_clicked,
                    min_standard_font_size_in_px=min_standard_font_size_in_px,
                    id=id,
                ),
            ],
            style=style,
        )
