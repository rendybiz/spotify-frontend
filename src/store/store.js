const store = {
    save: (id, value) => {
        localStorage.setItem(id, JSON.stringify(value))
    },
    get: (id) => {
        let item = localStorage.getItem(id)
        if(!item) return item;

        return JSON.parse(item)
    }
}
export default store;