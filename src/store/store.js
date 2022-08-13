const store = {
    save: (id, value) => {
        localStorage.setItem(id, JSON.stringify(value))
        return true;
    },
    get: (id) => {
        let item = localStorage.getItem(id)
        if(!item) return item;

        return JSON.parse(item)
    },
    remove:(id)=>{
        localStorage.removeItem(id)
        return true;
    }
}
export default store;