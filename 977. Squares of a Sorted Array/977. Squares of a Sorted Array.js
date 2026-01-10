
var sortedSquares = function (nums) {
    const results = new Array(nums.length);

    for (let i = 0, j = nums.length - 1, k = nums.length - 1; i <= j;) {
        const l = nums[i] ** 2;
        const r = nums[j] ** 2;

        if (l > r) {
            results[k] = l;
            i++;
        } else if (l < r) {
            results[k] = r;
            j--
        } else {
            results[k] = l;
            k--;
            results[k] = r;
            i++;
            j--;
        }

        k--;
    }

    return results;
};