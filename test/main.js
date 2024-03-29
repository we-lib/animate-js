var $box = $('#box')

QUnit.config.testTimeout = 5000 // 5s timeout

QUnit.test('return chain', function(assert){
  assert.ok($box.animateCss('shake').get(0) === $box.get(0))
})

QUnit.test('add classes', function(assert){
  $box.animateCss('bounceIn')
  assert.ok($box.is('.animated.bounceIn'))
})

QUnit.asyncTest('apply callback', function(assert){
  $box.animateCss('bounceIn', function(){
    assert.ok(true) // callback applied
    QUnit.start()
  })
})

QUnit.asyncTest('remove classes', function(assert){
  $box.animateCss('zoomOutDown', function(){
    // classes removed
    assert.ok($box.is(':not(.animated):not(.zoomOutDown)'))
    QUnit.start()
  })
})