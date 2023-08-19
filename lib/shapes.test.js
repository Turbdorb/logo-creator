const { Triangle, Circle, Square } = require('./shapes');

describe('Shapes', () => {
    describe('Triangle logo', () => {
        it('should render a triangle using the color chosen by the user', () => {
            const color = 'green';
            const shape = new Triangle(color);

            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="green"/>');
        })
    });

    describe('Circle logo', () => {
        it('should render a Circle using the color chosen by the user', () => {
            const color = 'green';
            const shape = new Circle(color);

            expect(shape.render()).toEqual('<circle cx="150" cy="115" r="80" fill="green"/>');
        })
    });

    describe('Square logo', () => {
        it('should render a Square using the color chosen by the user', () => {
            const color = 'green';
            const shape = new Square(color);

            expect(shape.render()).toEqual('<rect x="70" y="30" width="145" height="145" fill="green"/>');
        })
    });
    
});