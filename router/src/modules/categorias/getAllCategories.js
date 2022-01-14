export default {
    async getAllCategories() {
        this.desserts = [];
        var $categorias = await this.$http("api/categorias")
        for (let i = 0; i < $categorias.data.data.length; i++) {
            var $user_data = await this.get_user_data($categorias.data.data[i].user_id)
            this.desserts.push({
                id_categoria: $categorias.data.data[i].id,
                nome_categoria: $categorias.data.data[i].nome_categoria,
                criador_categoria: $categorias.data.data[i].user_id,
                user_data: $user_data
            })
        }
    },
}