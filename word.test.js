// import { stringLength, reverseWord } from "./tasks";
const word = require('./word');

test('Length of "hello" to be 5', () => {
  expect( word.stringLength('hello')).toBe(5);
});

test('Length of "hello my name is y" is too long', () => {
  expect(()=> word.stringLength("hello my name is y")).toThrow('1:10 chars');
});

test('Reverse the word "hello" to match "olleh"', () => {
  expect(word.reverseWord("hello")).toBe('olleh');
});

test('Capitalize the word "hello" to match "Hello"', () => {
  expect(word.capitalizeFirst("hello")).toBe('Hello');
});