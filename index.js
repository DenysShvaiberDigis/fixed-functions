function multiplyByClosure(mult) {
  const values = [0, 0.5, 1, 2, 3, 4, 5, 'a', false];
  return values.filter(Number).map(num => num * mult);
}

function countZeroValues(values) {
  return values.filter(function (value) {
    return value === 0;
  }).length;
}

for (let i = 0; i < 10; i++) {
  const button = document.createElement('button');
  button.textContent = `Multiply by ${i}`;
  document.body.appendChild(button);

  button.onclick = function () {
    console.log(multiplyByClosure(i));
  };
}
