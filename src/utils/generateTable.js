import getTableData from './getTableData';
import styles from '../styles/styles.json';

const generateTable = () => {
  const checkCode = ['.check', '<img src="https://uploads-ssl.webflow.com/5dbc8667d2d62666f8c901af/5ee37a59842165be1f0c618f_check.svg" />'];
  const crossCode = ['.cross', '<img src="https://uploads-ssl.webflow.com/5dbc8667d2d62666f8c901af/5ee37a59ed4e85ed737ae116_cross.svg" />'];
  const uniqueId = ['.id', getUniqueId(7)];
  const style = 'nastroje';

  let data = addOuterHtml(getTableData(), style);
  while (data.includes(checkCode[0]) || data.includes(crossCode[0]) || data.includes(uniqueId[0])) {
    data = data.replace(checkCode[0], checkCode[1]);
    data = data.replace(crossCode[0], crossCode[1]);
    data = data.replace(uniqueId[0], uniqueId[1]);
  }
  return data;
};

const addOuterHtml = (data, style) => {
  const cssString = styles[style];
  const styleTag = `<style type="text/css">${cssString}</style>`;
  return `${styleTag}<div id=".id"><table>${data}</table></div>`;
};

const getUniqueId = (length) => {
  const stringOfChars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lastCharPosition = stringOfChars.length - 1;
  let uniqueId = 'tab-';
  for (let i = 0; i < length; i++) {
    uniqueId += stringOfChars[Math.floor(Math.random() * lastCharPosition)];
  }
  return uniqueId;
};

export default generateTable;
