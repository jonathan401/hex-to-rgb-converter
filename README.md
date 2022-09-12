# About

I know there are lots of tools out there that can be used to convert hex color values to rgb color values. I built this simple one out to test my Javascript skills.

## Logic

I built the logic of the converter using the following logic:

- a user enters a hex value,
- the string is tested against a hex regex pattern,
- if the string tested against the hex regex passes, retrieve the 'hex' part of the string by removing the '#' sign,
- if the user enters a 6 lettered hex value (i.e. exluding the '#'), convert it to a 6 digit value,
- separate the 6 digits into 2 by using the `splice` method and converting the digits to strings,
- the digits are used as keys in the `hexMap` object to get their respective hex values,
- each 2 grouped digit is combined to form a red or green or blue color value using the formula
  `(first digit * 16) + (second digit * 1)`.
- The resulting values are used as the `r, g, b` values respectively.
- if the user however enters a 3 lettered hex value, the same process above is repeated but this time, the first digit and last digit will be represented by a single digit. e.g if user enters 'abc', the value is transformed to: 'aabbcc'.

## Conclusion

This solution certainly isn't the best one. I know there are still a lot of ways I could improve it and avoid code repetition. This is my first attempt. Definetly coming back to improve on this.
