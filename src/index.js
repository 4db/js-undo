const buffer = [''];
let cur = 0;

function bufferIn(str) {
	buffer.push(buffer[cur] + str);
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
  if (cur < buffer.length) {
	cur++;
  }
  return buffer[cur];
}

console.log('It should acc buffer abc', bufferIn('abc') === 'abc', buffer);
console.log('It should acc buffer abc and defgt', bufferIn(' and defgt') === 'abc and defgt');
console.log('It should acc buffer abc and defgt!', bufferIn('!') === 'abc and defgt!');

console.log('It should ctrl + Z and return abc and defgt', ctrlZ() === 'abc and defgt');
console.log('It should ctrl + Z and return abc and defgt', ctrlZ() === 'abc');
console.log('It should ctrl + Z and return', ctrlZ() === '');
console.log('It should ctrl + Z and return', ctrlZ() === '');
