const {pack, range, currify, compose, map, partial, partialRight, first} = require('../functionalLib.js');
const {writters, names, numbers, triangle, books, concerts} = require('./data.js');

const chai = require('chai');
const expect = chai.expect;


describe('exercises (all the data passed to functions comes from data.js file, unless explicitly stated on the test)', () => {

    describe('basics', () => {
        // suggestion: use map
        xit('return a new array greeting all names', () => {
            expect(greetAll(names)).to.deep.equal(['hi juan', 'hi ivan', 'hi jose', 'hi sebas', 'hi miguel', 'hi ricardo', 'hi edu']);
        });

        // suggestion: use reduce
        xit('return the sum of the numbers array', () => {
            expect(getSum(numbers)).to.deep.equal(150);
        });

        // suggestion: use reduce
        xit('return the greatest number in the array', () => {
            expect(getGreatest(numbers)).to.deep.equal(60);
        });

        // restriction: use compose
        xit('return the area of a triangle', () => {
            expect(triangleArea(triangle)).to.deep.equal(50);
        });

        xit('sort list of books by ascending price and return an array with the prices', () => {
            const bookPrices = [32, 59, 72, 75];
    
            expect(sortList(books)).to.deep.equal(bookPrices);
        });

        xit('return an array with odd numbers multiplied by 10', () => {
            const numbers = [32, 59, 72, 75, 89];
            const numbersTransformed = [32, 590, 72, 750, 890];
    
            const isOdd = n => n % 2 !== 0;
            // const transform = numbers => numbers.map(n => isOdd(n) ? n * 10 : n);
            // const multByTenWhen = n => cond => cond ? n * 10 : n;
            // console.log(multByTenWhen(numbers[0])(true));    
            // console.log('-====================');
            // const transform = numbers => numbers.map(n => compose(multByTenWhen(n), isOdd)(n));

            const multByTenWhen = cond => n => cond ? n * 10 : n;
            const transform = numbers => numbers.map(n => multByTenWhen(isOdd(n))(n));

            expect(transform(numbers)).to.deep.equal(numbersTransformed);
        });

        it('write a function that calculate the prices of the ', () => {
            const clients = [
                {name: 'Carlos', clientDiscount: 20, },
                {name: 'Sara', clientDiscount: 40, },
            ];
            const items = [
                { name: 'spinner', basePrice: 5, volume: 1000, volumeDiscount: 50 },
                { name: 'rubikCube', basePrice: 15, volume: 1000, volumeDiscount: 25 }
            ];
            const clientPrices = {
                Carlos: { spinner: {normal: 80 }, rubikCube: {normal: 240 } },
                Sara: { spinner: {normal: 60 }, rubikCube: {normal: 180 } },
            };

            const getItemPrice = (item, units) => item.basePrice * units;

            const getItemsPrices = (client, units) => {
                items.reduce((itemsPrices, item) => Object.assign({}, itemsPrices, {[item.name]: { normal: getItemPrice(item, units)}}), {});
            };

            const getPrices = (clients, items, units) => 
                clients.reduce((clientPrices, client) => Object.assign({}, clientPrices, { [client]: getItemsPrices(client, units) }), {});

                
            expect(getPrices(clients, items, 20)).to.deep.equal(clientPrices);
        });

    });

    describe('Given a collection of writters (in data.js), correctIncomes function should correct a typo in their incomes, so xit', () => {

        // use partial or currify
        xit('should return a new array with only the incomes corrected multiplied by 1000', () => {
            expect(correctIncomes(writters)).to.deep.equal([ 93000, 44000, 98000, 13000 ]);
        });
    });

    describe('fizzbuzz', () => {
        const result = [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16, 17, 'fizz', 19, 'buzz', 'fizz', 22, 23, 'fizz', 'buzz', 26, 'fizz', 28, 29, 'fizzbuzz'];

        xit('should return an array with numbers from 1 to 30 replacing multiples of 3 by fizz, multiples of 5 by buzz and multiples of both by fizzbuzz', () => {
            expect(functionalFizzbuzz()).to.deep.equal(result);
        });

        xit('currify and partial examples', () => {
            const sum = (a, b, c) => a + b + c;
            const csum = currify(sum);
            const sum10 = partial(sum, 10);
            const sum1and2 = partial(sum, 1, 2);
            const sum10and20 = partial(sum10, 20);
            
            expect(sum1and2(3)).to.equal(6);
            expect(sum10and20(2)).to.equal(32);
            expect(csum(10)(20)(2)).to.equal(32);
        });
    });
});