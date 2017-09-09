// 'Dubstep' from https://www.codewars.com/kata/dubstep/train/javascript

/*
Polycarpus works as a DJ in the best Berland nightclub, and he often uses dubstep music in his performance. Recently, he has decided to take a couple of old songs and make dubstep remixes from them.

Let's assume that a song consists of some number of words. To make the dubstep remix of this song, Polycarpus inserts a certain number of words "WUB" before the first word of the song (the number may be zero), after the last word (the number may be zero), and between words (at least one between any pair of neighbouring words), and then the boy glues together all the words, including "WUB", in one string and plays the song at the club.

For example, a song with words "I AM X" can transform into a dubstep remix as "WUBWUBIWUBAMWUBWUBX" and cannot transform into "WUBWUBIAMWUBX".

Recently, Jonny has heard Polycarpus's new dubstep track, but since he isn't into modern music, he decided to find out what was the initial song that Polycarpus remixed. Help Jonny restore the original song.

Input

The input consists of a single non-empty string, consisting only of uppercase English letters, the string's length doesn't exceed 200 characters

Output

Return the words of the initial song that Polycarpus used to make a dubsteb remix. Separate the words with a space.

Example

songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")
  // =>  WE ARE THE CHAMPIONS MY FRIEND
*/

const songDecoder = song => song.split('WUB').filter(word => word).join(' ');

// note: could be shortened by just passing Boolean into filter; however, I prefer this implementation

const expect = require('chai').expect;

const areEqual = (requirement, actual, expected) => (
  it(requirement, () => expect(actual).to.be.equal(expected))
);

describe('Dubstep', () => {

  context('remove the WUBs', () => {

    areEqual(
      'should replace WUB with 1 space',
      songDecoder('AWUBBWUBC'),
      'A B C'
    );

    areEqual(
      'should replace consecutive WUBs with only 1 space',
      songDecoder('AWUBWUBWUBBWUBWUBWUBC'),
      'A B C'
    );

    areEqual(
      'should remove leading or trailing WUBs',
      songDecoder('WUBAWUBBWUBCWUB'),
      'A B C'
    );

    areEqual(
      'should return an empty string if the original had no lyrics',
      songDecoder('WUBWUBWUBWUBWUBWUBWUBWUBWUB'),
      ''
    );

  });

  context('Queen', () => {

    areEqual(
      'should recover the lyrics of a classic',
      songDecoder('WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB'),
      'WE ARE THE CHAMPIONS MY FRIEND'
    );

  });

});
