//require the assert library with all the functions such as .equals.
const assert = require('chai').assert;

//resets the cache for onextwo everytime a test is completed. 
function resets(){
  delete require.cache[require.resolve('../onextwo')];
}

//5 tests that show if the input matches the expected input. Used .deepEqual() as it forces objects to be compared and .equal() doesn't
describe('1st Test', function(){
  it('[{id:1}, {id:2}] should return [[{id:1}, {id:2}]]', function(){
    const onextwo = require('../onextwo');
    let result = onextwo([{id:1}, {id:2}]);
    assert.deepEqual(result, [[{id:1}, {id:2}]]);
    resets();
  });
  it('[{id:1}, {id:1}, {id:2}] should return [[{id:1}, {id:2}], [{id:1}, {id:2}], [{id:1}, {id:2}]]', function(){
    const onextwo = require('../onextwo');
    let result = onextwo([{id:1}, {id:1}, {id:2}]);
    assert.deepEqual(result, [[{id:1}, {id:2}], [{id:1}, {id:2}]]);
    resets();
  });
  it('[{id:1}, {id:1}, {id:2}, {id:2}, {id:3}] should return [[{id:1}, {id:2, {id:3}], [{id:1}, {id:2, {id:3}]]', function(){
    const onextwo = require('../onextwo');
    let result = onextwo([{id:1}, {id:1}, {id:2}, {id:2}, {id:3}]);
    assert.deepEqual(result, [[{id:1}, {id:2}, {id:3}], [{id:1}, {id:2}, {id:3}]]);
    resets()
  });
  it('[{id:4}] should return [[{id:4}]]', function(){
    const onextwo = require('../onextwo');
    let result = onextwo([{id:4}]);
    assert.deepEqual(result, [[{id:4}]]);
    resets();
  });
  it('[{id:2}, {id:2}, {id:4}, {id:6}] should return [[{id:2}, {id:4}, {id:6}], [{id:2}, {id:4}, {id:6}]]', function(){
    const onextwo = require('../onextwo');
    let result = onextwo([{id:2}, {id:2}, {id:4}, {id:6}]);
    assert.deepEqual(result, [[{id:2}, {id:4}, {id:6}], [{id:2}, {id:4}, {id:6}]]);
    resets();
  });
});
