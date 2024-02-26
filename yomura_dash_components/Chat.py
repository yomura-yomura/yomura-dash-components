# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Chat(Component):
    """A Chat component.
Chat Component built for Dash

Keyword arguments:

- id (string; default undefined):
    Unique ID to identify this component in Dash callbacks.

- avatar_image_path (string; required):
    A Bot icon that will be shown when this component is rendered.

- bot_name (string; required):
    A Bot name that will be printed when this component is rendered.

- disable_submission (boolean; default False)

- disable_submission_after_user_sends (boolean; default False)

- disable_textarea (boolean; default False)

- history (list of dicts; default undefined)

    `history` is a list of dicts with keys:

    - content (string; required)

    - date (dict; required)

        `date` is a dict with keys:

        - __@toPrimitive@36 (dict; required):
            Converts a Date object to a string.   Converts a Date
            object to a number.   Converts a Date object to a string
            or number. @,param,hint, ,The strings \"number\",
            \"string\", or \"default\" to specify what primitive to
            return. @,throws,{TypeError} If 'hint' was given something
            other than \"number\", \"string\", or \"default\".
            @,returns,A number if 'hint' was \"number\", a string if
            'hint' was \"string\" or \"default\".

            `__@toPrimitive@36` is a dict with keys:


        - getDate (required):
            Gets the day-of-the-month, using local time.

        - getDay (required):
            Gets the day of the week, using local time.

        - getFullYear (required):
            Gets the year, using local time.

        - getHours (required):
            Gets the hours in a date, using local time.

        - getMilliseconds (required):
            Gets the milliseconds of a Date, using local time.

        - getMinutes (required):
            Gets the minutes of a Date object, using local time.

        - getMonth (required):
            Gets the month, using local time.

        - getSeconds (required):
            Gets the seconds of a Date object, using local time.

        - getTime (required):
            Gets the time value in milliseconds.

        - getTimezoneOffset (required):
            Gets the difference in minutes between the time on the
            local computer and Universal Coordinated Time (UTC).

        - getUTCDate (required):
            Gets the day-of-the-month, using Universal Coordinated
            Time (UTC).

        - getUTCDay (required):
            Gets the day of the week using Universal Coordinated Time
            (UTC).

        - getUTCFullYear (required):
            Gets the year using Universal Coordinated Time (UTC).

        - getUTCHours (required):
            Gets the hours value in a Date object using Universal
            Coordinated Time (UTC).

        - getUTCMilliseconds (required):
            Gets the milliseconds of a Date object using Universal
            Coordinated Time (UTC).

        - getUTCMinutes (required):
            Gets the minutes of a Date object using Universal
            Coordinated Time (UTC).

        - getUTCMonth (required):
            Gets the month of a Date object using Universal
            Coordinated Time (UTC).

        - getUTCSeconds (required):
            Gets the seconds of a Date object using Universal
            Coordinated Time (UTC).

        - getVarDate (required)

        - setDate (required):
            Sets the numeric day-of-the-month value of the Date object
            using local time. @,param,date, ,A numeric value equal to
            the day of the month.

        - setFullYear (required):
            Sets the year of the Date object using local time.
            @,param,year, ,A numeric value for the year.
            @,param,month, ,A zero-based numeric value for the month
            (0 for January, 11 for December). Must be specified if
            numDate is specified. @,param,date, ,A numeric value equal
            for the day of the month.

        - setHours (required):
            Sets the hour value in the Date object using local time.
            @,param,hours, ,A numeric value equal to the hours value.
            @,param,min, ,A numeric value equal to the minutes value.
            @,param,sec, ,A numeric value equal to the seconds value.
            @,param,ms, ,A numeric value equal to the milliseconds
            value.

        - setMilliseconds (required):
            Sets the milliseconds value in the Date object using local
            time. @,param,ms, ,A numeric value equal to the
            millisecond value.

        - setMinutes (required):
            Sets the minutes value in the Date object using local
            time. @,param,min, ,A numeric value equal to the minutes
            value. @,param,sec, ,A numeric value equal to the seconds
            value. @,param,ms, ,A numeric value equal to the
            milliseconds value.

        - setMonth (required):
            Sets the month value in the Date object using local time.
            @,param,month, ,A numeric value equal to the month. The
            value for January is 0, and other month values follow
            consecutively. @,param,date, ,A numeric value representing
            the day of the month. If this value is not supplied, the
            value from a call to the getDate method is used.

        - setSeconds (required):
            Sets the seconds value in the Date object using local
            time. @,param,sec, ,A numeric value equal to the seconds
            value. @,param,ms, ,A numeric value equal to the
            milliseconds value.

        - setTime (required):
            Sets the date and time value in the Date object.
            @,param,time, ,A numeric value representing the number of
            elapsed milliseconds since midnight, January 1, 1970 GMT.

        - setUTCDate (required):
            Sets the numeric day of the month in the Date object using
            Universal Coordinated Time (UTC). @,param,date, ,A numeric
            value equal to the day of the month.

        - setUTCFullYear (required):
            Sets the year value in the Date object using Universal
            Coordinated Time (UTC). @,param,year, ,A numeric value
            equal to the year. @,param,month, ,A numeric value equal
            to the month. The value for January is 0, and other month
            values follow consecutively. Must be supplied if numDate
            is supplied. @,param,date, ,A numeric value equal to the
            day of the month.

        - setUTCHours (required):
            Sets the hours value in the Date object using Universal
            Coordinated Time (UTC). @,param,hours, ,A numeric value
            equal to the hours value. @,param,min, ,A numeric value
            equal to the minutes value. @,param,sec, ,A numeric value
            equal to the seconds value. @,param,ms, ,A numeric value
            equal to the milliseconds value.

        - setUTCMilliseconds (required):
            Sets the milliseconds value in the Date object using
            Universal Coordinated Time (UTC). @,param,ms, ,A numeric
            value equal to the millisecond value.

        - setUTCMinutes (required):
            Sets the minutes value in the Date object using Universal
            Coordinated Time (UTC). @,param,min, ,A numeric value
            equal to the minutes value. @,param,sec, ,A numeric value
            equal to the seconds value. @,param,ms, ,A numeric value
            equal to the milliseconds value.

        - setUTCMonth (required):
            Sets the month value in the Date object using Universal
            Coordinated Time (UTC). @,param,month, ,A numeric value
            equal to the month. The value for January is 0, and other
            month values follow consecutively. @,param,date, ,A
            numeric value representing the day of the month. If it is
            not supplied, the value from a call to the getUTCDate
            method is used.

        - setUTCSeconds (required):
            Sets the seconds value in the Date object using Universal
            Coordinated Time (UTC). @,param,sec, ,A numeric value
            equal to the seconds value. @,param,ms, ,A numeric value
            equal to the milliseconds value.

        - toDateString (required):
            Returns a date as a string value.

        - toISOString (required):
            Returns a date as a string value in ISO format.

        - toJSON (required):
            Used by the JSON.stringify method to enable the
            transformation of an object's data for JavaScript Object
            Notation (JSON) serialization.

        - toLocaleDateString (dict; required):
            Returns a date as a string value appropriate to the host
            environment's current locale.   Converts a date to a
            string by using the current or specified locale.
            @,param,locales, ,A locale string or array of locale
            strings that contain one or more language or locale tags.
            If you include more than one locale string, list them in
            descending order of priority so that the first entry is
            the preferred locale. If you omit this parameter, the
            default locale of the JavaScript runtime is used.
            @,param,options, ,An object that contains one or more
            properties that specify comparison options.
            @,param,locales, ,A locale string, array of locale
            strings, Intl.Locale object, or array of Intl.Locale
            objects that contain one or more language or locale tags.
            If you include more than one locale string, list them in
            descending order of priority so that the first entry is
            the preferred locale. If you omit this parameter, the
            default locale of the JavaScript runtime is used.
            @,param,options, ,An object that contains one or more
            properties that specify comparison options.

            `toLocaleDateString` is a dict with keys:


        - toLocaleString (dict; optional):
            Returns a value as a string value appropriate to the host
            environment's current locale.   Converts a date and time
            to a string by using the current or specified locale.
            @,param,locales, ,A locale string or array of locale
            strings that contain one or more language or locale tags.
            If you include more than one locale string, list them in
            descending order of priority so that the first entry is
            the preferred locale. If you omit this parameter, the
            default locale of the JavaScript runtime is used.
            @,param,options, ,An object that contains one or more
            properties that specify comparison options.
            @,param,locales, ,A locale string, array of locale
            strings, Intl.Locale object, or array of Intl.Locale
            objects that contain one or more language or locale tags.
            If you include more than one locale string, list them in
            descending order of priority so that the first entry is
            the preferred locale. If you omit this parameter, the
            default locale of the JavaScript runtime is used.
            @,param,options, ,An object that contains one or more
            properties that specify comparison options.

            `toLocaleString` is a dict with keys:


        - toLocaleTimeString (dict; required):
            Returns a time as a string value appropriate to the host
            environment's current locale.   Converts a time to a
            string by using the current or specified locale.
            @,param,locales, ,A locale string or array of locale
            strings that contain one or more language or locale tags.
            If you include more than one locale string, list them in
            descending order of priority so that the first entry is
            the preferred locale. If you omit this parameter, the
            default locale of the JavaScript runtime is used.
            @,param,options, ,An object that contains one or more
            properties that specify comparison options.
            @,param,locales, ,A locale string, array of locale
            strings, Intl.Locale object, or array of Intl.Locale
            objects that contain one or more language or locale tags.
            If you include more than one locale string, list them in
            descending order of priority so that the first entry is
            the preferred locale. If you omit this parameter, the
            default locale of the JavaScript runtime is used.
            @,param,options, ,An object that contains one or more
            properties that specify comparison options.

            `toLocaleTimeString` is a dict with keys:


        - toString (optional):
            Returns a string representation of a date. The format of
            the string depends on the locale.

        - toTimeString (required):
            Returns a time as a string value.

        - toUTCString (required):
            Returns a date converted to a string using Universal
            Coordinated Time (UTC).

        - valueOf (optional):
            Returns the stored time value in milliseconds since
            midnight, January 1, 1970 UTC.

    - role (string; required)

- initial_user_input_value (string; default '')

- is_bot_typing (boolean; default False)

- last_submitted_user_input_value (string; default undefined)

- n_submits (number; default 0)

- user_input_value (string; default '')"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'yomura_dash_components'
    _type = 'Chat'
    @_explicitize_args
    def __init__(self, bot_name=Component.REQUIRED, avatar_image_path=Component.REQUIRED, is_bot_typing=Component.UNDEFINED, n_submits=Component.UNDEFINED, initial_user_input_value=Component.UNDEFINED, user_input_value=Component.UNDEFINED, last_submitted_user_input_value=Component.UNDEFINED, history=Component.UNDEFINED, disable_submission=Component.UNDEFINED, disable_submission_after_user_sends=Component.UNDEFINED, disable_textarea=Component.UNDEFINED, id=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'avatar_image_path', 'bot_name', 'disable_submission', 'disable_submission_after_user_sends', 'disable_textarea', 'history', 'initial_user_input_value', 'is_bot_typing', 'last_submitted_user_input_value', 'n_submits', 'user_input_value']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'avatar_image_path', 'bot_name', 'disable_submission', 'disable_submission_after_user_sends', 'disable_textarea', 'history', 'initial_user_input_value', 'is_bot_typing', 'last_submitted_user_input_value', 'n_submits', 'user_input_value']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        for k in ['avatar_image_path', 'bot_name']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')

        super(Chat, self).__init__(**args)
