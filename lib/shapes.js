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
        return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
    }
}

// SVG logic for triangle
class Triangle extends Shape {
    constructor() {
        super();
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

// SVG logic for square
class Square extends Shape {
    constructor() {
        super();
    }
    render() {
        return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
    }
}

module.exports = {
    Circle,
    Triangle,
    Square
};
