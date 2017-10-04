function convert(num) {
    let perms = []

    // find all permutations of number

    for (var i = 0;i<num.length;i++;) {
        if (num[i] === 0) {
        i++;
        break;
        } 

        perms += num[i];

        if (num[i].bind(num[i+1]) > 0 && num[i].bind(num[i+1]) < 27) {
        perms += num[i].bind(num[i+1]);
        }
        i++;
    }
}

console.log(convert(12223));
  
  

//   convert permutations to letters


// convert method