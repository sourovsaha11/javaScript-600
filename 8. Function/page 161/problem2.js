function minElementReturn(arrOfnumber) {
    const arr1 = [];
    for (const element of arrOfnumber) {
     arr1.push(element);
   }
    if (arr1[0] < arr1[1]) {
        return arr1[0];
    }
    else {
        return arr1[1];
    }
}
    const arrOfnumber = [20,45,78];
    console.log(minElementReturn(arrOfnumber));