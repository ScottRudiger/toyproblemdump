// Priori Incantatem from https://www.codewars.com/kata/priori-incantatem/train/javascript
/*
In the world of Harry Potter, each witch and wizard has a wand, and each wand is used to cast spells (e.g. Alohomora opens locked doors, Expelliarmus disarms an opponent, and Avada Kedavra is the Unforgivable killing curse). Well, this is real world we're living in right now (at least I think), but the futuristic VR company you work for has set the ultimate goal of creating a virtual world that models as close as possible the magical realm of Harry Potter, and you have been assigned the task of implementing the Wand class.

The Wand constructor should take an optional parameter spells, which if present, will be an object containing functions with their names as the keys -- these should be added as methods to the instance of Wand being created -- they will serve as the wand's "spells." In an effort to make the Wand class as realistic as possible, you've done some research using the fantastic HP-Lexicon. During the course of your research, you realize that in order to mimic wands as closely as possible, you're going to have to implement a couple "special" methods (or spells), to provide some necessary functionality. From the lexicon:

Prior Incantato (prye-OR in-can-TAH-toe)
Can be cast as a spell, ("Prior Incantato"), in which case it forces the target wand to emit a ghost image of the last spell it cast. The images can be dispelled using Deletrius.

When two wands are forced to duel that have core material from the same single creature, the result will be "Priori Incantatem," a display in sequence of the last spells one of the wands cast. Which wand will show the spell effect depends on the willpower of the two wizards involved.
As you can see, Prior Incantato provides a record of the last spell that a particular wand has cast, and Priori Incantatem provides a record of a sequence of most recently cast spells. Now, in order to get a simple prototype working, you decide not to model this situation perfectly, but you do want to provide some form of this basic functionality. So you decide you're going to implement 2 "methods" on the Wand class: prioriIncantatem(), and deletrius().

Specifically, you aim to ensure that, if w is an instance of the Wand class, then calling w.prioriIncantatem() must return an array of the names of the methods that w most recently called, in order from most recent to least recent. The number of method names in the array must be less than or equal to the value of the provided global variable MAX_PRIOR_SPELLS.

Calling w.deletrius() must "erase the memory" of w, such that no matter what methods were called before, if w.deletrius() is called, and then w.prioriIncantatem() is called immediately after, the returned array should have only one element: 'deletrius'.

Examples
// assume MAX_PRIOR_SPELLS === 3

const w = new Wand({
  alohomora: function() { console.log('unlocked!'); },
  lumos: function() { console.log('let there be light!'); },
  wingardiumLeviosa: function() { console.log('levitation!'); }
});

w.wingardiumLeviosa(); // logs 'levitation!'
w.alohomora();         // logs 'unlocked!'
w.lumos();             // logs 'let there be light!'

w.prioriIncantatem();
// => ['lumos', 'alohomora', 'wingardiumLeviosa']
The call to prioriIncantatem itself should be taken into account. For example, assuming the previous code had already been run:

w.prioriIncantatem();
// => ['prioriIncantatem', 'lumos', 'alohomora']
Notice that the array only contains up to MAX_PRIOR_SPELLS most recently cast spells. Notice also that the current call to prioriIncantatem does not appear in the array -- only previous calls to it should appear:

w.prioriIncantatem();
// => ['prioriIncantatem', 'prioriIncantatem', 'lumos']

w.deletrius();
w.prioriIncantatem();
// => ['deletrius']

w.prioriIncantatem();
// => ['prioriIncantatem', 'deletrius']
Now this is all well and great, but witches and wizards learn new spells (and even invent new ones) all the time, so you need to be able to dynamically add new methods to an instance of Wand, and prioriIncantatem should still work exactly as specified:

const w = new Wand({
  alohomora: function() { console.log('unlocked!') },
});

w.alohomora(); // logs 'unlocked!'
w.prioriIncantatem();
// => ['alohomora']

w.myNewSpell = function() { console.log('magic!'); }
w.myNewSpell(); // logs 'magic!'

w.prioriIncantatem();
// => ['myNewSpell', 'prioriIncantatem', 'alohomora']
Did you see that? prioriIncantatem just "knew" that the wand had cast a new spell without us having to do anything other than create and cast the spell. Magical! prioriIncantatem should also work if a method on w calls other methods on w, using this:

const w = new Wand({
  alohomora: function() { console.log('unlocked!') },
  expelliarmus: function() { console.log('disarmed!') }
});

w.unlockThenDisarm = function() { this.alohomora(); this.expelliarmus(); };

w.unlockThenDisarm(); // logs 'unlocked!' then 'disarmed!'

w.prioriIncantatem();
// => ['expelliarmus', 'alohomora', 'unlockThenDisarm']
Make sure that instances of Wand inherit from Object.prototype, so that the following also works:

const w = new Wand();

w.toString();
// => '[object Object]' (or something similar)

w.prioriIncantatem();
// => ['toString']
Finally, you should be able to add non-function properties to a wand, and access those properties, but the property names should not appear in the array returned by prioriIncantatem. Only method names (i.e. "spell" names) should appear in the returned array:

const w = new Wand();
w.foo = 42;
w.getFoo = function() { return this.foo; };

console.log(w.getFoo()); // logs 42
w.prioriIncantatem();
// => ['getFoo']
Whew! What a lot of magic! I'm gonna go get a butterbeer while you get to work on your Wands -- but before I go, I'll leave you with one hint: prioriIncantatem and deletrius do not necessarily need to be defined on any instance of Wand, nor do they need to be defined on any object up the prototype chain thereof, for that matter. You simply must ensure that it's possible to call them as if they were ;)
*/

