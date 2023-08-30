const path = require("path");
const fs = require("fs").promises;
const {nanoid} = require('nanoid');
// npm i nanoid@3.3.4


const contactsPath = path.join(__dirname, 'db/contacts.json');



// 1
const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath);
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
    return  findContact || null;
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
    // console.table("bfb");
    const recordCont =  await fs.writeFile(contactsPath, JSON.stringify(data));
    return  recordCont;
  } catch (error) {
    console.log("cannot write new contact");
  }
};

const removeContact = async (contactId) => {
  try {
    const parseData = await listContacts(contactsPath);
    const deleteContact = parseData.filter((item) => item.id !== contactId);
    console.table(deleteContact);
    return await fs.writeFile(contactsPath, JSON.stringify(deleteContact));
  } catch (error) {
    console.log(error);
  }
};

// listContacts();


module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};