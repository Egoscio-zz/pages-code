// summarize.js

'use strict'

var thresholdErrorMessage = 'Strength must be a number.'

function summarize (original, threshold) {
  if (!threshold.match(/^\d+$/)) return thresholdErrorMessage
  try {
    threshold = eval(threshold)
  } catch (e) {
    return thresholdErrorMessage
  }
  if (typeof threshold !== 'number') return thresholdErrorMessage
  var words = original.split(' ')
  var loopCount = Math.floor((words.length * threshold) / 100)
  var i
  for (i = 0; i < loopCount; i++) {
    delete words[Math.floor(Math.random() * words.length)]
  }
  return words.filter((a) => a !== null).join(' ')
}

$('#summarize-form').on('submit', (e) => {
  var $sentence = $('#summarize-form .sentence')
  var $threshold = $('#summarize-form .threshold')
  $sentence.val(summarize($sentence.val(), $threshold.val()))
  return false
})
