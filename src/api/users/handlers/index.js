const { create, updateOne, readAll, readOne, deleteOne } = require("./../../../middleware/requests");
const { validateData, formatData } = require("./../formaters");
const { switchStatus } = require("./../../../middleware/statusRes");
const TypeSchema = require("./../../../models/users");

//CREATE
exports.handleCreateOne = async (content) => {
  const { valid, errors } = validateData(content);
  if (!valid) return switchStatus({ status: 400, message: errors });
  let dataFormated = formatData(content);
  return switchStatus(await create(TypeSchema, dataFormated));
};
//READ ALL
exports.handleReadAll = async () => {
  return switchStatus(await readAll(TypeSchema));
};
//READ ONE
exports.handleReadOne = async (id) => {
  return switchStatus(await readOne(TypeSchema, id));
};
//UPDATE ONE
exports.handleUpdateOne = async (content, id) => {
  const { valid, errors } = validateData(content);
  if (!valid) return switchStatus({ status: 400, message: errors });
  let dataFormated = formatData(content);
  return switchStatus(await updateOne(TypeSchema, id, dataFormated));
};
// DELETE ONE
exports.handleDeleteOne = async (id) => {
  return switchStatus(await deleteOne(TypeSchema, id));
};
