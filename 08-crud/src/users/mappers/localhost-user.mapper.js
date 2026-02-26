import { User } from "../models/user.model.js";

/**
 *
 * @param {Like<User>} localHostUser
 * @returns {User}
 */
export const localhostUserToModel = (localHostUser) => {
    const {
        avatar,
        balance,
        first_name,
        gender,
        id,
        isActive,
        last_name
    } = localHostUser;
    return new User({
        avatar,
        balance,
        firstName: first_name,
        gender,
        id,
        isActive,
        lastName: last_name
    });
}
