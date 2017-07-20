/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    if (nums1.length == 0) {
        return []
    }
    let result = []
    let sortNum1 = nums1.sort((a, b) => a - b)
    for (let i = 0; i < nums2.length; i++) {
        if (binarySearch(sortNum1, nums2[i]) && result.indexOf(nums2[i]) < 0) {
            result.push(nums2[i])
        }
    }
    return result
};

let binarySearch = function (arr, num) {
    let start = 0
    let end = arr.length - 1
    while (start <= end) {
        let mid = start + Math.floor(((end - start) / 2))
        if (num > arr[mid]) {
            start = mid + 1
        } else if (num < arr[mid]) {
            end = mid - 1
        } else if (num == arr[mid]) {
            return true
        }
    }
    return false
}
