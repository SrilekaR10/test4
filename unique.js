var arr = [1, 2, 3, 3, 4, 5, 5];

function unique() {
    var uniqueEle = [];
    for (let i = 0; i < arr.length; i++) {
        if (i === 0 || arr[i] !== arr[i - 1]) { 
            uniqueEle.push(arr[i]); 
        }
    }
    return uniqueEle;
}

console.log(unique()); 
