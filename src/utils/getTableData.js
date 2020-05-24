const getTableData = () => {
  const rows = document.querySelectorAll('tr');
  let tableStructure = '<table>';
  if (rows) {
    rows.forEach((row, rowIndex) => {
      if (rowIndex && !row.firstChild.querySelector('input').value) return;
      let currentRow = '';
      row.childNodes.forEach((cell, cellIndex) => {
        if (rowIndex === 0 && cellIndex === 0) {
          currentRow += '<td class="logo"></td>';
          return;
        }
        const input = cell.querySelector('input').value;
        if (input) currentRow += getTd(input, cellIndex === 0 ? true : false);
      });
      tableStructure += getTr(currentRow, rowIndex === 0 ? true : false);
    });
  }
  tableStructure += '</table>';
  return tableStructure;
};

const getTr = (input, top) => {
  const tr = `<tr${top ? ' class="top"' : ''}>${input}</tr>`;
  return tr;
};

const getTd = (input, left) => {
  const td = `<td${left ? ' class="left"' : ''}>${input}</td>`;
  return td;
};

export default getTableData;
