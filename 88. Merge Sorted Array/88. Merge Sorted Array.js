var merge = function(nums1, m, nums2, n) {

    let mIdx = m - 1;
    let nIdx = n - 1;
    for(let i = nums1.length - 1; i >= 0; i--) {
        if(nIdx < 0) return;
        if(mIdx < 0) {
            nums1[i] = nums2[nIdx];
            nIdx--;
        } else if(nums2[nIdx] >= nums1[mIdx]) {
            nums1[i] = nums2[nIdx];
            nIdx--;
        } else if(nums2[nIdx] < nums1[mIdx]) {
            nums1[i] = nums1[mIdx];
            mIdx--;
        }
    }
};