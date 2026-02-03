//converts a hex value to and rgb values

function hexToRgb(hex) {

  console.log("hexToRgb called with:", hex);
  //remove # if present
  hex = hex.replace(/^#/, '');
  console.log("Stripped hex:", hex);

  //check if the length of the value given is 6
  if (hex.length !== 6) {
    return null;
  }

  //check that each pair of characters is a valid hex value
  if (!/^[0-9A-Fa-f]{6}$/.test(hex)) {
    return null;
  }

  //change each two characters to an integer value,
  //using base 16
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  //
  if (isNaN(r) || isNaN(g) || isNaN(b)) {
    return null;
  }

  return { r, g, b };
}

module.exports = { hexToRgb };