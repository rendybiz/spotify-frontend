import store from "../store/store"

const logout = ()=>{
    store.remove("token")
    store.remove("auth")
    window.location.replace("/");
}
export default logout