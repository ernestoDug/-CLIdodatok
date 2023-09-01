// // Найбільш використовувані функції для основних операцій над файлами, наступні:

// // fs.readFile(filename, [options]) - читання файлу
// // fs.writeFile(filename, data, [options]) - перезапис файлу
// // fs.appendFile(filename, data, [options])- додавання у файл
// // fs.rename(oldPath, newPath) - перейменування файлу.
// // fs.unlink(path, callback) - видалення файлу.


// const {Router} = require('express');
// const fs = require('fs/promises');
// const path = require('path');

// const contactsPath = path.join(__dirname, 'db/contacts.json');

// // console.log(contactsPath);
// const router = Router();

// const  listContacts =  async () => {
// return JSON.parse(await  fs.readFile(contactsPath)); 
//  }

// router.get('/contacts', async (req, res, next)=> {
//     try {
// const contacts = await listContacts();
// // console.log(contacts);
//     } catch (e) {

//     }

// });



// const removeContact = async (contactId) => {
//     try {
//           const dateForDell = await listContacts();
//       const deleteContact = dateForDell.filter((item) => item.id !== contactId);
//        await fs.writeFile(contactsPath, JSON.stringify(deleteContact, null, 2));
//        console.log(deleteContact || null);
//        return deleteContact;
//     }
    
//      catch (error) {
//       console.log("cannot delete contact" );
//     }
//     };
    

// module.exports = router;