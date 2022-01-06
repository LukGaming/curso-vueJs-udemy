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
    
        this.$http(`/usuarios/?email=${this.email}`).then(res => {
                if (res.data) {
                    if (this.senha == res.data[0].senha) {
                        this.$session.start()
    
                        this.$session.set(
                            'userId', res.data[0].id,
                        )
                        this.$session.set(
                            'nome', res.data[0].nome,
                        )
                        this.$session.set(
                            'email', res.data[0].email,
                        )
                        this.loading = false
                        this.$router.push( {path: '/', query: { loginSucess: 'true' } })
    
                    } else {
                        this.SenhaIncorreta = true
                        this.loading = false
    
                    }
                }
    
            
    
        })
    }
}