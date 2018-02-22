// Multi-line Task: Fizz Buzz from https://www.codewars.com/kata/multi-line-task-fizz-buzz/train/javascript

/*
You need to complete the FizzBuzz function:

if n is divisible by 15, return 'fizzbuzz'
if n is divisible by 5, return 'buzz'
if n is divisible by 3, return 'fizz'
otherwise, return n as a number
where n is a positive integer.

Requirement: Every line must have at most 3 characters, and total number of lines must be less than 25.
*/

f= // 24
n=>
n%3
&
n%5
?n:
(s=
'',
!(n
%3)
&&(
s+=
'f\
iz\
z')
,!(
n%5
)&&
(s
+=
'b\
uz\
z')
,s)

f= // 23
n=>
(w=
{a:
'f\
iz\
z',
b:
'b\
uz\
z'}
,`\
${n
%3?
'':
w.a
}${
n%5
?''
:w.
b}`
||
n)

f= // 22
n=>
(w=
{a:
'f\
iz\
z',
b:
'b\
uz\
z'}
,(n
%3?
'':
w.a
)+(
n%5
?''
:w.
b)
||
n)

f= // 22
n=>
!(n
%15
)?
'f\
iz\
zb\
uz\
z':
!(n
%5)
?'\
bu\
zz'
:!(
n%3
)?
'f\
iz\
z':
n

f=( // 21
n,a
='\
fi\
zz'
,b=
'b\
uz\
z'
)=>
!(n
%15
)?a
+b:
!(n
%3)
?a:
!(n
%5)
?b:
n

f= // 21
n=>
(a=
'f\
iz\
z',
b=
'b\
uz\
z',
!(n
%15
)?a
+b:
!(n
%3)
?a:
!(n
%5)
?b:
n)

f=( // 21
n,a
='\
fi\
zz'
,b=
'b\
uz\
z'
)=>
!(n
%15
)?a
+b:
!(n
%3)
?a:
!(n
%5)
?b:
n

f= // 21
n=>
(w=
['\
fi\
zz'
,'\
bu\
zz'
],(
n%3
?''
:w[
0])
+(n
%5?
'':
w[1
])
||
n)

const {expect} = require('chai');

describe('multiline fizz buzz function', () => {
  it('should return \'fizz\' given a number divisible by 3', () => {
    expect(f(3)).to.equal('fizz');
  });
  it('should return \'buzz\' given a number divisible by 5', () => {
    expect(f(5)).to.equal('buzz');
  });
  it('should return \'fizzbuzz\' given a number divisible by 15', () => {
    expect(f(15)).to.equal('fizzbuzz');
  });
  it('should otherwise return the number', () => {
    expect(f(8)).to.equal(8);
    expect(f(28)).to.equal(28);
  });
});
