/**
 *
 * @param {User} user
 */
export const userModelToLocalhost = (user) => {
    const {
        avatar,
        balance,
        firstName,
        gender,
        id,
        isActive,
        lastName,
    } = user;

    const result = {
        avatar,
        balance,
        first_name: firstName,
        gender,
        isActive,
        last_name: lastName,
    };

    // Only include id if it exists (for updates)
    if (id) {
        result.id = id;
    }

    return result;
}
