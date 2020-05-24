import getTableData from './getTableData';

const generateTable = () => {
  const checkCode = ['.check', '<svg>CHECK SIGN</svg>'];
  const crossCode = ['.cross', '<svg>CROSS SYMBOL</svg>'];
  let data = getTableData();
  while (data.includes(checkCode[0]) || data.includes(crossCode[0])) {
    data = data.replace(checkCode[0], checkCode[1]);
    data = data.replace(crossCode[0], crossCode[1]);
  }
  console.log(data);
};

export default generateTable;
