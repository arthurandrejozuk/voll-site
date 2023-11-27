// instalamos o mobx
import {action, makeObservable, observable} from "mobx";

interface IUsuario {
    email: string,
    token: string
}

// classe de autentica do mobx.
class AutenticaStore {
    //como padrao é falsa
    estaAutentica = false;
    usuario: IUsuario = {email: "", token: ""}

    constructor(){
        // torna observaveis os itens abaixo
        makeObservable(this, {
            estaAutentica: observable,
            usuario: observable,
            login: action,
            logout: action
        })
    }
    // funcao de login
    login({email, token}: IUsuario){
        this.estaAutentica = true;
        this.usuario = {email, token};
    }
    //funcao de logout
    logout(){
        this.estaAutentica = false;
        this.usuario = {email: '', token: '' };
    }
}
// exporta já em uma variavel.
const autenticaStore = new AutenticaStore();

export default autenticaStore;