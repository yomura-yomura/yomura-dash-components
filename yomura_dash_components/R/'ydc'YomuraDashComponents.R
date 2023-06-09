# AUTO GENERATED FILE - DO NOT EDIT

#' @export
'ydc'YomuraDashComponents <- function(id=NULL, label=NULL, value=NULL) {
    
    props <- list(id=id, label=label, value=value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'YomuraDashComponents',
        namespace = 'yomura_dash_components',
        propNames = c('id', 'label', 'value'),
        package = 'yomuraDashComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