const MAX_PRIOR_SPELLS = 3;

class Wand {
  constructor(spells) {
    Object.assign(this, spells);
    this.history = [];
    return new Proxy(this, {
      get(target, key) {
        if (typeof target[key] === 'function') {
          target.history.unshift(key);
          return target[key];
        }
        return target[key];
      }
    });
  }
  prioriIncantatem() {
    return this.history.slice(1, MAX_PRIOR_SPELLS + 1);
  }
  deletrius() {
    this.history = ['deletrius'];
  }
}

const {expect} = require('chai');

describe('Wand class', () => {
  it('should create an instance of the Wand class', () => {
    expect(new Wand() instanceof Wand).to.be.true;
  });
  it('should extend the wand instance with passed-in spells', () => {
    const w = new Wand({
      peskipiksiPesternomi() {}
    });
    expect(typeof w.peskipiksiPesternomi).to.equal('function');
  });
});

describe('prioriIncantatem method', () => {
  it('should log method calls as described', () => {
    const w = new Wand({
      expelliarmus() {},
      alohomora() {},
      avadaKedavra() {}
    });

    w.alohomora();
    w.expelliarmus();
    w.avadaKedavra();

    expect(w.prioriIncantatem()).to.eql(['avadaKedavra', 'expelliarmus', 'alohomora']);
  });
  it('should work when methods call other methods', () => {
    const w = new Wand({
      unlockTwice() {
        this.alohomora();
        this.alohomora();
      },
      alohomora() {
        return 'unlocked!';
      }
    });

    w.unlockTwice();

    expect(w.prioriIncantatem()).to.eql(['alohomora', 'alohomora', 'unlockTwice']);
  });
});

describe('deletrius method', () => {
  it('should remove all method calls from history (except itself)', () => {
    const w = new Wand({
      a() {},
      b() {},
      c() {},
      d() {}
    });

    w.a();
    w.b();
    w.c();
    w.d();
    w.deletrius();

    expect(w.prioriIncantatem()).to.eql(['deletrius']);
  });
  it('should be present in the history when methods are called afterwards', () => {
    const w = new Wand({
      a() {},
      b() {},
      c() {},
      d() {}
    });

    w.a();
    w.b();
    w.deletrius();
    w.c();
    w.d();

    expect(w.prioriIncantatem()).to.eql(['d', 'c', 'deletrius']);
  });
});
