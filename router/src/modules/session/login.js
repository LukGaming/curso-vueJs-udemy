export default{
    async logar() {
        this.loading = true
        const isFormCorrect = await this.v$.$validate()
        if (!isFormCorrect) {
            setInterval(() => {
                this.loading = false
                return
            }, 1000);
    
        }
    
        this.$http.post(`/users/${this.email}`, {email: this.email, password: this.senha}).then(res => {
            if(res.data.response == 'success'){
                this.$session.start()
                        this.$session.set(
                            'userId', res.data.id,
                        )
                        this.$session.set(
                            'nome', res.data.nome,
                        )
                        this.$session.set(
                            'email', res.data.email,
                        )
                        this.loading = false
                        this.$router.push( {path: '/', query: { loginSucess: 'true' } })
            }
            if(res.data.response == 'error_password'){
                this.loading = false
                this.SenhaIncorreta = true
            }
        })
    }
}