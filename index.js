const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

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

async function invokeAction({ action, name, id,  email, phone }) {

  switch (action) {
    case "list":
     const listCont =  await   listContacts();
      console.log(listCont);
     break;

    case "get":
      const findIdCont = await  getContactById(id);
      console.log(findIdCont);
     break;


    case "add":
    const newCont =   await  addContact(name, email, phone);
    return console.log(newCont);
      break;

    case "remove":
      await    removeContact(id);
      break;

    default:
      // console.warn("\x1B[31m Unknown2 action type!");
  }
}

invokeAction(argv);


// invokeAction({action: 'list'});  
// invokeAction({action: 'get', id: "qdggE76Jtbfd9eWJHrssH" }); 
// invokeAction({action: 'add', email: "abracadabra@bred.net",phone: 456546546 }); 


