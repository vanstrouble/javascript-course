import { loadUsersByPage } from "../usecases/load-users-by-page";

const state = {
    currentPage: 0,
    users: [],
}

const loadNextPage = async () => {
    await loadUsersByPage(state.currentPage += 1);
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
    getUser: () => [...state.users],
    getCurrentPage: () => state.currentPage,
}
