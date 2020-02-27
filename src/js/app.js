// import Bowman from './characters/Bowman';
// import Swordsman from './characters/Swordsman';
// import Magician from './characters/Magician';
// import Undead from './characters/Undead';
import Zombie from './characters/Zombie';
// import Daemon from './characters/Daemon';
// import DeadCharacter from './characters/DeadCharacter';

// const steve = new Bowman('Steve Gadd');
// const todd = new Swordsman('Todd Sucherman');
// const jared = new Magician('Jared Falk');
// const anika = new Undead('Anika Nilles');
const emmanuelle = new Zombie('Emmanuelle Caplette');
// const elise = new Daemon('Elise Trouw');
// const egor = new DeadCharacter('Egor Krid');

// console.log(steve);
// console.log(todd);
// console.log(jared);
// console.log(anika);
console.log(emmanuelle);
// console.log(elise);
// console.log(egor);

console.log('Совершаем удар в обычном состоянии:');
console.log(emmanuelle.hit());

console.log('Включаем супер-режим:');
emmanuelle.powerMode = 'on';
console.log(emmanuelle.powerMode);

console.log('Совершаем 4 удара в состоянии супер-режима:')
console.log(emmanuelle.hit());
console.log(emmanuelle.hit());
console.log(emmanuelle.hit());
console.log(emmanuelle.hit());
console.log('Видим, что 4-ый удар уже не в состоянии супер-режима...')
