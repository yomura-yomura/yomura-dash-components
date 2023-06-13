# AUTO GENERATED FILE - DO NOT EDIT

export 'ydc'_chat

"""
    'ydc'_chat(;kwargs...)

A Chat component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `avatar_image_path` (String; required)
- `bot_name` (String; required): A Bot name that will be printed when this component is rendered.
- `history` (optional): . history has the following type: Array of lists containing elements 'role', 'content'.
Those elements have the following types:
  - `role` (String; optional)
  - `content` (String; optional)s
- `is_bot_typing` (Bool; optional)
- `n_submits` (Real; optional)
- `send_bot_message` (String; optional)
- `user_message` (String; optional): The value displayed in the input.
"""
function 'ydc'_chat(; kwargs...)
        available_props = Symbol[:id, :avatar_image_path, :bot_name, :history, :is_bot_typing, :n_submits, :send_bot_message, :user_message]
        wild_props = Symbol[]
        return Component("'ydc'_chat", "Chat", "yomura_dash_components", available_props, wild_props; kwargs...)
end

