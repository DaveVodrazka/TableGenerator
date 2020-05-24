<template>
  <main>
    <table id="example-1">
      <tr v-for="row in rows" :key="row.key">
        <td v-for="cell in row.cells" :key="cell.key">
          <span v-if="cell.key === '0x0'">LOGO</span>
          <input v-else type="text" :id="cell.key">
        </td>
      </tr>
    </table>
  </main>
</template>

<script>
import generateInputs from '../utils/generateInputs';
export default {
  name: 'Table',
  data: generateInputs
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
main {
  margin: 20px;
}
table {
  border-collapse: collapse;
  width: 100%;
}
table td {
  border: 1px solid #dddddd;
  padding: 10px;
}
table td input {
  border: none;
  width: 100%;
}
</style>
