const {pack, range, currify, compose, map, partial, partialRight, first} = require('../functionalLib.js');
const {writters, names, numbers, triangle, books, concerts} = require('./data.js');
const {fizzBuzz, functionalFizzBuzz} = require('../exercisesSolutions/fizzBuzz.js');
const {greetAll, getSum, getGreatest, triangleArea, sortList} = require('../exercisesSolutions/basics.js');
const {correctIncomes} = require('../exercisesSolutions/medium.js');

const chai = require('chai');
const expect = chai.expect;


describe('exercises', () => {

    describe('basics (all the data passed to functions comes from data.js, unless explicitly stated on the test)', () => {
        // suggestion: use currify and map
        it('return a new array greeting all names', () => {
            expect(greetAll(names)).to.deep.equal(['hi juan', 'hi ivan', 'hi jose', 'hi sebas', 'hi miguel', 'hi ricardo', 'hi edu']);
        });

        // suggestion: use reduce
        it('return the sum of the numbers array', () => {
            expect(getSum(numbers)).to.deep.equal(150);
        });

        // suggestion: use reduce
        it('return the greatest number in the array', () => {
            expect(getGreatest(numbers)).to.deep.equal(60);
        });

        // restriction: use compose
        it('return the area of a triangle', () => {
            expect(triangleArea(triangle)).to.deep.equal(50);
        });
    });

    
    describe('medium', () => {
        describe('Given a collection of writters (in data.js), correctIncomes function', () => {
            it ('should correct a typo in their incomes that returns a new array whith only the incomes corrected multiplied by 1000', () => {
                expect(correctIncomes(writters)).to.deep.equal([ 93000, 44000, 98000, 13000 ]);
            });
        });

        describe('fizzbuz', () => {
            const result = [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16, 17, 'fizz', 19, 'buzz', 'fizz', 22, 23, 'fizz', 'buzz', 26, 'fizz', 28, 29, 'fizzbuzz'];
    
            it('should return an array with numbers from 1 to 30 replacing multiples of 3 by fizz, multiples of 5 by buzz and multiples of both by fizzbuzz', () => {
                expect(functionalFizzBuzz()).to.deep.equal(result);
                expect(fizzBuzz()).to.deep.equal(result);            
            });
    
            it('should return the same for both modes', () => {
                expect(fizzBuzz()).to.deep.equal(functionalFizzBuzz());
            });
        });

        it('sort list of books by ascending price and return an array with the prices', () => {
            // const booksSorted = [
            //     {"id":1,"writter":"Rakel","title":"Kisses","price":32},
            //     {"id":3,"writter":"Worthy","title":"Rabbit Without Ears 2 (Zweiohrküken)","price":59},
            //     {"id":4,"writter":"Nikola","title":"Love, Rosie","price":72},
            //     {"id":2,"writter":"Morton","title":"Curiosity of Chance, The","price":75}
            // ];
            const bookPrices = [32, 59, 72, 75];
    
            expect(sortList(books)).to.deep.equal(bookPrices);
        });
    });
});