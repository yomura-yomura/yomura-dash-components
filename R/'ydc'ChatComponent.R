# AUTO GENERATED FILE - DO NOT EDIT

#' @export
'ydc'ChatComponent <- function(id=NULL, _disable_submission=NULL, avatar_image_path=NULL, bot_name=NULL, data_on_link_clicked=NULL, disable_submission=NULL, disable_submission_after_user_sends=NULL, disable_textarea=NULL, history=NULL, initial_user_input_value=NULL, is_bot_typing=NULL, last_submitted_user_input_value=NULL, min_standard_font_size_in_px=NULL, n_submits=NULL, type_on_link_clicked=NULL, user_input_value=NULL) {
    
    props <- list(id=id, _disable_submission=_disable_submission, avatar_image_path=avatar_image_path, bot_name=bot_name, data_on_link_clicked=data_on_link_clicked, disable_submission=disable_submission, disable_submission_after_user_sends=disable_submission_after_user_sends, disable_textarea=disable_textarea, history=history, initial_user_input_value=initial_user_input_value, is_bot_typing=is_bot_typing, last_submitted_user_input_value=last_submitted_user_input_value, min_standard_font_size_in_px=min_standard_font_size_in_px, n_submits=n_submits, type_on_link_clicked=type_on_link_clicked, user_input_value=user_input_value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'ChatComponent',
        namespace = 'yomura_dash_components',
        propNames = c('id', '_disable_submission', 'avatar_image_path', 'bot_name', 'data_on_link_clicked', 'disable_submission', 'disable_submission_after_user_sends', 'disable_textarea', 'history', 'initial_user_input_value', 'is_bot_typing', 'last_submitted_user_input_value', 'min_standard_font_size_in_px', 'n_submits', 'type_on_link_clicked', 'user_input_value'),
        package = 'yomuraDashComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
