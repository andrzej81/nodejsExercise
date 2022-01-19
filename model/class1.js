class Polygon {
  constructor(height, width) {
    this.area = height * width;
  }
}

console.log(new Polygon(5, 15).area);