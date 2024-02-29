
module YomuraDashComponents
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "3.5.1"

include("jl/'ydc'_chatcomponent.jl")
include("jl/'ydc'_trackinglastcomponent.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "yomura_dash_components",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "yomura_dash_components.js",
    external_url = "https://unpkg.com/yomura_dash_components@3.5.1/yomura_dash_components/yomura_dash_components.js",
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "yomura_dash_components.js.map",
    external_url = "https://unpkg.com/yomura_dash_components@3.5.1/yomura_dash_components/yomura_dash_components.js.map",
    dynamic = true,
    async = nothing,
    type = :js
)
            ]
        )

    )
end
end
