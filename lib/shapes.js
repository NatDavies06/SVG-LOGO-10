class Shape {
    constructor() {
        this.color = '';
    }

    setColor(color) {
        this.color = color;
    }

    render() {
    
    }
}

// SVG logic for circle
class Circle extends Shape {
    constructor() {
        super();
    }

    render() {
    }
}

// SVG logic for triangle
class Triangle extends Shape {
    constructor() {
        super();
    }

    render() {
    }
}

// SVG logic for square
class Square extends Shape {
    constructor() {
        super();
    }

    render() {
    }
}

export { Circle, Triangle, Square};
