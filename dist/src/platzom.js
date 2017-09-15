"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = platzom;
function platzom(str) {
  var translation = str;
  // Si la palabra termina en "ar", se le quita esos dos caracteres

  if (str.toLowerCase().endsWith('ar')) {
    translation = str.slice(0, -2);
  }

  // Si la palabra empieza con "Z", se le añade "pe" al form-horizontal

  if (str.toLowerCase().startsWith("z")) {
    translation += "pe";
  }

  // Si la palabra traducida tiene 10 o más letras, Se debe partir a la mitad y unir con un gruion

  var length = str.length;
  if (length >= 10) {
    var firstHalf = translation.slice(0, Math.round(length / 2));
    var secondHalf = translation.slice(Math.round(length / 2));
    translation = firstHalf + "-" + secondHalf;
  }

  // Si la palabra es un paildromo,  ninguna regla cuenta y se devuelve la misma palabra intercalando mayúsculas y minusculas

  var reverse = function reverse(str) {
    return str.split('').reverse().join('');
  };
  function minMay(str) {
    var length = str.length;
    var translation = '';
    var capitalaze = true;

    for (var i = 0; i < length; i++) {
      var char = str.charAt(i);
      translation += capitalaze ? char.toUpperCase() : char.toLowerCase();
      capitalaze = !capitalaze;
    }
    return translation;
  }

  if (str == reverse(str)) {

    return minMay(str);
  }

  return translation;
}