const sum = (a, b, s = 0, r = []) => a.length || b.length || s ? (a = [...a], b = [...b], s += ~~a.pop() + ~~b.pop(), r.unshift(s % 10), sum(a, b, s > 9, r)) : r.slice(r.findIndex(v => +v)).join('');

// const multiply = (a, b, p = '0') => b ? multiply(a, --b, sum(p, a)) : p;
// const multiply = (a, b) => {
//   let s = [];
//   // for (let i = `${b}`.length; i > 0; i--) {
//   //   s.push(`${a * (`${b}`[i] + '0'.repeat(i - (`${b}`.length)))}`);
//   // }
//   for (let i = 0; i < `${b}`.length; i++) {
//     s.push(`${a * (`${b}`[i].padEnd(`${b}`.length - i, '0'))}`);
//   }
//   return s.reduce((a, b) => sum(a, b), '0');
// };

const multiply = (a, b) => {
  let s = [];
  for (let i = 0; i < `${b}`.length; i++) {
    for (let j = 0; j < `${a}`.length; j++) {
      let d = `${`${b}`[i] * `${a}`[j]}`;
      s.push(d.padEnd(`${b}`.length - i + `${a}`.length - j, '0'));
    }
  }
  return s.reduce((a, b) => sum(a, b), '0');
};

// console.log(multiply('10', '1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'));

s = multiply('50', '49');
s = multiply(s, '48');
s = multiply(s, '47');
s = multiply(s, '46');
s = multiply(s, '45');
s = multiply(s, '44');
s = multiply(s, '43');
s = multiply(s, '42');
s = multiply(s, '41');
s = multiply(s, '40');
s = multiply(s, '39');
s = multiply(s, '38');
s = multiply(s, '37');
s = multiply(s, '36');
s = multiply(s, '35');
s = multiply(s, '34');
s = multiply(s, '33');
s = multiply(s, '32');
s = multiply(s, '31');
s = multiply(s, '30');
s = multiply(s, '29');
s = multiply(s, '28');
s = multiply(s, '27');
s = multiply(s, '26');
s = multiply(s, '25');
s = multiply(s, '24');
s = multiply(s, '23');
s = multiply(s, '22');
s = multiply(s, '21');
s = multiply(s, '20');
s = multiply(s, '19');
s = multiply(s, '18');
s = multiply(s, '17');
s = multiply(s, '16');
s = multiply(s, '15');
s = multiply(s, '14');
s = multiply(s, '13');
s = multiply(s, '12');
s = multiply(s, '11');
s = multiply(s, '10');
s = multiply(s, '9');
s = multiply(s, '8');
s = multiply(s, '7');
s = multiply(s, '6');
s = multiply(s, '5');
s = multiply(s, '4');
s = multiply(s, '3');
s = multiply(s, '2');
s = multiply(s, '1');
// console.log(s);
