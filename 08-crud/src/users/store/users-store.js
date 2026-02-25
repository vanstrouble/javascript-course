const state = {
    currentPage: 0,
    users: [],
}

const loadNextPage = async () => {
    throw new Error('Not implemented')
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
