# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Chat(Component):
    """A Chat component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.

Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- avatar_image_path (string; required)

- bot_name (string; required):
    A Bot name that will be printed when this component is rendered.

- history (list of dicts; optional)

    `history` is a list of dicts with keys:

    - content (string; optional)

    - role (string; optional)

- is_bot_typing (boolean; default False)

- n_submits (number; default 0)

- send_bot_message (string; optional)

- user_message (string; default ""):
    The value displayed in the input."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'yomura_dash_components'
    _type = 'Chat'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, bot_name=Component.REQUIRED, avatar_image_path=Component.REQUIRED, user_message=Component.UNDEFINED, is_bot_typing=Component.UNDEFINED, send_bot_message=Component.UNDEFINED, n_submits=Component.UNDEFINED, history=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'avatar_image_path', 'bot_name', 'history', 'is_bot_typing', 'n_submits', 'send_bot_message', 'user_message']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'avatar_image_path', 'bot_name', 'history', 'is_bot_typing', 'n_submits', 'send_bot_message', 'user_message']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        for k in ['avatar_image_path', 'bot_name']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')

        super(Chat, self).__init__(**args)
