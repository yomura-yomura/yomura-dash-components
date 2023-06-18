# AUTO GENERATED FILE - DO NOT EDIT

export 'ydc'_chat

"""
    'ydc'_chat(;kwargs...)

A Chat component.

Keyword arguments:
- `id` (String; optional)
- `avatar_image_path` (String; required)
- `bot_name` (String; required)
- `history` (optional): . history has the following type: Array of lists containing elements 'role', 'content', 'date'.
Those elements have the following types:
  - `role` (String; required)
  - `content` (String; required)
  - `date` (required): . date has the following type: lists containing elements 'toString', 'toDateString', 'toTimeString', 'toLocaleString', 'toLocaleDateString', 'toLocaleTimeString', 'valueOf', 'getTime', 'getFullYear', 'getUTCFullYear', 'getMonth', 'getUTCMonth', 'getDate', 'getUTCDate', 'getDay', 'getUTCDay', 'getHours', 'getUTCHours', 'getMinutes', 'getUTCMinutes', 'getSeconds', 'getUTCSeconds', 'getMilliseconds', 'getUTCMilliseconds', 'getTimezoneOffset', 'setTime', 'setMilliseconds', 'setUTCMilliseconds', 'setSeconds', 'setUTCSeconds', 'setMinutes', 'setUTCMinutes', 'setHours', 'setUTCHours', 'setDate', 'setUTCDate', 'setMonth', 'setUTCMonth', 'setFullYear', 'setUTCFullYear', 'toUTCString', 'toISOString', 'toJSON', 'getVarDate', '__@toPrimitive@33'.
Those elements have the following types:
  - `toString` (optional): Returns a string representation of a date. The format of the string depends on the locale.
  - `toDateString` (required): Returns a date as a string value.
  - `toTimeString` (required): Returns a time as a string value.
  - `toLocaleString` (optional): Returns a value as a string value appropriate to the host environment's current locale.


Converts a date and time to a string by using the current or specified locale.
@,param,locales, ,A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.
@,param,options, ,An object that contains one or more properties that specify comparison options.
@,param,locales, ,A locale string, array of locale strings, Intl.Locale object, or array of Intl.Locale objects that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.
@,param,options, ,An object that contains one or more properties that specify comparison options.. toLocaleString has the following type: lists containing elements .
Those elements have the following types:

  - `toLocaleDateString` (required): Returns a date as a string value appropriate to the host environment's current locale.


Converts a date to a string by using the current or specified locale.
@,param,locales, ,A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.
@,param,options, ,An object that contains one or more properties that specify comparison options.
@,param,locales, ,A locale string, array of locale strings, Intl.Locale object, or array of Intl.Locale objects that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.
@,param,options, ,An object that contains one or more properties that specify comparison options.. toLocaleDateString has the following type: lists containing elements .
Those elements have the following types:

  - `toLocaleTimeString` (required): Returns a time as a string value appropriate to the host environment's current locale.


Converts a time to a string by using the current or specified locale.
@,param,locales, ,A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.
@,param,options, ,An object that contains one or more properties that specify comparison options.
@,param,locales, ,A locale string, array of locale strings, Intl.Locale object, or array of Intl.Locale objects that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.
@,param,options, ,An object that contains one or more properties that specify comparison options.. toLocaleTimeString has the following type: lists containing elements .
Those elements have the following types:

  - `valueOf` (optional): Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.
  - `getTime` (required): Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.
  - `getFullYear` (required): Gets the year, using local time.
  - `getUTCFullYear` (required): Gets the year using Universal Coordinated Time (UTC).
  - `getMonth` (required): Gets the month, using local time.
  - `getUTCMonth` (required): Gets the month of a Date object using Universal Coordinated Time (UTC).
  - `getDate` (required): Gets the day-of-the-month, using local time.
  - `getUTCDate` (required): Gets the day-of-the-month, using Universal Coordinated Time (UTC).
  - `getDay` (required): Gets the day of the week, using local time.
  - `getUTCDay` (required): Gets the day of the week using Universal Coordinated Time (UTC).
  - `getHours` (required): Gets the hours in a date, using local time.
  - `getUTCHours` (required): Gets the hours value in a Date object using Universal Coordinated Time (UTC).
  - `getMinutes` (required): Gets the minutes of a Date object, using local time.
  - `getUTCMinutes` (required): Gets the minutes of a Date object using Universal Coordinated Time (UTC).
  - `getSeconds` (required): Gets the seconds of a Date object, using local time.
  - `getUTCSeconds` (required): Gets the seconds of a Date object using Universal Coordinated Time (UTC).
  - `getMilliseconds` (required): Gets the milliseconds of a Date, using local time.
  - `getUTCMilliseconds` (required): Gets the milliseconds of a Date object using Universal Coordinated Time (UTC).
  - `getTimezoneOffset` (required): Gets the difference in minutes between the time on the local computer and Universal Coordinated Time (UTC).
  - `setTime` (required): Sets the date and time value in the Date object.
@,param,time, ,A numeric value representing the number of elapsed milliseconds since midnight, January 1, 1970 GMT.
  - `setMilliseconds` (required): Sets the milliseconds value in the Date object using local time.
@,param,ms, ,A numeric value equal to the millisecond value.
  - `setUTCMilliseconds` (required): Sets the milliseconds value in the Date object using Universal Coordinated Time (UTC).
@,param,ms, ,A numeric value equal to the millisecond value.
  - `setSeconds` (required): Sets the seconds value in the Date object using local time.
@,param,sec, ,A numeric value equal to the seconds value.
@,param,ms, ,A numeric value equal to the milliseconds value.
  - `setUTCSeconds` (required): Sets the seconds value in the Date object using Universal Coordinated Time (UTC).
@,param,sec, ,A numeric value equal to the seconds value.
@,param,ms, ,A numeric value equal to the milliseconds value.
  - `setMinutes` (required): Sets the minutes value in the Date object using local time.
@,param,min, ,A numeric value equal to the minutes value.
@,param,sec, ,A numeric value equal to the seconds value.
@,param,ms, ,A numeric value equal to the milliseconds value.
  - `setUTCMinutes` (required): Sets the minutes value in the Date object using Universal Coordinated Time (UTC).
@,param,min, ,A numeric value equal to the minutes value.
@,param,sec, ,A numeric value equal to the seconds value.
@,param,ms, ,A numeric value equal to the milliseconds value.
  - `setHours` (required): Sets the hour value in the Date object using local time.
@,param,hours, ,A numeric value equal to the hours value.
@,param,min, ,A numeric value equal to the minutes value.
@,param,sec, ,A numeric value equal to the seconds value.
@,param,ms, ,A numeric value equal to the milliseconds value.
  - `setUTCHours` (required): Sets the hours value in the Date object using Universal Coordinated Time (UTC).
@,param,hours, ,A numeric value equal to the hours value.
@,param,min, ,A numeric value equal to the minutes value.
@,param,sec, ,A numeric value equal to the seconds value.
@,param,ms, ,A numeric value equal to the milliseconds value.
  - `setDate` (required): Sets the numeric day-of-the-month value of the Date object using local time.
@,param,date, ,A numeric value equal to the day of the month.
  - `setUTCDate` (required): Sets the numeric day of the month in the Date object using Universal Coordinated Time (UTC).
@,param,date, ,A numeric value equal to the day of the month.
  - `setMonth` (required): Sets the month value in the Date object using local time.
@,param,month, ,A numeric value equal to the month. The value for January is 0, and other month values follow consecutively.
@,param,date, ,A numeric value representing the day of the month. If this value is not supplied, the value from a call to the getDate method is used.
  - `setUTCMonth` (required): Sets the month value in the Date object using Universal Coordinated Time (UTC).
@,param,month, ,A numeric value equal to the month. The value for January is 0, and other month values follow consecutively.
@,param,date, ,A numeric value representing the day of the month. If it is not supplied, the value from a call to the getUTCDate method is used.
  - `setFullYear` (required): Sets the year of the Date object using local time.
@,param,year, ,A numeric value for the year.
@,param,month, ,A zero-based numeric value for the month (0 for January, 11 for December). Must be specified if numDate is specified.
@,param,date, ,A numeric value equal for the day of the month.
  - `setUTCFullYear` (required): Sets the year value in the Date object using Universal Coordinated Time (UTC).
@,param,year, ,A numeric value equal to the year.
@,param,month, ,A numeric value equal to the month. The value for January is 0, and other month values follow consecutively. Must be supplied if numDate is supplied.
@,param,date, ,A numeric value equal to the day of the month.
  - `toUTCString` (required): Returns a date converted to a string using Universal Coordinated Time (UTC).
  - `toISOString` (required): Returns a date as a string value in ISO format.
  - `toJSON` (required): Used by the JSON.stringify method to enable the transformation of an object's data for JavaScript Object Notation (JSON) serialization.
  - `getVarDate` (required)
  - `__@toPrimitive@33` (required): Converts a Date object to a string.


Converts a Date object to a number.


Converts a Date object to a string or number.
@,param,hint, ,The strings "number", "string", or "default" to specify what primitive to return.
@,throws,{TypeError}, ,If 'hint' was given something other than "number", "string", or "default".
@,returns,A number if 'hint' was "number", a string if 'hint' was "string" or "default".. __@toPrimitive@33 has the following type: lists containing elements .
Those elements have the following types:
s
- `initial_history` (optional): . initial_history has the following type: Array of lists containing elements 'role', 'content', 'date'.
Those elements have the following types:
  - `role` (String; required)
  - `content` (String; required)
  - `date` (required): . date has the following type: lists containing elements 'toString', 'toDateString', 'toTimeString', 'toLocaleString', 'toLocaleDateString', 'toLocaleTimeString', 'valueOf', 'getTime', 'getFullYear', 'getUTCFullYear', 'getMonth', 'getUTCMonth', 'getDate', 'getUTCDate', 'getDay', 'getUTCDay', 'getHours', 'getUTCHours', 'getMinutes', 'getUTCMinutes', 'getSeconds', 'getUTCSeconds', 'getMilliseconds', 'getUTCMilliseconds', 'getTimezoneOffset', 'setTime', 'setMilliseconds', 'setUTCMilliseconds', 'setSeconds', 'setUTCSeconds', 'setMinutes', 'setUTCMinutes', 'setHours', 'setUTCHours', 'setDate', 'setUTCDate', 'setMonth', 'setUTCMonth', 'setFullYear', 'setUTCFullYear', 'toUTCString', 'toISOString', 'toJSON', 'getVarDate', '__@toPrimitive@33'.
Those elements have the following types:
  - `toString` (optional): Returns a string representation of a date. The format of the string depends on the locale.
  - `toDateString` (required): Returns a date as a string value.
  - `toTimeString` (required): Returns a time as a string value.
  - `toLocaleString` (optional): Returns a value as a string value appropriate to the host environment's current locale.


Converts a date and time to a string by using the current or specified locale.
@,param,locales, ,A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.
@,param,options, ,An object that contains one or more properties that specify comparison options.
@,param,locales, ,A locale string, array of locale strings, Intl.Locale object, or array of Intl.Locale objects that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.
@,param,options, ,An object that contains one or more properties that specify comparison options.. toLocaleString has the following type: lists containing elements .
Those elements have the following types:

  - `toLocaleDateString` (required): Returns a date as a string value appropriate to the host environment's current locale.


Converts a date to a string by using the current or specified locale.
@,param,locales, ,A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.
@,param,options, ,An object that contains one or more properties that specify comparison options.
@,param,locales, ,A locale string, array of locale strings, Intl.Locale object, or array of Intl.Locale objects that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.
@,param,options, ,An object that contains one or more properties that specify comparison options.. toLocaleDateString has the following type: lists containing elements .
Those elements have the following types:

  - `toLocaleTimeString` (required): Returns a time as a string value appropriate to the host environment's current locale.


Converts a time to a string by using the current or specified locale.
@,param,locales, ,A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.
@,param,options, ,An object that contains one or more properties that specify comparison options.
@,param,locales, ,A locale string, array of locale strings, Intl.Locale object, or array of Intl.Locale objects that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.
@,param,options, ,An object that contains one or more properties that specify comparison options.. toLocaleTimeString has the following type: lists containing elements .
Those elements have the following types:

  - `valueOf` (optional): Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.
  - `getTime` (required): Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.
  - `getFullYear` (required): Gets the year, using local time.
  - `getUTCFullYear` (required): Gets the year using Universal Coordinated Time (UTC).
  - `getMonth` (required): Gets the month, using local time.
  - `getUTCMonth` (required): Gets the month of a Date object using Universal Coordinated Time (UTC).
  - `getDate` (required): Gets the day-of-the-month, using local time.
  - `getUTCDate` (required): Gets the day-of-the-month, using Universal Coordinated Time (UTC).
  - `getDay` (required): Gets the day of the week, using local time.
  - `getUTCDay` (required): Gets the day of the week using Universal Coordinated Time (UTC).
  - `getHours` (required): Gets the hours in a date, using local time.
  - `getUTCHours` (required): Gets the hours value in a Date object using Universal Coordinated Time (UTC).
  - `getMinutes` (required): Gets the minutes of a Date object, using local time.
  - `getUTCMinutes` (required): Gets the minutes of a Date object using Universal Coordinated Time (UTC).
  - `getSeconds` (required): Gets the seconds of a Date object, using local time.
  - `getUTCSeconds` (required): Gets the seconds of a Date object using Universal Coordinated Time (UTC).
  - `getMilliseconds` (required): Gets the milliseconds of a Date, using local time.
  - `getUTCMilliseconds` (required): Gets the milliseconds of a Date object using Universal Coordinated Time (UTC).
  - `getTimezoneOffset` (required): Gets the difference in minutes between the time on the local computer and Universal Coordinated Time (UTC).
  - `setTime` (required): Sets the date and time value in the Date object.
@,param,time, ,A numeric value representing the number of elapsed milliseconds since midnight, January 1, 1970 GMT.
  - `setMilliseconds` (required): Sets the milliseconds value in the Date object using local time.
@,param,ms, ,A numeric value equal to the millisecond value.
  - `setUTCMilliseconds` (required): Sets the milliseconds value in the Date object using Universal Coordinated Time (UTC).
@,param,ms, ,A numeric value equal to the millisecond value.
  - `setSeconds` (required): Sets the seconds value in the Date object using local time.
@,param,sec, ,A numeric value equal to the seconds value.
@,param,ms, ,A numeric value equal to the milliseconds value.
  - `setUTCSeconds` (required): Sets the seconds value in the Date object using Universal Coordinated Time (UTC).
@,param,sec, ,A numeric value equal to the seconds value.
@,param,ms, ,A numeric value equal to the milliseconds value.
  - `setMinutes` (required): Sets the minutes value in the Date object using local time.
@,param,min, ,A numeric value equal to the minutes value.
@,param,sec, ,A numeric value equal to the seconds value.
@,param,ms, ,A numeric value equal to the milliseconds value.
  - `setUTCMinutes` (required): Sets the minutes value in the Date object using Universal Coordinated Time (UTC).
@,param,min, ,A numeric value equal to the minutes value.
@,param,sec, ,A numeric value equal to the seconds value.
@,param,ms, ,A numeric value equal to the milliseconds value.
  - `setHours` (required): Sets the hour value in the Date object using local time.
@,param,hours, ,A numeric value equal to the hours value.
@,param,min, ,A numeric value equal to the minutes value.
@,param,sec, ,A numeric value equal to the seconds value.
@,param,ms, ,A numeric value equal to the milliseconds value.
  - `setUTCHours` (required): Sets the hours value in the Date object using Universal Coordinated Time (UTC).
@,param,hours, ,A numeric value equal to the hours value.
@,param,min, ,A numeric value equal to the minutes value.
@,param,sec, ,A numeric value equal to the seconds value.
@,param,ms, ,A numeric value equal to the milliseconds value.
  - `setDate` (required): Sets the numeric day-of-the-month value of the Date object using local time.
@,param,date, ,A numeric value equal to the day of the month.
  - `setUTCDate` (required): Sets the numeric day of the month in the Date object using Universal Coordinated Time (UTC).
@,param,date, ,A numeric value equal to the day of the month.
  - `setMonth` (required): Sets the month value in the Date object using local time.
@,param,month, ,A numeric value equal to the month. The value for January is 0, and other month values follow consecutively.
@,param,date, ,A numeric value representing the day of the month. If this value is not supplied, the value from a call to the getDate method is used.
  - `setUTCMonth` (required): Sets the month value in the Date object using Universal Coordinated Time (UTC).
@,param,month, ,A numeric value equal to the month. The value for January is 0, and other month values follow consecutively.
@,param,date, ,A numeric value representing the day of the month. If it is not supplied, the value from a call to the getUTCDate method is used.
  - `setFullYear` (required): Sets the year of the Date object using local time.
@,param,year, ,A numeric value for the year.
@,param,month, ,A zero-based numeric value for the month (0 for January, 11 for December). Must be specified if numDate is specified.
@,param,date, ,A numeric value equal for the day of the month.
  - `setUTCFullYear` (required): Sets the year value in the Date object using Universal Coordinated Time (UTC).
@,param,year, ,A numeric value equal to the year.
@,param,month, ,A numeric value equal to the month. The value for January is 0, and other month values follow consecutively. Must be supplied if numDate is supplied.
@,param,date, ,A numeric value equal to the day of the month.
  - `toUTCString` (required): Returns a date converted to a string using Universal Coordinated Time (UTC).
  - `toISOString` (required): Returns a date as a string value in ISO format.
  - `toJSON` (required): Used by the JSON.stringify method to enable the transformation of an object's data for JavaScript Object Notation (JSON) serialization.
  - `getVarDate` (required)
  - `__@toPrimitive@33` (required): Converts a Date object to a string.


Converts a Date object to a number.


Converts a Date object to a string or number.
@,param,hint, ,The strings "number", "string", or "default" to specify what primitive to return.
@,throws,{TypeError}, ,If 'hint' was given something other than "number", "string", or "default".
@,returns,A number if 'hint' was "number", a string if 'hint' was "string" or "default".. __@toPrimitive@33 has the following type: lists containing elements .
Those elements have the following types:
s
- `is_bot_typing` (Bool; optional)
- `n_submits` (Real; optional)
- `send_bot_message` (String; optional)
- `user_message` (String; optional)
"""
function 'ydc'_chat(; kwargs...)
        available_props = Symbol[:id, :avatar_image_path, :bot_name, :history, :initial_history, :is_bot_typing, :n_submits, :send_bot_message, :user_message]
        wild_props = Symbol[]
        return Component("'ydc'_chat", "Chat", "yomura_dash_components", available_props, wild_props; kwargs...)
end

