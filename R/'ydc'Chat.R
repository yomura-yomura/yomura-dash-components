# AUTO GENERATED FILE - DO NOT EDIT

#' @export
'ydc'Chat <- function(id=NULL, avatar_image_path=NULL, bot_name=NULL, disable_submission=NULL, disable_submission_after_user_sends=NULL, history=NULL, is_bot_typing=NULL, n_submits=NULL) {
    
    props <- list(id=id, avatar_image_path=avatar_image_path, bot_name=bot_name, disable_submission=disable_submission, disable_submission_after_user_sends=disable_submission_after_user_sends, history=history, is_bot_typing=is_bot_typing, n_submits=n_submits)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Chat',
        namespace = 'yomura_dash_components',
        propNames = c('id', 'avatar_image_path', 'bot_name', 'disable_submission', 'disable_submission_after_user_sends', 'history', 'is_bot_typing', 'n_submits'),
        package = 'yomuraDashComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
