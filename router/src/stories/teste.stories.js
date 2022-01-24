import teste from './teste.vue'
import './teste.css'
export default {
  title: 'Components/teste',
  component: teste
}

const Template = (args, { argTypes }) => ({
  components: { teste },
  props: Object.keys(argTypes),
  template: '<teste :nome="nome" :Primary="Primary" :Large="Large"/>'
})

export const Primary = Template.bind({})
Primary.args = {
  nome: 'teste',
  Primary: true,
  Large: true
}

export const Secondary = Template.bind({})
Secondary.args = {
  nome: 'Secondary',
  Primary: false,
  Large: true
}
