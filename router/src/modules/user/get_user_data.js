export default {
    async get_user_data($user_id) {
        return this.$http.get(`api/user/${$user_id}`).then(res => res.json()).then( res =>{ 
            console.log(res.json(0))
            return res.data;
        }).catch(error => {
            return error;
        })
    }
}