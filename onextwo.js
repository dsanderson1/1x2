module.exports = function(arrInsert) {
  let superArray = [];

  let uniqueNoDupes = arrInsert.filter((item,index,array)=>array.findIndex(t=>(t.id === item.id))===index);

  let arrInsertAsInt = arrInsert.map(({ id }) => id);
  let count = {};
  arrInsertAsInt.forEach(function(value, index) {
    count[value] = (count[value] || 0) + 1;
  });
    //stop being an object
    let countAsInt = Object.values(count);

    let max = 0;
    countAsInt.forEach((value, index) => {
      if (value > 1){
        max = max + value;
      }
    });
    max = max - 1;

    if (uniqueNoDupes.length > 0){
      superArray.push(uniqueNoDupes);
    }


    let i = 0;
    while (i < max){
      superArray.push(uniqueNoDupes);
      i++
    }

    //console.log(superArray);
    return superArray;
}
