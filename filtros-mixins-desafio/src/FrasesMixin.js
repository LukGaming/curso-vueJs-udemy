export default{
    computed: {
        fraseComVirgulas() {
          return this.palavra1.replace(/\s/g, ",");
        },
        contandoPalavrasELetras() {
            return this.palavra2.split(' ').map(p => `${p} - ${p.length}`).join(' ');
        },
      }
}