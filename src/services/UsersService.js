// import Api from '@services/Api'
import Api from './Api'

export default {
    getAllUsers () {
        return Api().get('/users')
    }
}