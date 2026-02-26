import { loadUsersByPage } from "../usecases/load-users-by-page";

const state = {
    currentPage: 0,
    users: [],
}

const loadNextPage = async () => {
    const users = await loadUsersByPage(state.currentPage + 1);
    if (users.length === 0) return;
    state.currentPage += 1;
    state.users = users;
}

const loadPrevPage = async () => {
    throw new Error('Not implemented')
}

const onUserChanged = (user) => {
    throw new Error('Not implemented')
}

const reloadPage = async () => {
    throw new Error('Not implemented')
}

export default {
    loadNextPage,
    loadPrevPage,
    onUserChanged,
    reloadPage,
    state,
    getUsers: () => [...state.users],
    getCurrentPage: () => state.currentPage,
}
