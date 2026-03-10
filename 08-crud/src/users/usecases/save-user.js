import { User } from "../models/user.js";
import { userModelToLocalhost } from "../mappers/user-to-localhost.mapper.js";

export const saveUser = async (userLike) => {
    const user = new User(userLike);

    const userToSave = userModelToLocalhost(user);
    if (user.id) {
        throw new Error('Updating users is not implemented yet.');
    }

    const updatedUser = await createUser(userToSave);
    return updatedUser;
};

const createUser = async (user) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users`;
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const newUser = await response.json();
    console.log({ newUser });
    return newUser;
}
