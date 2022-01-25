import teste from './teste.vue'
import './teste.css'
export default {
  title: 'Components/teste',
  component: teste
}

const Template = (args, { argTypes }) => ({
  components: { teste },
  props: Object.keys(argTypes),
  template:
    '<teste :nome="nome" :green="green" :textLight="textLight" :gold="gold" :red="red" :primary="primary" :blue="blue"/>'
})

export const Primary = Template.bind({})
Primary.args = {
  primary: true
}

export const Secondary = Template.bind({})
Secondary.args = {
  secondary: false
}
export const Red = Template.bind({})
Red.args = {}
