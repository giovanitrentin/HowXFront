import  { http } from './config'

export default {

    getAll:() => {
        return http.get('imovel')
    },
    get(id) {
        //console.log(id)
        //console.log('/usuario/' + id)
        return http.get('/imovel/' + id)
    },
    update(id, data) {
        //console.log(data)
        //console.log('/usuario/' + id)
        return http.put('/imovel/' + id, data);
    },
    create(data) {
        //console.log(data)
        //console.log('/usuario/' + id)
        return http.post('/imovel', data);
    }
}