const chainMaker = {
  CHAIN_SEPARATOR:  ' )~~( ',
  CHAIN_RESULT_TEMPLATE: "`( ${result} )`",
  
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push(value + '');

    return this;
  },

  removeLink(position) {
    if (position > 0 && position <= this.chain.length && typeof position === 'number') {
      this.chain.splice(position - 1, 1);
  
      return this;
    } else {
      this.chain = [];
      throw 'Error';
    }
  },

  reverseChain() {
    this.chain.reverse();

    return this;
  },

  finishChain() {
    let result = this.chain.join(this.CHAIN_SEPARATOR);
    this.chain = [];

    return eval(this.CHAIN_RESULT_TEMPLATE);
  }
};

module.exports = chainMaker;
