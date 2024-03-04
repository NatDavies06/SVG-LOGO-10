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

class Circle extends Shape {
    constructor() {
        super();
    }


    render() {
    // SVG logic for square
    }
}

export { Circle, Triangle, Square};
