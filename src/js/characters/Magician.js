import Character from './Character';

export default class Magician extends Character {
  constructor(name) {
    super(name);
    this.type = 'Magician';
    this._attack = 10;
    this._protection = 40;
  }
}
