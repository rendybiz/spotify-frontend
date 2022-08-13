const store = {
    /**
     * 
     * @param {String} id | key identifier 
     * @param {*} value | value Object
     * @returns {Boolean} always True
     */
    save: (id, value) => {
        localStorage.setItem(id, JSON.stringify(value))
        return true;
    },
    /**
     * 
     * @param {String} id, key identifier 
     * @returns {Object} the parsen JSON Object
     */
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