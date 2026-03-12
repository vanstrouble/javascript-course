/**
 *  Deletes user by id
 * @param {String|Numeber} id
 * @returns Boolean - true if user was deleted, false otherwise
 */
export const deleteUserById = async (id) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users/${id}`;
    console.log('Attempting to delete user at URL:', url);
    console.log('User ID:', id, 'Type:', typeof id);

    const response = await fetch(url, {
        method: 'DELETE',
    });

    console.log('Delete response status:', response.status);
    console.log('Delete response ok:', response.ok);

    if (!response.ok) {
        throw new Error(`Failed to delete user: ${response.status} ${response.statusText}`);
    }

    console.log(`User ${id} deleted from server`);
    return true;
}
