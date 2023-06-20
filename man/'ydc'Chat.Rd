% Auto-generated: do not edit by hand
\name{'ydc'Chat}

\alias{'ydc'Chat}

\title{Chat component}

\description{
Chat Component built for Dash
}

\usage{
'ydc'Chat(id=NULL, avatar_image_path=NULL, bot_name=NULL,
disable_submission=NULL,
disable_submission_after_user_sends=NULL, history=NULL,
is_bot_typing=NULL, n_submits=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{avatar_image_path}{Character. A Bot icon that will be shown when this component is rendered.}

\item{bot_name}{Character. A Bot name that will be printed when this component is rendered.}

\item{disable_submission}{Logical. }

\item{disable_submission_after_user_sends}{Logical. }

\item{history}{List of lists containing elements 'role', 'content', 'date'.
those elements have the following types:
  - role (character; required)
  - content (character; required)
  - date (required): . date has the following type: lists containing elements 'tostring', 'todatestring', 'totimestring', 'tolocalestring', 'tolocaledatestring', 'tolocaletimestring', 'valueof', 'gettime', 'getfullyear', 'getutcfullyear', 'getmonth', 'getutcmonth', 'getdate', 'getutcdate', 'getday', 'getutcday', 'gethours', 'getutchours', 'getminutes', 'getutcminutes', 'getseconds', 'getutcseconds', 'getmilliseconds', 'getutcmilliseconds', 'gettimezoneoffset', 'settime', 'setmilliseconds', 'setutcmilliseconds', 'setseconds', 'setutcseconds', 'setminutes', 'setutcminutes', 'sethours', 'setutchours', 'setdate', 'setutcdate', 'setmonth', 'setutcmonth', 'setfullyear', 'setutcfullyear', 'toutcstring', 'toisostring', 'tojson', 'getvardate', '__@toprimitive@29'.
those elements have the following types:
  - tostring (optional): returns a string representation of a date. the format of the string depends on the locale.
  - todatestring (required): returns a date as a string value.
  - totimestring (required): returns a time as a string value.
  - tolocalestring (optional): returns a value as a string value appropriate to the host environment's current locale.


converts a date and time to a string by using the current or specified locale.
@,param,locales, ,a locale string or array of locale strings that contain one or more language or locale tags. if you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. if you omit this parameter, the default locale of the javascript runtime is used.
@,param,options, ,an object that contains one or more properties that specify comparison options.
@,param,locales, ,a locale string, array of locale strings, intl.locale object, or array of intl.locale objects that contain one or more language or locale tags. if you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. if you omit this parameter, the default locale of the javascript runtime is used.
@,param,options, ,an object that contains one or more properties that specify comparison options.. tolocalestring has the following type: lists containing elements .
those elements have the following types:

  - tolocaledatestring (required): returns a date as a string value appropriate to the host environment's current locale.


converts a date to a string by using the current or specified locale.
@,param,locales, ,a locale string or array of locale strings that contain one or more language or locale tags. if you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. if you omit this parameter, the default locale of the javascript runtime is used.
@,param,options, ,an object that contains one or more properties that specify comparison options.
@,param,locales, ,a locale string, array of locale strings, intl.locale object, or array of intl.locale objects that contain one or more language or locale tags. if you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. if you omit this parameter, the default locale of the javascript runtime is used.
@,param,options, ,an object that contains one or more properties that specify comparison options.. tolocaledatestring has the following type: lists containing elements .
those elements have the following types:

  - tolocaletimestring (required): returns a time as a string value appropriate to the host environment's current locale.


converts a time to a string by using the current or specified locale.
@,param,locales, ,a locale string or array of locale strings that contain one or more language or locale tags. if you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. if you omit this parameter, the default locale of the javascript runtime is used.
@,param,options, ,an object that contains one or more properties that specify comparison options.
@,param,locales, ,a locale string, array of locale strings, intl.locale object, or array of intl.locale objects that contain one or more language or locale tags. if you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. if you omit this parameter, the default locale of the javascript runtime is used.
@,param,options, ,an object that contains one or more properties that specify comparison options.. tolocaletimestring has the following type: lists containing elements .
those elements have the following types:

  - valueof (optional): returns the stored time value in milliseconds since midnight, january 1, 1970 utc.
  - gettime (required): gets the time value in milliseconds.
  - getfullyear (required): gets the year, using local time.
  - getutcfullyear (required): gets the year using universal coordinated time (utc).
  - getmonth (required): gets the month, using local time.
  - getutcmonth (required): gets the month of a date object using universal coordinated time (utc).
  - getdate (required): gets the day-of-the-month, using local time.
  - getutcdate (required): gets the day-of-the-month, using universal coordinated time (utc).
  - getday (required): gets the day of the week, using local time.
  - getutcday (required): gets the day of the week using universal coordinated time (utc).
  - gethours (required): gets the hours in a date, using local time.
  - getutchours (required): gets the hours value in a date object using universal coordinated time (utc).
  - getminutes (required): gets the minutes of a date object, using local time.
  - getutcminutes (required): gets the minutes of a date object using universal coordinated time (utc).
  - getseconds (required): gets the seconds of a date object, using local time.
  - getutcseconds (required): gets the seconds of a date object using universal coordinated time (utc).
  - getmilliseconds (required): gets the milliseconds of a date, using local time.
  - getutcmilliseconds (required): gets the milliseconds of a date object using universal coordinated time (utc).
  - gettimezoneoffset (required): gets the difference in minutes between the time on the local computer and universal coordinated time (utc).
  - settime (required): sets the date and time value in the date object.
@,param,time, ,a numeric value representing the number of elapsed milliseconds since midnight, january 1, 1970 gmt.
  - setmilliseconds (required): sets the milliseconds value in the date object using local time.
@,param,ms, ,a numeric value equal to the millisecond value.
  - setutcmilliseconds (required): sets the milliseconds value in the date object using universal coordinated time (utc).
@,param,ms, ,a numeric value equal to the millisecond value.
  - setseconds (required): sets the seconds value in the date object using local time.
@,param,sec, ,a numeric value equal to the seconds value.
@,param,ms, ,a numeric value equal to the milliseconds value.
  - setutcseconds (required): sets the seconds value in the date object using universal coordinated time (utc).
@,param,sec, ,a numeric value equal to the seconds value.
@,param,ms, ,a numeric value equal to the milliseconds value.
  - setminutes (required): sets the minutes value in the date object using local time.
@,param,min, ,a numeric value equal to the minutes value.
@,param,sec, ,a numeric value equal to the seconds value.
@,param,ms, ,a numeric value equal to the milliseconds value.
  - setutcminutes (required): sets the minutes value in the date object using universal coordinated time (utc).
@,param,min, ,a numeric value equal to the minutes value.
@,param,sec, ,a numeric value equal to the seconds value.
@,param,ms, ,a numeric value equal to the milliseconds value.
  - sethours (required): sets the hour value in the date object using local time.
@,param,hours, ,a numeric value equal to the hours value.
@,param,min, ,a numeric value equal to the minutes value.
@,param,sec, ,a numeric value equal to the seconds value.
@,param,ms, ,a numeric value equal to the milliseconds value.
  - setutchours (required): sets the hours value in the date object using universal coordinated time (utc).
@,param,hours, ,a numeric value equal to the hours value.
@,param,min, ,a numeric value equal to the minutes value.
@,param,sec, ,a numeric value equal to the seconds value.
@,param,ms, ,a numeric value equal to the milliseconds value.
  - setdate (required): sets the numeric day-of-the-month value of the date object using local time.
@,param,date, ,a numeric value equal to the day of the month.
  - setutcdate (required): sets the numeric day of the month in the date object using universal coordinated time (utc).
@,param,date, ,a numeric value equal to the day of the month.
  - setmonth (required): sets the month value in the date object using local time.
@,param,month, ,a numeric value equal to the month. the value for january is 0, and other month values follow consecutively.
@,param,date, ,a numeric value representing the day of the month. if this value is not supplied, the value from a call to the getdate method is used.
  - setutcmonth (required): sets the month value in the date object using universal coordinated time (utc).
@,param,month, ,a numeric value equal to the month. the value for january is 0, and other month values follow consecutively.
@,param,date, ,a numeric value representing the day of the month. if it is not supplied, the value from a call to the getutcdate method is used.
  - setfullyear (required): sets the year of the date object using local time.
@,param,year, ,a numeric value for the year.
@,param,month, ,a zero-based numeric value for the month (0 for january, 11 for december). must be specified if numdate is specified.
@,param,date, ,a numeric value equal for the day of the month.
  - setutcfullyear (required): sets the year value in the date object using universal coordinated time (utc).
@,param,year, ,a numeric value equal to the year.
@,param,month, ,a numeric value equal to the month. the value for january is 0, and other month values follow consecutively. must be supplied if numdate is supplied.
@,param,date, ,a numeric value equal to the day of the month.
  - toutcstring (required): returns a date converted to a string using universal coordinated time (utc).
  - toisostring (required): returns a date as a string value in iso format.
  - tojson (required): used by the json.stringify method to enable the transformation of an object's data for javascript object notation (json) serialization.
  - getvardate (required)
  - __@toprimitive@29 (required): converts a date object to a string.


converts a date object to a number.


converts a date object to a string or number.
@,param,hint, ,the strings "number", "string", or "default" to specify what primitive to return.
@,throws,{typeerror} if 'hint' was given something other than "number", "string", or "default".
@,returns,a number if 'hint' was "number", a string if 'hint' was "string" or "default".. __@toprimitive@29 has the following type: lists containing elements .
those elements have the following types:
s. }

\item{is_bot_typing}{Logical. }

\item{n_submits}{Numeric. }
}

\value{named list of JSON elements corresponding to React.js properties and their values}

