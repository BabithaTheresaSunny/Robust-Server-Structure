const knexInstance = require("../database/connection");

const getList = async () => {
  const result = await knexInstance("fruits")
    .select("*")
    .orderBy("index", "asc");
  console.log(result);
  return result;
};
const addToList = async (item) => {
  await knexInstance("fruits").insert({ fruit: item });
};

const deleteFromList = async (id) => {
  await knexInstance("fruits").where("index", id).del();
  return "deleted successfully";
};

const EditDataInList = async (id, text) => {
  const editedList = await knexInstance("fruits")
    .where({ index: id })
    .update({ fruit: text }, ["index", "fruit"]);
  return editedList;
};
module.exports = { getList, addToList, deleteFromList, EditDataInList };
