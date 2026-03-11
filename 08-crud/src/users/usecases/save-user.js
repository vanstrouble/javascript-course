import { User } from "../models/user.js";
import { userModelToLocalhost } from "../mappers/user-to-localhost.mapper.js";
import { localhostUserToModel } from "../mappers/localhost-user.mapper.js";

export const saveUser = async (userLike) => {
    const user = new User(userLike);
    const userToSave = userModelToLocalhost(user);

    let userUpdated;
    if (userToSave.id != null) {
        userUpdated = await updateUser(userToSave);
    } else {
        userUpdated = await createUser(userToSave);
    }
    return localhostUserToModel( userUpdated );
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

const updateUser = async (user) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users/${user.id}`;
    const response = await fetch(url, {
        method: 'PATCH',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const updatedUser = await response.json();
    console.log({ updatedUser });
    return updatedUser;
}
