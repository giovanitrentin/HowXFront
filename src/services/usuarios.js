import  { http } from './config'

export default {

    getAll:() => {
        return http.get('usuario')
    },
    get(id) {
        //console.log(id)
        //console.log('/usuario/' + id)
        return http.get('/usuario/' + id)
    },
    update(id, data) {
        //console.log(data)
        //console.log('/usuario/' + id)
        return http.put('/usuario/' + id, data);
    },
    create(data) {
        //console.log(data)
        //console.log('/usuario/' + id)
        return http.post('/usuario', data);
    }
}