// import Api from '@services/Api'
import Api from './Api'

export default {
    register (credentials) {
        return Api().post('/register', credentials)
    },
    login (credentials) {
        return Api().post('/login', credentials)
    }
}

//minuto 20 del video
