/**
 * @param {string} s
 * @return {boolean}
 */
import { expect } from 'chai';

var isValidParenthesesTest = function(s) {
    // Create an empty stack
  let stack = [];

  // Iterate over each character in the string
  for (let i = 0; i < s.length; i++) {
    let c = s[i];

    // Push the expected closing bracket onto the stack
    if (c === '(') {
      stack.push(')');
    } else if (c === '{') {
      stack.push('}');
    } else if (c === '[') {
      stack.push(']');
    } else {
      // If stack is not empty, pop the top element and compare
      if (stack.length > 0) {
        let top = stack.pop();
        if (top !== c) {
          return false;
        }
      } else {
        // If stack is empty and we encounter a closing bracket, it's invalid
        return false;
      }
    }
  }

  // If stack is empty at the end, the string is valid
  return stack.length === 0;
};

// Test Suite using Mocha
describe('isValid', function() {
    it('should return true for "()"', function() {
      expect(isValidParenthesesTest("()")).to.be.true;
    });
  
    it('should return true for "()[]{}"', function() {
      expect(isValidParenthesesTest("()[]{}")).to.be.true;
    });
  
    it('should return false for "(]"', function() {
      expect(isValidParenthesesTest("(]")).to.be.false;
    });
  
    it('should return false for "([)]"', function() {
      expect(isValidParenthesesTest("([)]")).to.be.false;
    });
  
    it('should return true for "{[]}"', function() {
      expect(isValidParenthesesTest("{[]}")).to.be.true;
    });
  });