/*https://leetcode.com/problems/longest-consecutive-sequence
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
You must write an algorithm that runs in O(n) time.

Example 1:
Input: nums = [100,4,200,1,3,2]
Output: 4

Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:
Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9

Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
import { expect } from 'chai';
var longestConsecutive = function(nums) {
    const setNums = new Set(nums);
    let maxLength = 0;

    for(let num of nums){
        if(!setNums.has(num-1)){
            let currentNum = num;
            let currentLength = 1;
            while(setNums.has(currentNum+1)){
                currentNum++;
                currentLength++;
            }
            maxLength = Math.max(maxLength, currentLength);
        }
    }
    return maxLength;
};

// Test Suite using Mocha
describe('isValid', function() {
    it('longestConsecutive in [100,4,200,1,3,2]', function() {
       let nums = [100,4,200,1,3,2];
      expect(longestConsecutive(nums)).to.equal(4);
    });
  
    it('longestConsecutive in [0,3,7,2,5,8,4,6,0,1]"', function() {
        let nums = [0,3,7,2,5,8,4,6,0,1]
      expect(longestConsecutive(nums)).to.equal(9);
    });
  });