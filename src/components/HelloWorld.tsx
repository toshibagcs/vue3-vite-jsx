import { defineComponent } from 'vue'
import { ref } from 'vue'
// main
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup(props) {
    const { msg } = props
    // @NOTE the reactive properties need to expose as count.value in the template
    const count = ref(0)
    
    return {
      count, 
      msg
    }
  },
  render() {
    return (
      <div>
      <h1>{ this.msg }</h1>
      <div class="card">
        <button type="button" onClick={ () => this.count++ }>count is { this.count }</button>
        <p>
          Edit
          <code>components/HelloWorld.vue</code> to test HMR
        </p>
      </div>
      <p>
        Check out
        <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
          >create-vue</a
        >, the official Vue + Vite starter
      </p>
      <p>
        Install
        <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
        in your IDE for a better DX
      </p>
      <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
    </div>
    )
  }
})