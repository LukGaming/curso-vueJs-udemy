<template >
  <div>
    <template>
      <v-row justify="space-around">
        <v-col cols="auto">
          <v-dialog transition="dialog-top-transition" max-width="600">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                tile
                color="success"
                class="space-buttons"
                v-bind="attrs"
                v-on="on"
              >
                Editar</v-btn
              >
            </template>

            <template v-slot:default="dialog">
              <v-card>
                <v-toolbar color="primary" dark
                  >Editando Produto {{ produto.id }}</v-toolbar
                >
                <v-card-text>
                  <div class="text-h2 pa-12">
                    <v-form ref="form" lazy-validation>
                      <v-text-field
                        v-model="produto.nome"
                        label="Nome do Produto"
                        required
                      ></v-text-field>

                      <v-text-field
                        v-model="produto.valor"
                        label="Valor do Produto"
                        type="number"
                      ></v-text-field>
                      <v-textarea
                        label="Descrição do Produto"
                        v-model="produto.descricao"
                      ></v-textarea>
                      <div class="botoes-between">
                        <v-btn @click="salvarAlteracoes" depressed dark>
                          Salvar
                        </v-btn>
                        <v-btn
                          color="success"
                          @click="dialog.value = false, fechandoAlteracao"
                          dark
                          depressed
                          >Sair</v-btn
                        >
                      </div>
                    </v-form>
                  </div>
                </v-card-text>
              </v-card>
            </template>
          </v-dialog>
        </v-col>
      </v-row>
    </template>
  </div>
</template>

<script>
export default {
  props: ["produto"],
  data() {
    return {
      dialog: false
    }
  },
  methods: {
    salvarAlteracoes() {
      console.log(this.produto);
      this.$http.patch(`/${this.produto.id}`, this.produto).then(() => {
        console.log("Produto Atualizado!");
      });
    },
    fechandoAlteracao(){
         console.log(this.dialog)
    }
  },
};
</script>
<style>
.botoes-between {
  display: flex;

  justify-content: space-around;
}
</style>