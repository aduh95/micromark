'use strict'

var test = require('tape')
var m = require('../..')

test('text', function (t) {
  t.equal(
    m("hello $.;'there"),
    "<p>hello $.;'there</p>",
    'should support rest as text'
  )

  t.equal(m('Foo χρῆν'), '<p>Foo χρῆν</p>', 'should support unicode text')

  t.equal(
    m('Multiple     spaces'),
    '<p>Multiple     spaces</p>',
    'should support internal spaces verbatim'
  )

  t.end()
})
