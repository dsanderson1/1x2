//require the assert library with all the functions such as .equals.
const assert = require('chai').assert;
//require the actual javascript file with the function.
const onextwo = require('../onextwo');

//5 tests that show if the input matches the expected input. Used .deepEqual() as it forces objects to be compared and .equal() doesn't
describe('Test functionality', function(){
  it('[{id:1}, {id:2}] should return [[{id:1}, {id:2}]]', function(){
    let result = onextwo([{id:1}, {id:2}]);
    //console.log(result);
    assert.deepEqual(result, [[{id:1}, {id:2}]]);
  });
  it('[{id:1}, {id:1}, {id:2}] should return [[{id:1}, {id:2}], [{id:1}, {id:2}], [{id:1}, {id:2}]]', function(){
    let result = onextwo([{id:1}, {id:1}, {id:2}]);
    assert.deepEqual(result, [[{id:1}, {id:2}], [{id:1}, {id:2}], [{id:1}, {id:2}]]);
  });
  it('[{id:1}, {id:1}, {id:2}, {id:2}, {id:3}] should return [[{id:1}, {id:2, {id:3}], [{id:1}, {id:2, {id:3}], [{id:1}, {id:2, {id:3}]]', function(){
    let result = onextwo([{id:1}, {id:1}, {id:2}, {id:2}, {id:3}]);
    assert.deepEqual(result, [[{id:1}, {id:2}, {id:3}], [{id:1}, {id:2}, {id:3}], [{id:1}, {id:2}, {id:3}], [{id:1}, {id:2}, {id:3}], [{id:1}, {id:2}, {id:3}]]);
  });
  it('[{id:4}] should return [[{id:1}, {id:2}, {id:3}, {id:4}], [{id:1}, {id:2}, {id:3}, {id:4}], [{id:1}, {id:2}, {id:3}, {id:4}], [{id:1}, {id:2}, {id:3}, {id:4}], [{id:1}, {id:2}, {id:3}, {id:4}]]', function(){
    let result = onextwo([{id:4}]);
    assert.deepEqual(result, [[{id:1}, {id:2}, {id:3}, {id:4}], [{id:1}, {id:2}, {id:3}, {id:4}], [{id:1}, {id:2}, {id:3}, {id:4}], [{id:1}, {id:2}, {id:3}, {id:4}], [{id:1}, {id:2}, {id:3}, {id:4}]]);
  });
  it('[{id:1} should return [[{id:1}, {id:2}, {id:3}, {id:4}], [{id:1}, {id:2}, {id:3}, {id:4}], [{id:1}, {id:2}, {id:3}, {id:4}], [{id:1}, {id:2}, {id:3}, {id:4}], [{id:1}, {id:2}, {id:3}, {id:4}], [{id:1}, {id:2}, {id:3}, {id:4}]]', function(){
    let result = onextwo([{id:1}]);
    assert.deepEqual(result, [[{id:1}, {id:2}, {id:3}, {id:4}], [{id:1}, {id:2}, {id:3}, {id:4}], [{id:1}, {id:2}, {id:3}, {id:4}], [{id:1}, {id:2}, {id:3}, {id:4}], [{id:1}, {id:2}, {id:3}, {id:4}], [{id:1}, {id:2}, {id:3}, {id:4}]]);
  });
});
