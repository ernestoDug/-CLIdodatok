const path = require("path");
const fs = require("fs").promises;
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "db/contacts.json");
// 1
const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath);
    console.table(JSON.parse(data));
    return JSON.parse(data);
  } catch (error) {
    console.log("cannot read contacts");
  }
};
// 2
const getContactById = async (contactId) => {
  try {
    const dataForId = await listContacts();
    const findContact = dataForId.find((item) => item.id === contactId);
    return console.log(findContact || null);
  } catch (error) {
    console.log("cannot read id");
  }
};
// 3
const addContact = async (name, email, phone) => {
  try {
    const dataForAdd = await listContacts();
    const newContact = {
      id: nanoid(),
      name,
      email,
      phone,
    };
    const data = [...dataForAdd, newContact];
    await fs.writeFile(contactsPath, JSON.stringify(data, null, 2));
    console.log(newContact);
    return data;
  } catch (error) {
    console.log("cannot add contact");
  }
};
// 4
const removeContact = async (contactId) => {
  const dateForDell = await listContacts();
  const index = dateForDell.findIndex((cont) => cont.id === contactId);
  const deletedcont = dateForDell[index];
  if (index !== -1) {
    dateForDell.splice(index, 1);
    await fs.writeFile(contactsPath, JSON.stringify(dateForDell, null, 2));
  }
  console.log(deletedcont || null);
  return deletedcont;

};
module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
