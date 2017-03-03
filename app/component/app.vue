<template lang="html">
  <div class="container">
    <div class="columns">
      <div class="column">
        <div class="notification is-info">
          <h1>内嵌组件</h1>
          <hello></hello>
        </div>
      </div>
      <div class="column">
        <p class="notification is-success">
          <label class="label">Username</label>
          <p class="control has-icon has-icon-right">
            <input class="input is-success" type="text" v-model="name">
            <span class="icon is-small">
              <i class="fa fa-check"></i>
            </span>
            <span class="help is-success">This username is available</span>
          </p>
        </p>
      </div>
      <div class="column">
        <p class="notification is-warning">Third column</p>
      </div>
    </div>
  </div>
</template>

<script>
import Hello from './hello.vue';
export default {
  data(){
    return {
      name:'vue@2.0'
    }
  },
  components:{
    hello:Hello
  }
}
</script>

<style lang="css">
</style>
