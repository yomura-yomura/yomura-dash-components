# AUTO GENERATED FILE - DO NOT EDIT

#' @export
'ydc'TrackingLastComponent <- function(children=NULL, id=NULL) {
    
    props <- list(children=children, id=id)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'TrackingLastComponent',
        namespace = 'yomura_dash_components',
        propNames = c('children', 'id'),
        package = 'yomuraDashComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
