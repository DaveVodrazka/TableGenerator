<template>
  <div id="app">
    <Heading msg="Table Generator"/>
    <Table />
    <Button />
  </div>
</template>

<script>
import Heading from './components/Heading.vue';
import Table from './components/Table.vue';
import Button from './components/Button.vue';

export default {
  name: 'App',
  components: {
    Heading,
    Table,
    Button
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
