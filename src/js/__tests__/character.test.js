import Bowman from '../characters/Bowman';
import DeadCharacter from '../characters/DeadCharacter';

test('Creating Bowman', () => {
    const received = new Bowman('Steve Gadd');
    const expected = {
      name: 'Steve Gadd',
      type: 'Bowman',
      _health: 100,
      level: 1,
      _attack: 25,
      _protection: 25,
      _powerModeStatus: false,
      powerModeWasEnabled: false,
      powerModeHitQuantity: 0,
    };
    expect(received).toEqual(expected);
  });

test('turn on powerMod (first time)', () => {
  const received = new Bowman('Steve Gadd');
  received.powerMode = 'on';
  expect(received.health).toBe(200);
  expect(received.attack).toBe(50);
  expect(received.protection).toBe(50);
  expect(received._powerModeStatus).toBe(true);
  expect(received.powerModeWasEnabled).toBe(true);
});

test('turn on powerMod (more then once)', () => {
  const received = new Bowman('Steve Gadd');
  received.powerMode = 'on';
  received.powerMode = 'on';
  received.powerMode = 'off';
  received.powerMode = 'on';
  expect(received.health).toBe(100);
  expect(received.attack).toBe(25);
  expect(received.protection).toBe(25);
  expect(received._powerModeStatus).toBe(false);
  expect(received.powerModeWasEnabled).toBe(true);
});

test('get powerMod', () => {
  const received = new Bowman('Steve Gadd');
  received.powerMode = 'on';
  expect(received.powerMode).toBe(true);
});

test('Bowman Level Up', () => {
  const received = new Bowman('Steve Gadd');
  received.levelUp();
  const expected = {
    name: 'Steve Gadd',
    type: 'Bowman',
    _health: 100,
    level: 2,
    _attack: 30,
    _protection: 30,
    _powerModeStatus: false,
    powerModeWasEnabled: false,
    powerModeHitQuantity: 0,
  };
  expect(received).toEqual(expected);
});

test('Dead character Level Up', () => {
  const received = new DeadCharacter('Egor Krid');

  function returnError() {
    return received.levelUp();
  }

  expect(returnError).toThrow();
});
