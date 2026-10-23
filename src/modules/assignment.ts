class Assignment {
  sum: number;
  countNum: number;
  xNum: number;

  constructor(sum: number, countNum: number, xNum: number) {
    this.sum = sum;
    this.countNum = countNum;
    this.xNum = xNum;
  }
  getSum(): number {
    return this.sum;
  }
  getCountNum(): number {
    return this.countNum;
  }
  getXNum(): number {
    return this.xNum;
  }
}
export default Assignment;
