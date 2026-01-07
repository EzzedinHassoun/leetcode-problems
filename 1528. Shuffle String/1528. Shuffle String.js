
var restoreString = function(s, indices) {

    let arr = Array(indices.length).fill("")
    indices.map(
        (item, idx) => {
            arr[item] = s[idx] 
        }
    )
    return arr.join("");
};