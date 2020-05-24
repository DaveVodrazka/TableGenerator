const getDimensions = () => {
  let columns = 5;
  let rows = 5;
  const url = window.location.href;
  if (url.includes('?')) {
    const utms = url.split('?')[1];
    console.log(utms);
  }
  return { columns, rows };
};

const generateInputs = () => {
  const { columns, rows } = getDimensions();
  const table = { rows: [] };
  for (let i = 0; i < rows; i++) {
    table.rows[i] = { key: `row-${i}`, cells: [] };
    for (let j = 0; j < columns; j++) {
      const currentCell = { key: `${i}x${j}` };
      table.rows[i].cells[j] = currentCell;
    }
  }

  return table;
};

export default generateInputs;
