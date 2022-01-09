const towSum = (nums, target) => {
    let result = [];
    nums.forEach((v, i) => {
        let k = nums.indexOf(target - v, i+1);
        if (k !== -1) {
            result.push([v,nums[k]]);
        }
    });
    return result;
}

console.log(towSum([3,4,2,6,1,5],5));