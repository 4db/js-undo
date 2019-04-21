const buffer = [''];
let cur = 0;

function bufferIn(str) {
    if (cur < buffer.length) {
		buffer.splice(0, cur);
    }
    buffer.push(str);
    cur++;
    return buffer[cur];
}

function ctrlZ() {
  if (cur > 0) {
	cur--;
  }
  return buffer[cur];
}

function ctrlY() {
  if (cur < buffer.length - 1) {
	cur++;
  }
  return buffer[cur];
}


console.log('It should acc buffer "abc"', bufferIn('abc') === 'abc');
console.log('It should acc buffer "abc and defgt"', bufferIn('abc and defgt') === 'abc and defgt');
console.log('It should acc buffer "abc and defgt!"', bufferIn('abc and defgt!') === 'abc and defgt!');

console.log('It should ctrl + Z and return "abc and defgt"', ctrlZ() === 'abc and defgt');
console.log('It should ctrl + Z and return "abc"', ctrlZ() === 'abc');
console.log('It should ctrl + Z and return ""', ctrlZ() === '');
console.log('It should ctrl + Z and return ""', ctrlZ() === '');
console.log('It should ctrl + Z and return ""', ctrlZ() === '');

console.log('It should ctrl + Y and return "abc"', ctrlY() === 'abc');
console.log('It should acc ctrl + Y "abc and defgt"', ctrlY() === 'abc and defgt');
console.log('It should acc ctrl + Y "abc and defgt!"', ctrlY() === 'abc and defgt!');
console.log('It should acc ctrl + Y "abc and defgt!"', ctrlY() === 'abc and defgt!');
console.log('It should acc ctrl + Y "abc and defgt!"', ctrlY() === 'abc and defgt!');

console.log('It should ctrl + Z and return "abc and defgt"', ctrlZ() === 'abc and defgt');
console.log('It should ctrl + Z and return "abc"', ctrlZ() === 'abc');
console.log('It should ctrl + Z and return ""', ctrlZ() === '');
console.log('It should ctrl + Z and return ""', ctrlZ() === '');
console.log('It should ctrl + Z and return ""', ctrlZ() === '');

console.log('It should acc buffer "second 2"', bufferIn('second 2') === 'second 2');
console.log('It should ctrl + Y and return "abc"', ctrlY() === 'second 2');
