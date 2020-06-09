let superArray = [[]];
module.exports = function (arrInsert) {
  //get element from super array
  superArrayItem = superArray[0];

  //turn superArrayItem into Set for use of search function .has() for comparison with arrInsert
  let arrCompareSet = new Set(superArrayItem.map(({ id }) => id));
  //find non-unique values from arrInsert
  let nonUnique = arrInsert.filter(({ id }) => arrCompareSet.has(id));
  //turn object into array of object values for count
  let nonUniqueAsInt = nonUnique.map(({ id }) => id);

  let max = 0;
  //store count of most duplicated value
  let count = {};
  //find non-unique values from arrInsert and deals with starting empty superArray.
  if (superArray[0].length == 0){
    let arrInsertAsInt = arrInsert.map(({ id }) => id);
    arrInsertAsInt.forEach(function(value, index) {
      count[value] = (count[value] || 0) + 1;});
      //stop being an object
      let arr = Object.values(count);
      //gets how many times a non unique value has been duplicated the most (e.g. [1,1,1,2,2,3] => 3 as 1 is repeated the most, 3 times)
      max = Math.max(...arr);
      max = max - 1;
  }else{
    nonUniqueAsInt.forEach(function(value, index) {
      count[value] = (count[value] || 0) + 1;});
      let arr = Object.values(count);
      max = Math.max(...arr);
  }

  //find unique values from arrInsert
  let unique = arrInsert.filter(({ id }) => !arrCompareSet.has(id));

  //remove duplicates from the unique values
  let uniqueNoDupes = unique.filter((item,index,array)=>array.findIndex(t=>(t.id === item.id))===index)

  //insert unique items. For each row in superArray add unique item(s) to the end
  if (uniqueNoDupes.length>0){
    superArray.forEach((item, i) => {
      superArray[i] = superArray[i].concat(uniqueNoDupes);
    });
  }

  //insert non-unique items. For each non unique item, add new row to superArray taking past input as combination
  let i = 0;
  while (i < max){
    superArray.push(superArray[0]);
    i++
  }
  return superArray;
}
