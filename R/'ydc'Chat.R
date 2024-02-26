# AUTO GENERATED FILE - DO NOT EDIT

#' @export
'ydc'Chat <- function(id=NULL, avatar_image_path=NULL, bot_name=NULL, disable_submission=NULL, disable_submission_=NULL, disable_submission_after_user_sends=NULL, disable_textarea=NULL, history=NULL, initial_user_input_value=NULL, is_bot_typing=NULL, last_submitted_user_input_value=NULL, n_submits=NULL, user_input_value=NULL) {
    
    props <- list(id=id, avatar_image_path=avatar_image_path, bot_name=bot_name, disable_submission=disable_submission, disable_submission_=disable_submission_, disable_submission_after_user_sends=disable_submission_after_user_sends, disable_textarea=disable_textarea, history=history, initial_user_input_value=initial_user_input_value, is_bot_typing=is_bot_typing, last_submitted_user_input_value=last_submitted_user_input_value, n_submits=n_submits, user_input_value=user_input_value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Chat',
        namespace = 'yomura_dash_components',
        propNames = c('id', 'avatar_image_path', 'bot_name', 'disable_submission', 'disable_submission_', 'disable_submission_after_user_sends', 'disable_textarea', 'history', 'initial_user_input_value', 'is_bot_typing', 'last_submitted_user_input_value', 'n_submits', 'user_input_value'),
        package = 'yomuraDashComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
