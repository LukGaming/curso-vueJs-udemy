export default class ProductService {
    constructor($http) {
        this.$http = $http
        this.apiUrl = ('api/produtos/');
    }
    async listAllProducts() {
        var produtos = await this.$http.get(this.apiUrl).then(res =>{
            return res
        })
        return produtos
    }
}