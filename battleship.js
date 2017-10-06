// Battleship Field Validator from https://www.codewars.com/kata/battleship-field-validator/train/javascript

/*Write a method that takes a field for well-known board game "Battleship" as an argument and returns true if it has a valid disposition of ships, false otherwise. Argument is guaranteed to be 10*10 two-dimension array. Elements in the array are numbers, 0 if the cell is free and 1 if occupied by ship.

Battleship (also Battleships or Sea Battle) is a guessing game for two players. Each player has a 10x10 grid containing several "ships" and objective is to destroy enemy's forces by targetting individual cells on his field. The ship occupies one or more cells in the grid. Size and number of ships may differ from version to version. In this kata we will use Soviet/Russian version of the game.

Before the game begins, players set up the board and place the ships accordingly to the following rules:
There must be single battleship (size of 4 cells), 2 cruisers (size 3), 3 destroyers (size 2) and 4 submarines (size 1). Any additional ships are not allowed, as well as missing ships.
Each ship must be a straight line, except for submarines, which are just single cell.
The ship cannot overlap or be in contact with any other ship, neither by edge nor by corner.
This is all you need to solve this kata. If you're interested in more information about the game, visit this link (http://en.wikipedia.org/wiki/Battleship_(game)).*/

const validateBattlefield = field => {

};

const {expect} = require('chai');

describe('validateBattlefield function', () => {

  const valid = [
    [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];

  const invalid1 = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];

  const invalid2 = [
    [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0]
  ];

  const invalid3 = [
    [ 1, 0, 0, 0, 0, 1, 1, 0, 0, 0 ],
    [ 1, 0, 1, 0, 0, 0, 0, 0, 1, 0 ],
    [ 1, 0, 1, 0, 1, 1, 1, 0, 1, 0 ],
    [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0 ],
    [ 0, 0, 0, 0, 1, 1, 1, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0 ],
    [ 0, 0, 0, 1, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 1, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
  ];

  const invalid4 = [
    [ 1, 0, 0, 0, 0, 1, 1, 0, 0, 0 ],
    [ 1, 0, 1, 0, 0, 0, 0, 0, 1, 0 ],
    [ 1, 0, 1, 0, 1, 1, 1, 0, 1, 0 ],
    [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0 ],
    [ 0, 0, 0, 0, 1, 1, 1, 0, 0, 0 ],
    [ 0, 1, 0, 0, 0, 0, 0, 0, 1, 0 ],
    [ 0, 0, 0, 1, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 1, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
  ];

  const invalid5 = [
    [ 1, 0, 0, 0, 0, 1, 1, 0, 0, 0 ],
    [ 1, 0, 1, 0, 0, 0, 0, 0, 1, 0 ],
    [ 1, 0, 1, 0, 1, 1, 1, 0, 1, 0 ],
    [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0 ],
    [ 0, 0, 0, 1, 1, 1, 1, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0 ],
    [ 0, 0, 0, 1, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 1, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
  ];

  it('should return true for a valid battlefield', () => {
    expect(validateBattlefield(valid)).to.be.true;
  });

  it('should return false for invalid1 battlefield', () => {
    expect(validateBattlefield(invalid1)).to.be.false;
  });

  it('should return false for invalid2 battlefield', () => {
    expect(validateBattlefield(invalid2)).to.be.false;
  });

  it('should return false for invalid3 battlefield', () => {
    expect(validateBattlefield(invalid3)).to.be.false;
  });

  it('should return false for invalid4 battlefield', () => {
    expect(validateBattlefield(invalid4)).to.be.false;
  });

  it('should return false for invalid5 battlefield', () => {
    expect(validateBattlefield(invalid5)).to.be.false;
  });

  it('should return false for invalid6 battlefield', () => {
    expect(validateBattlefield(invalid6)).to.be.false;
  });

});
