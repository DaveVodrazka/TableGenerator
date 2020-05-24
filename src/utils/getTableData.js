const getTableData = () => {
  const rows = document.querySelectorAll('tr');
  let tableStructure = '';
  if (rows) {
    rows.forEach((row, rowIndex) => {
      if (rowIndex && !row.firstChild.querySelector('input').value) return;
      let currentRow = '';
      row.childNodes.forEach((cell, cellIndex) => {
        if (rowIndex === 0 && cellIndex === 0) {
          currentRow += '<th class="logo"></th>';
          return;
        }
        const input = cell.querySelector('input').value;
        if (input) currentRow += getTd(input, cellIndex === 0 ? true : false, rowIndex === 0 ? true : false);
      });
      tableStructure += getTr(currentRow, rowIndex === 0 ? true : false);
    });
  }
  return tableStructure;
};

const getTr = (input, top) => {
  if (top) return `<thead><tr>${input}</tr></thead>`;
  return `<tr>${input}</tr>`;
};

const getTd = (input, left, top) => {
  if (top) return `<th${left ? ' class="left"' : ''}>${input}</th>`;
  return `<td${left ? ' class="left"' : ''}>${input}</td>`;
};

export default getTableData;
