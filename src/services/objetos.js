import  { http } from './config'

export default {

    getAll:() => {
        return http.get('objeto')
    },
    get(id) {
        //console.log(id)
        //console.log('/usuario/' + id)
        return http.get('/objeto/' + id)
    },
    update(id, data) {
        //console.log(data)
        //console.log('/usuario/' + id)
        return http.put('/objeto/' + id, data);
    },
    create(data) {
        //console.log(data)
        //console.log('/usuario/' + id)
        return http.post('/objeto', data);
    }
}