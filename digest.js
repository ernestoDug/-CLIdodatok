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


// **************** сплайсим вместо фтльтра

/// const removeContact = async (contactId) => {
//   const dateForDell = await listContacts();
//   const index = dateForDell.findIndex(cont => cont.id === contactId);

//   const deletedcont = dateForDell[index];
//   if(index !== -1) {
//     dateForDell.splice(index, 1);
//       await fs.writeFile(contactsPath, JSON.stringify(dateForDell, null, 2));
//   }
//   console.log(deletedcont || null);
//   return deletedcont;
// }


// ******************************************************
// komandiiiiiiiiiiiiiiiiiiiii

// node index -a get -i05olLMgyVQdWRwgKfg5J68888
// node index -a list
// node index -a add -n Jaramy -e gf@fff.gmail.com -p 0-897-77-98-575
// node index -a remove -i t--Pc24qwzfINGtwpD_Vi