const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value === undefined ? 'undefined' : String(value));
    return this;
  },
  removeLink(position) {
    if (position < 1 || position > this.chain.length || !Number.isInteger(position)) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return this;  // Allows for method chaining
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const result = this.chain.map(link => `( ${link} )`).join('~~');
    this.chain = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
