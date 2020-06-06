<template>
  <div id="app">
    <Heading msg="Table Generator"/>
    <Table />
    <OutputField />
  </div>
</template>

<script>
import Heading from './components/Heading.vue';
import Table from './components/Table.vue';
import OutputField from './components/OutputField.vue';

export default {
  name: 'App',
  components: {
    Heading,
    Table,
    OutputField
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
