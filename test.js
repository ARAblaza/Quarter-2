const translationLetters = {a:'1-',b:'2-',c:'3-',d:'4-',e:'5-',f:'6-',g:'7-',h:'8-',i:'9-',j:'10-',k:'11-',l:'12-',m:'13-',n:'14-',o:'15-',p:'16-',q:'17-',r:'18-',s:'19-',t:'20-',u:'21-',v:'22-',w:'23-',x:'24-',y:'25-',z:'26-',
  A:'1-',B:'2-',C:'3-',D:'4-',E:'5-',F:'6-',G:'7-',H:'8-',I:'9-',J:'10-',K:'11-',L:'12-',M:'13-',N:'14-',O:'15-',P:'16-',Q:'17-',R:'18-',S:'19-',T:'20-',U:'21-',V:'22-',W:'23-',X:'24-',Y:'25-',Z:'26-',
};
const translationNumbers = {
  '1':'a','2':'b','3':'c','4':'d','5':'e','6':'f','7':'g','8':'h','9':'i','10':'j','11':'k','12':'l','13':'m','14':'n','15':'o','16':'p','17':'q','18':'r','19':'s','20':'t','21':'u','22':'v','23':'w','24':'x','25':'y','26':'z',
}
const letters = document.getElementById('letters')
const lettersEl = document.getElementById('letters-el')
const numbers = document.getElementById('numbers')
const numbersEl = document.getElementById('numbers-el')

function encodeLetters(textL) {
  let result = '';
  for (let i = 0; i < textL.length; i++) {
    let char = textL.charAt(i);
    let nextChar = textL.charAt(i + 1);
    let translated = translationLetters[char];
    if (translated) {
      result += translated
    } else {
      result += char;
    }
    if (nextChar === ' ' || !nextChar || !translationLetters[nextChar]) {
      result = result.slice(0, -1);
    }
  }
  return result;
}

function updateLetters() {
  textL = lettersEl.value
  letters.textContent = encodeLetters(textL)
}


function encodeNumbers(textN) {
  let result = '';
  let i = 0;
  while (i < textN.length) {
    let char = textN.charAt(i);
    if (translationNumbers[char + textN.charAt(i + 1)]) {
      result += translationNumbers[char + textN.charAt(i + 1)];
      i += 2;
    } else {
      result += translationNumbers[char] || char;
      i++;
    }
    if (char === '-') {
      result = result.slice(0, -1)
    }
  }
  return result;
}

function updateNumbers() {
  text = numbersEl.value
  numbers.textContent = encodeNumbers(text)
}