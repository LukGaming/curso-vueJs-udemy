export default class UsuarioService{
    constructor($http) {
        this.$http = $http;
    }
    submit(usuario) {
        console.log(usuario)
        this.$http.post('api/perfil', usuario).then(res => {
                console.log(res)
            })
        }
    
}