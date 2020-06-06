<template>
  <div>
    <generate-button @tableGenerated="getTable" />
    <output-display :data="table" />
  </div>
</template>

<script>
import Button from './Button.vue';
import OutputDisplay from './OutputDisplay.vue';

export default {
  data() {
    return {
        table: 'This is where your generated table data will be output.'
    }
  },
  name: 'OutputField',
  components: {
    'generate-button': Button,
    'output-display': OutputDisplay
  },
  methods: {
    getTable(table) {
      if (table) {
        this.table = table;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
