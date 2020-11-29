import http from '../main'

class dataService {
    getAll() {
        return http.get('/api/products')
    }
 
    get(id) {
        return http.get(`/api/products/${product.id}`)
    }

}

export default new dataService()