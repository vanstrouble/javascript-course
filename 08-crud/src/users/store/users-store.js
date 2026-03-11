import { loadUsersByPage } from "../usecases/load-users-by-page";

const state = {
    currentPage: 0,
    users: [],
    totalPages: 0,
}

const loadNextPage = async () => {
    if (state.totalPages > 0 && state.currentPage >= state.totalPages) return false;

    const result = await loadUsersByPage(state.currentPage + 1);
    state.currentPage += 1;
    state.users = result.users;
    state.totalPages = result.totalPages;

    return true;
}

const loadPrevPage = async () => {
    if (state.currentPage <= 1) return false;

    const result = await loadUsersByPage(state.currentPage - 1);
    state.currentPage -= 1;
    state.users = result.users;
    state.totalPages = result.totalPages;

    return true;
}

const onUserChanged = (updatedUser) => {
    let wasFound = false;

    state.users = state.users.map(user => {
        if (user.id === updatedUser.id) {
            wasFound = true;
            return updatedUser;
        }
        return user;
    });

    if (state.users.length < 10 && !wasFound) {
        state.users.push(updatedUser);
    }
}

const reloadPage = async () => {
    throw new Error('Not implemented')
}

const getUserById = (id) => {
    return state.users.find(user => user.id === id);
}

export default {
    loadNextPage,
    loadPrevPage,
    onUserChanged,
    reloadPage,
    getUserById,
    state,
    getUsers: () => [...state.users],
    getCurrentPage: () => state.currentPage,
    getTotalPages: () => state.totalPages,
}
