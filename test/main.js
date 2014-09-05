var $box = $('#box')

QUnit.config.testTimeout = 5000 // 5s timeout

QUnit.test('add classes', function(assert){
  $box.anim('bounceIn')
  assert.ok($box.is('.animated.bounceIn'))
})

QUnit.asyncTest('apply callback', function(assert){
  $box.anim('bounceIn', function(){
    assert.ok(true) // callback applied
    QUnit.start()
  })
})

QUnit.asyncTest('remove classes', function(assert){
  $box.anim('zoomOutDown', function(){
    // classes removed
    assert.ok($box.is(':not(.animated):not(.zoomOutDown)'))
    QUnit.start()
  })
})