% Auto-generated: do not edit by hand
\name{'ydc'Chat}

\alias{'ydc'Chat}

\title{Chat component}

\description{
ExampleComponent is an example component. It takes a property, `label`, and displays it. It renders an input with the property `value` which is editable by the user.
}

\usage{
'ydc'Chat(id=NULL, avatar_image_path=NULL, bot_name=NULL,
history=NULL, is_bot_typing=NULL, n_submits=NULL,
send_bot_message=NULL, user_message=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{avatar_image_path}{Character. }

\item{bot_name}{Character. A Bot name that will be printed when this component is rendered.}

\item{history}{List of lists containing elements 'role', 'content'.
those elements have the following types:
  - role (character; optional)
  - content (character; optional)s. }

\item{is_bot_typing}{Logical. }

\item{n_submits}{Numeric. }

\item{send_bot_message}{Character. }

\item{user_message}{Character. The value displayed in the input.}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

