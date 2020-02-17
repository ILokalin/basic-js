const chainMaker = {
  chain: [],
  countChain: 0,

  clearChain() {
    this.countChain = 0;
    this.chain = [];
  },
  getLength() {

    return this.countChain;
  },
  addLink(value) {
    this.chain.push(value + '');
    this.countChain++;

    return this;
  },
  removeLink(position) {
    if (position > 0 && position <= this.countChain && typeof position === 'number') {
      this.chain.splice(position - 1, 1);
      this.countChain--;
 
      return this;
    } else {
      this.clearChain();
      throw 'Error';
    }
  },
  reverseChain() {
    this.chain.reverse();

    return this;
  },
  finishChain() {
    let result = `( ${this.chain.join(' )~~( ')} )`;
    this.clearChain();

    return result;
  }
};

module.exports = chainMaker;
