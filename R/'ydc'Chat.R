# AUTO GENERATED FILE - DO NOT EDIT

#' @export
'ydc'Chat <- function(id=NULL, avatar_image_path=NULL, bot_name=NULL, history=NULL, is_bot_typing=NULL, n_submits=NULL, send_bot_message=NULL, user_message=NULL) {
    
    props <- list(id=id, avatar_image_path=avatar_image_path, bot_name=bot_name, history=history, is_bot_typing=is_bot_typing, n_submits=n_submits, send_bot_message=send_bot_message, user_message=user_message)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Chat',
        namespace = 'yomura_dash_components',
        propNames = c('id', 'avatar_image_path', 'bot_name', 'history', 'is_bot_typing', 'n_submits', 'send_bot_message', 'user_message'),
        package = 'yomuraDashComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
