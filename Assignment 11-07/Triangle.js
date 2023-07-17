class Triangle {
    constructor() {
      this.side1 = 3;
      this.side2 = 4;
      this.side3 = 5;
    }
  
    Perimeter() {
      return this.side1 + this.side2 + this.side3;
    }
  
    Area() {
      const s = this.Perimeter() / 2;
      return Math.sqrt(s * (s - this.side1) * (s - this.side2) * (s - this.side3));
    }
  }
  
  const triangle = new Triangle();
  const perimeter = triangle.Perimeter();
  const area = triangle.Area();
  
  console.log("Perimeter:", perimeter);
  console.log("Area:", area);
  