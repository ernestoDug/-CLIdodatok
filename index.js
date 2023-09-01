const contacts = require("./contacts");

const { Command } = require("commander");
  
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

  // node index -a get -i qdggE76Jtbfd9eWJHr99ssH
  // node index -a list 
  // node index -a add -n Karl -e koren@fff.gmail.com -p 8-098-77-98-555
  // node index -a remove -i drsAJ4SHPYqZeG-83QTVW

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




