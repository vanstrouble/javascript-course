/**
 * Represents a user of the application.
 * @class
 */
/**
 * @typedef {Object} User
 * @property {string} id
 * @property {boolean} isActive
 * @property {number} balance
 * @property {string} avatar
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} gender
 */

/**
 * @param {User} userData - User data object
 */
export class User {
    constructor({id, isActive, balance, avatar, firstName, lastName, gender}) {
      this.id = id;
      this.isActive = isActive;
      this.balance = balance;
      this.avatar = avatar;
      this.firstName = firstName;
      this.lastName = lastName;
      this.gender = gender;
    }
}
