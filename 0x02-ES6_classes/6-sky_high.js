import Building from './5-building';

/**
 * Class skyHighBuilding that extends Building
 */
export default class skyHighBuilding extends Building {
  /**
   * Constructor for the skyHighBuilding class.
   *
   * @param {number} sqft - The size of the building in square feet.
   * @param {number} floors - The number of floors in the building.
   */
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  /**
   * Getter for the floors attribute.
   *
   * @returns {number} The number of floors in the building.
   */
  get floors() {
    return this._floors;
  }

  /**
   * Setter for the floors attribute.
   *
   * @param {number} floor - The number of floors in the building.
   */
  set floors(floors) {
    if (typeof floors !== 'number') {
      throw new TypeError('floors must be a number');
    }
    this._floors = floors;
  }
  /**
   * Overrides the evacuationWarningMessage method of the Building class
   * to provide an evacuation warning message for a sky high building.
   *
   * @returns {string} The evacuation warning message
   */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors.`;
  }
}
