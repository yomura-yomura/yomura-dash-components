# AUTO GENERATED FILE - DO NOT EDIT

export 'ydc'_trackinglastcomponent

"""
    'ydc'_trackinglastcomponent(;kwargs...)
    'ydc'_trackinglastcomponent(children::Any;kwargs...)
    'ydc'_trackinglastcomponent(children_maker::Function;kwargs...)


A TrackingLastComponent component.
Component description
Keyword arguments:
- `children` (Bool | Real | String | Dict | Array; optional)
- `id` (String; optional): Unique ID to identify this component in Dash callbacks.
"""
function 'ydc'_trackinglastcomponent(; kwargs...)
        available_props = Symbol[:children, :id]
        wild_props = Symbol[]
        return Component("'ydc'_trackinglastcomponent", "TrackingLastComponent", "yomura_dash_components", available_props, wild_props; kwargs...)
end

'ydc'_trackinglastcomponent(children::Any; kwargs...) = 'ydc'_trackinglastcomponent(;kwargs..., children = children)
'ydc'_trackinglastcomponent(children_maker::Function; kwargs...) = 'ydc'_trackinglastcomponent(children_maker(); kwargs...)

