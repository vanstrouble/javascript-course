/**
 *  Deletes user by id
 * @param {String|Numeber} id
 * @returns Boolean - true if user was deleted, false otherwise
 */
export const deleteUserById = async (id) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users/${id}`;

    const response = await fetch(url, {
        method: 'DELETE',
    });

    if (!response.ok) {
        throw new Error(`Failed to delete user: ${response.status} ${response.statusText}`);
    }

    return true;
}
