export default{
    deletCategory() {
        this.$http.delete(`categorias/${this.id}`).then(res => {
            this.$router.push({
                path: '/categorias',
                query: {
                    deleted: 'true'
                }
            })
            return res
        })
    },
}