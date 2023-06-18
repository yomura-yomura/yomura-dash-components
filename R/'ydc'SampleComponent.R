# AUTO GENERATED FILE - DO NOT EDIT

#' @export
'ydc'SampleComponent <- function(id=NULL) {
    
    props <- list(id=id)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'SampleComponent',
        namespace = 'yomura_dash_components',
        propNames = c('id'),
        package = 'yomuraDashComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
