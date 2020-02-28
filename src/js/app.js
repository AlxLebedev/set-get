import Zombie from './characters/Zombie';

const emmanuelle = new Zombie('Emmanuelle Caplette');

console.log(emmanuelle);

console.log('Совершаем удар в обычном состоянии:');
console.log(emmanuelle.hit());

console.log('Включаем супер-режим:');
emmanuelle.powerMode = 'on';
console.log(emmanuelle.powerMode);

console.log('Совершаем 4 удара в состоянии супер-режима:');
console.log(emmanuelle.hit());
console.log(emmanuelle.hit());
console.log(emmanuelle.hit());
console.log(emmanuelle.hit());
console.log('Видим, что 4-ый удар уже не в состоянии супер-режима...');
