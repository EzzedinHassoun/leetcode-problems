
var xorOperation = function(n, start) {
    let nums = [];
    let a = 0;
    for(let i=0;i<n;i++){
        nums[i] = start+2*i;

        a= a ^ nums[i];

    }
    return a;
};