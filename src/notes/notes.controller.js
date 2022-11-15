const {
  getList,
  addToList,
  deleteFromList,
  EditDataInList,
} = require("./notes.service");

const read = async (req, res) => {
  const fruitlist = await getList();
  console.log("got my list");
  res.json(fruitlist);
};
const addData = async (req, res) => {
  const item = req.body.name;
  console.log(item);
  await addToList(item);

  res.json("addded successfully");
};

const deleteData = async (req, res) => {
  const id = req.body.id;
  const result = await deleteFromList(id);
  res.json(result);
};

const editData = async (req, res) => {
  const id = req.params.id;
  const text = req.body.text;
  const result = await EditDataInList(id, text);
  res.json(result);
};
module.exports = { read, addData, deleteData, editData };
