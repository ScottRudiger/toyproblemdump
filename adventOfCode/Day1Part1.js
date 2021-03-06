/*--- Day 1: Inverse Captcha ---

The night before Christmas, one of Santa's Elves calls you in a panic. "The printer's broken! We can't print the Naughty or Nice List!" By the time you make it to sub-basement 17, there are only a few minutes until midnight. "We have a big problem," she says; "there must be almost fifty bugs in this system, but nothing else can print The List. Stand in this square, quick! There's no time to explain; if you can convince them to pay you in stars, you'll be able to--" She pulls a lever and the world goes blurry.

When your eyes can focus again, everything seems a lot more pixelated than before. She must have sent you inside the computer! You check the system clock: 25 milliseconds until midnight. With that much time, you should be able to collect all fifty stars by December 25th.

Collect stars by solving puzzles. Two puzzles will be made available on each day millisecond in the advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!

You're standing in a room with "digitization quarantine" written in LEDs along one wall. The only door is locked, but it includes a small interface. "Restricted Area - Strictly No Digitized Users Allowed."

It goes on to explain that you may only leave by solving a captcha to prove you're not a human. Apparently, you only get one millisecond to solve the captcha: too fast for a normal human, but it feels like hours to you.

The captcha requires you to review a sequence of digits (your puzzle input) and find the sum of all digits that match the next digit in the list. The list is circular, so the digit after the last digit is the first digit in the list.

For example:

1122 produces a sum of 3 (1 + 2) because the first digit (1) matches the second digit and the third digit (2) matches the fourth digit.
1111 produces 4 because each digit (all 1) matches the next.
1234 produces 0 because no digit matches the next.
91212129 produces 9 because the only digit that matches the next one is the last digit, 9.
What is the solution to your captcha?*/

const processCaptcha = (sequence, l = sequence.length) => {
  let sum = +(sequence[0] === sequence[l - 1] ? sequence[l - 1] : 0);
  sum += [...sequence].filter((n, i) => n === sequence[i + 1]).reduce((a, b) => +a + +b, 0);
  return sum;
};

p=n=>(l=n.length,s=n[0]==(f=n[l-1])?+f:0,s+=eval([...n].filter((e,i)=>e==n[i+1]).join`+`),s)
p=(n,s=n[0]==(f=[...n].pop())?+f:0,i=0)=>i==n.length?s:p(n,s+(n[i]==n[i+1]?+n[i]:0),i+1)
p=n=>(n[0]==(f=[...n].pop())?+f:0)+[...n].reduce((s,e,i)=>s+(n[i]==n[i+1]?+n[i]:0),0)
p=n=>(l=n.length,s=n[0]==(f=n[l-1])?+f:0,s+=eval(n.match(/(.)(?=\1)/g).join`+`),s)
p=n=>(l=n.length,s=n[0]==n[l-1]?+n[l-1]:0,[...n].map((e,i)=>e==n[i+1]&&(s+=+e)),s)
p=n=>(l=n.length,s=n[0]==(f=n[l-1])?+f:0,[...n].map((e,i)=>e==n[i+1]&&(s+=+e)),s)
p=(n,a=[...n])=>(n[0]==(f=a.pop())?+f:0)+a.reduce((s,e,i)=>s+(e==n[i+1]?+e:0),0)
p=n=>(n[0]==(f=[...n].pop())?+f:0)+[...n].reduce((s,e,i)=>s+(e==n[i+1]?+e:0),0)
p=n=>(s=n[0]==(f=n[n.length-1])?+f:0,[...n].map((e,i)=>e==n[i+1]&&(s+=+e)),s)
p=n=>(n[0]==(f=n[n.length-1])?+f:0)+eval(n.match(/(.)(?=\1)/g).join`+`)
p=n=>(n[0]==(f=[...n].pop())?+f:0)+eval(n.match(/(.)(?=\1)/g).join`+`)
p=(n,s=0,l=n.length,i=l)=>i?p(n,((e=n[i-1])==n[i%l]?+e:0)+s,l,i-1):s
p=(n,s,i=l=n.length)=>i?p(n,((e=n[i-1])==n[i%l]?+e:0)+~~s,i-1):s
p=n=>(s=0,[...n].map((e,i)=>e==n[(i+1)%n.length]&&(s+=+e)),s)
p=n=>[...n].reduce((s,e,i)=>(e==n[(i+1)%n.length]?+e:0)+s,0)
p=n=>(s=0,[...n].map((e,i)=>s+=e==n[(i+1)%n.length]?+e:0),s)
p=n=>eval([...n,n[0]].filter((e,i,n)=>e==n[i+1]).join`+`)
p=n=>(s=0,[...n,n[0]].map((e,i,n)=>s+=e==n[i+1]?+e:0),s)
p=n=>[...n,n[0]].reduce((s,e,i,n)=>e==n[i+1]?+e+s:s,0)
p=n=>eval((n+n[0]).match(/(.)(?=\1)/g).join`+`)

const puzzleInput =
  '77736991856689225253142335214746294932318813454849177823468674346512426482777696993348135287531487622845155339235443718798255411492778415157351753377959586612882455464736285648473397681163729345143319577258292849619491486748832944425643737899293811819448271546283914592546989275992844383947572926628695617661344293284789225493932487897149244685921644561896799491668147588536732985476538413354195246785378443492137893161362862587297219368699689318441563683292683855151652394244688119527728613756153348584975372656877565662527436152551476175644428333449297581939357656843784849965764796365272113837436618857363585783813291999774718355479485961244782148994281845717611589612672436243788252212252489833952785291284935439662751339273847424621193587955284885915987692812313251556836958571335334281322495251889724281863765636441971178795365413267178792118544937392522893132283573129821178591214594778712292228515169348771198167462495988252456944269678515277886142827218825358561772588377998394984947946121983115158951297156321289231481348126998584455974277123213413359859659339792627742476688827577318285573236187838749444212666293172899385531383551142896847178342163129883523694183388123567744916752899386265368245342587281521723872555392212596227684414269667696229995976182762587281829533181925696289733325513618571116199419759821597197636415243789757789129824537812428338192536462468554399548893532588928486825398895911533744671691387494516395641555683144968644717265849634943691721391779987198764147667349266877149238695714118982841721323853294642175381514347345237721288281254828745122878268792661867994785585131534136646954347165597315643658739688567246339618795777125767432162928257331951255792438831957359141651634491912746875748363394329848227391812251812842263277229514125426682179711184717737714178235995431465217547759282779499842892993556918977773236196185348965713241211365895519697294982523166196268941976859987925578945185217127344619169353395993198368185217391883839449331638641744279836858188235296951745922667612379649453277174224722894599153367373494255388826855322712652812127873536473277';

const {expect} = require('chai');

describe('processCaptcha', () => {
  it('should return the correct answer to the captcha', () => {
    expect(processCaptcha(puzzleInput)).to.equal(1223);
    expect(p(puzzleInput)).to.equal(1223);
  });
  it('should return the correct answer when the 1st and last digit are different', () => {
    expect(processCaptcha('1111112')).to.equal(5);
    expect(p('1111112')).to.equal(5);
  });
  it('should return zero when there are no digits that meet the criterion', () => {
    expect(processCaptcha('123456')).to.equal(0);
    // case is never given on adventofcode.com; leaving it out for the sake of code-golf
    // expect(p('123456')).to.equal(0);
  });
});
