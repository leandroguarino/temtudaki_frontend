import axios from "axios"
import { AsyncStorage } from "react-native"

class UsuarioService{
    
    async cadastrar(data){
        return axios({
            url: "http://192.168.0.17:3000/usuario/cadastrar",
            method: "POST",
            timeout: 5000,
            data: data,
            headers: {
                Accept: 'application/json'
            }
        }).then((response) => {
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }

    async login(data){
        return axios({
            url: "http://192.168.0.17:3000/usuario/login",
            method: "POST",
            timeout: 5000,
            data: data,
            headers: {
                Accept: 'application/json'
            }
        }).then((response) => {
            AsyncStorage.setItem("TOKEN", response.data.access_token)
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }
}

const usuarioService = new UsuarioService()
export default usuarioService