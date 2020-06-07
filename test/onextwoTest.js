const assert = require('chai').assert;
const onextwo = require('../onextwo');

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
