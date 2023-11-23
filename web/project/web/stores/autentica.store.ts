import {action, makeObservable, observable} from "mobx"

interface IUsuario {
    email: string,
    token: string
}

class AutenticaStore {
    estaAutentica = false;
    usuario: IUsuario = {email: "", token: ""}
    constructor(){
        makeObservable(this, {
            estaAutentica: observable,
            usuario: observable,
            login: action,
            logout: action
        })
    }
    login({email, token}: IUsuario){
        this.estaAutentica = true;
        this.usuario = {email, token};
    }
    logout(){
        this.estaAutentica = false;
        this.usuario = {email: '', token: '' };
    }
}

const autenticaStore = new AutenticaStore();

export default autenticaStore;