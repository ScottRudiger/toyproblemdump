// Which are in? from

/*Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

#Example 1: a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

#Example 2: a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []

#Notes: Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.

Beware: r must be without duplicates.*/

const inArray = (array1, array2) => {

};

const expect = require('chai').expect;

describe('inArray', () => {

  context('returns elements included within strings in array2', () => {
    it('should live strong', () => {
      array1 = ['xyz', 'live', 'strong'];
      array2 = ['lively', 'harp', 'armstrong'];
      expect(inArray(array1)).to.eql(['live', 'strong']);
    });
  });

  context('excludes duplicates', () => {
    it('should still live strong', () => {
      array1 = ['xyz', 'live', 'arp', 'strong'];
      array2 = ['lively', 'alive', 'harp', 'tarp', 'strongly', 'armstrong'];
      expect(inArray(array1)).to.eql(['live', 'strong']);
    });
  });

  context('handles case where no elements in array1 are found within elements in array2', () => {
    it('should return an empty array', () => {
      array1 = ['tarp', 'mice', 'bull'];
      expect(inArray(array1, array2)).to.eql([]);
      array2 = ['pup', 'boy', 'etc'];
      expect(inArray(array1, array2)).to.eql([]);
    });
  });

});
