const {Router} = require('express');
const fs = require('fs').promises;
const path = require('path');

const contactsPath = path.join(__dirname, '/../db/contacts.json');

// console.log(contactsPath);
const router = Router();

const  listContacts =  async () => {
return JSON.parse(await  fs.readFile(contactsPath)); 
 }

router.get('/contacts', async (req, res, next)=> {
    try {
const contacts = await listContacts();
// console.log(contacts);
    } catch (e) {

    }

});



module.exports = router;