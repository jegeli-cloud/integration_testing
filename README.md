# Documentation

## Hex to RGB API

    hexToRgb.js converts the give 6-digit hex value to an RGB value (r:x,g:y,b:z).
    This module performs basic checks to see that the value given is actually a hex value.
    If it's deemed not to be a hex value, null is returned.

    You can't put the # in front of the hex value, the browser doesn't send it correctly.
    Replace # with %23 in the url works though.

    Use the converter with the url http://localhost:3000/hexToRgb?hex=xxyyzz

## Express 

    server.js gets the value for conversion, sends it to hexToRgb module, and responds with the RGB value

## Tests

    Unit testing is in hex.test.js, testing if it converts one value correctly, checked with another converter available on the internet. It also tests if incorrect values are handled by returning null as they're supposed to.

    Intergration testing is handled in api.test.js, where the conversion is again tested basically.
    Invalid and empty inputs are also tested.
    Difference to unit testing is that we also listen for the server status code.
