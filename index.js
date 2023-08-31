const contacts = require("./contacts.js");

const { Command } = require("commander");

const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

function invokeAction({ action, name, id,  email, phone }) {

  switch (action) {
    case "list":
      contacts.listContacts();
     break;

    case "get":
      contacts.getContactById(id); 
     break;


     case "add":
      contacts.addContact(name, email, phone);
      break;


    case "remove":
      contacts.removeContact(id);
      break;

    default:
      console.warn("\x1B[31m Unknown2 action type!");
  }
}

invokeAction(argv);


// invokeAction({action: 'list'});  
// invokeAction({action: 'get', id: 'rsKkOQUi80UsgVPCcLZZW' }); 
// invokeAction(
//   {action: 'add',
//    email: "ddddd@bred.net",
//    phone: "456546546" }
//    ); 
// invokeAction({action: 'remove', id: "Lt7ZFMhsxqqgSFNJqbMLw" }); 




