const path = require("path");
const fs = require("fs").promises;

const contactsPath = path.join("db", "contacts.json");

const getParseContactsPath = async (path) => {
  const data = await fs.readFile(path);
  return JSON.parse(data);
};

const listContacts = async () => {
  try {
    const parseData = await getParseContactsPath(contactsPath);
    console.table(parseData);
  } catch (error) {
    console.log(error);
  }
};

const getContactById = async (contactId) => {
  try {
    const parseData = await getParseContactsPath(contactsPath);
    const findContact = parseData.find((item) => item.id === contactId);
    console.table(findContact);
  } catch (error) {
    console.log(error);
  }
};

const removeContact = async (contactId) => {
  try {
    const parseData = await getParseContactsPath(contactsPath);
    const deleteContact = parseData.filter((item) => item.id !== contactId);
    console.table(deleteContact);
    return await fs.writeFile(contactsPath, JSON.stringify(deleteContact));
  } catch (error) {
    console.log(error);
  }
};

const addContact = async (name, email, phone) => {
  try {
    const parseData = await getParseContactsPath(contactsPath);
    const newContact = {
      id: `${parseData.length + 1}`,
      name,
      email,
      phone,
    };
    const data = [...parseData, newContact];
    console.table(data);
    return await fs.writeFile(contactsPath, JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};