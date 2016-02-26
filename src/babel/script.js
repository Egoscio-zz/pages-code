// script.js

'use strict'

var loaded = []

function loadPage(page, success, error) {
  success = success || (() => {})
  error = error || (() => {})
  $.get(page + '.html', success).fail(error)
}

function togglePopup() {
  var $popup = $('#popup')
  var isHidden = $popup.is(':hidden')
  $popup.velocity({
    opacity: isHidden ? 1 : 0
  }, {
    display: isHidden ? 'block' : 'none'
  })
}

$('#buttons button, #close').on('click', e => {
  togglePopup()
  return false
})

$('#buttons button').on('click', e => {
  var page = $(e.target).attr('data-page')
  var $pages = $('#pages')
  $('#pages div').css('display', 'none')
  if (loaded.indexOf(page) === -1) {
    loadPage(page, data => {
      loaded.push(page)
      $('#pages').append(data)
    })
  } else {
   $(`#${page}`).css('display', 'block')
  }
  return false
})
