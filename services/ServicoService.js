import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios"
import Config from "../util/Config"

class ServicoService{
    
    async cadastrar(data){
        let token = await AsyncStorage.getItem("TOKEN")
        return axios({
            url: Config.API_URL + "servico/cadastrar",
            method: "POST",
            timeout: Config.TIMEOUT_REQUEST,
            data: data,
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer ' + token
            }
        }).then((response) => {
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }
}

const servicoService = new ServicoService()
export default servicoService