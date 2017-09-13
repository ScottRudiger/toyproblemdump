// Bouncing balls from https://www.codewars.com/kata/bouncing-balls/train/javascript

/*A child plays with a ball on the nth floor of a big building. The height of this floor is known.

(float parameter "h" in meters. Condition 1) : h > 0)

He lets out the ball. The ball bounces for example to two-thirds of its height.

(float parameter "bounce". Condition 2) : 0 < bounce < 1)

His mother looks out of a window that is 1.5 meters from the ground.

(float parameters "window". Condition 3) : window < h).

How many times will the mother see the ball either falling or bouncing in front of the window?

If all three conditions above are fullfilled, return a positive integer, otherwise return -1.

Note

You will admit that the ball can only be seen if the height of the rebouncing ball is stricty greater than the window parameter.

Example:

h = 3, bounce = 0.66, window = 1.5, result is 3

h = 3, bounce = 1, window = 1.5, result is -1 (Condition 2) not fullfilled).*/


// passes all codewars tests:
const bouncingBalls = (h, b, w, n = Math.floor(Math.log(w / h) / Math.log(b)) * 2 + 1) => b >= 1 || h * b < w ? -1 : n;

// passes additional test to check that height is not less than zero
const bouncingBall = (h, b, w, n = Math.floor(Math.log(w / h) / Math.log(b)) * 2 + 1) => !n || b >= 1 || b < w / h ? -1 : n;


const expect = require('chai').expect;

describe('Bouncing Balls', () => {

  context('low height', () => {
    it('should return a small number of bounces given 0.66 bounce-back rate', () => {
      expect(bouncingBall(3, 0.66, 1.5)).to.equal(3);
    });
  });

  context('high height', () => {
    it('should return more bounces given a higher height', () => {
      expect(bouncingBall(30, 0.66, 1.5)).to.equal(15);
    });
  });

  context('high height; low gravity', () => {
    it('should return a very large number of bounces given extremely low gravity', () => {
      expect(bouncingBall(30, 0.9999999999, 1)).to.equal(68023942001);
    });
  });

  context('is invoked with valid input', () => {
    it('should return -1 if bounciness is less than or equal to 0 or 1 or more', () => {
      expect(bouncingBall(3, -0.5, 1.5)).to.equal(-1);
      expect(bouncingBall(3, -0, 1.5)).to.equal(-1);
      expect(bouncingBall(3, 0, 1.5)).to.equal(-1);
      expect(bouncingBall(3, 1, 1.5)).to.equal(-1);
      expect(bouncingBall(3, 1.5, 1.5)).to.equal(-1);
    });
    // is not covered in codewars tests
    it('should return -1 if height is less than 0', () => {
      expect(bouncingBall(-1, 0.5, 1.5)).to.equal(-1);
    });
    it('should return -1 if the window\'s height is greater than height', () => {
      expect(bouncingBall(3, 0.5, 3.5)).to.equal(-1);
    });
    // does not make sense as the ball would fall in sight of the window once given height > window; however, codewars problem tests for it
    it('should return -1 if the initial bounce is lower than the window height', () => {
      expect(bouncingBall(3.1, 0.5, 3)).to.equal(-1);
    });
  });

});
