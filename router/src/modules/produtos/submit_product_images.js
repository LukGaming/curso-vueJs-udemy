export default {
    async submit_product_images() {
        var imagens_enviadas = [];
        for (let i = 0; i < this.imagens.length; i++) {
            var formData = new FormData();
            formData.append('fotos', this.imagens[i])
            formData.append('id_produto', this.id)
            var $imagem_enviada = await this.$http.post('api/files', formData);
            imagens_enviadas.push($imagem_enviada.data)
        }
    }

}