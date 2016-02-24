// dumbify.js

'use strict'

function shuffle(array) {
  var m = array.length
  var t
  var i
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m]
    array[m] = array[i]
    array[i] = t
  }
  return array
}

function random(original) {
  var words = original.split(' ')
  return words.map(function(word) {
    if (word.length > 4) {
      word = word.split('')
      var first = word[0]
      var last = word[word.length - 1]
      var between = word.slice(1, -1)
      var random = shuffle(shuffle(between))
      return first + random.join('') + last
    } else if (word.length > 1) {
      return shuffle(word.split('')).join('')
    } else {
      return word
    }
  }).join(' ')
}

$('#dumb-form').on('submit', function(e) {
  var $input = $('#dumb-form input')
  $input.val(random($input.val()))
  return false
})
