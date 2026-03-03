import { localhostUserToModel } from "../mappers/localhost-user.mapper.js";
import { User } from "../models/user.js";

/**
 *
 * @param {Number} page
 * @return {Promise<{users: User[], hasNext: boolean, hasPrev: boolean, totalPages: number}>}
 */
export const loadUsersByPage = async (page = 1) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`;
    const response = await fetch(url);
    const responseData = await response.json();

    const users = responseData.data.map(userLike => localhostUserToModel(userLike));

    return {
        users,
        hasNext: responseData.next !== null,
        hasPrev: responseData.prev !== null,
        totalPages: responseData.pages
    };
}
