<<<<<<< HEAD
const fs = require('fs');
const XLSX = require('xlsx');

const read = ({ file, sheet }) => {
  const buf = fs.readFileSync(file);
  const workbook = XLSX.read(buf, { type: 'buffer' });
  const rows = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
  return rows;
};

module.exports = {
  read,
};
=======
const fs = require('fs');
const XLSX = require('xlsx');

const read = ({ file, sheet }) => {
  const buf = fs.readFileSync(file);
  const workbook = XLSX.read(buf, { type: 'buffer' });
  const rows = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
  return rows;
};

module.exports = {
  read,
};
>>>>>>> 809c4f67599cc5eebdbddbbfdc66a16b75ed390d
