
import { ContactList } from './components/ContactList/ContactList'
import { SearchBox } from './components/SearchBox/SearchBox'
import {ContactForm} from './components/ContactForm/ContactForm'
import { useState } from "react";



const contacts = [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
]

function App() {
  const [inputValue, setInputValue] = useState("");
  const [contact, setContact] = useState(contacts);
    //  const [paymentMethod, setpaymentMethod] = useState("visa");
  const handleChange = evt => {
    setInputValue(evt.target.value);
  }

let foundContact = contact.filter(contact => {

  const nameWords = contact.name.toLowerCase().split(" ");
console.log(nameWords);

  const valueWords = inputValue.toLowerCase().replace(/\s+/g, ' ');
console.log(valueWords);
  if (nameWords[0].startsWith(valueWords) || nameWords[1].startsWith(valueWords)
    ||(nameWords[0] + " "+nameWords[1]).startsWith(valueWords)) {
    console.log("!!!");
    return true; 
  }
});
  console.log(foundContact);
  if (foundContact.length === 0) {
    foundContact = [...contact];

}
  const deleteUser = userId => {
    setContact((prevContacts) => {
      return prevContacts.filter((user) => user.id !== userId);
    })
  }
  const addUser = (newUser) => {
      setContact((prevContacts) => {
        return [...prevContacts, newUser];
    })
  }
  return (

     <div>
      <h1>Phonebook</h1>
   
      <ContactForm onAdd={addUser} />
         <SearchBox handleChange={handleChange } inputValue={inputValue} />
      <ContactList contacts={foundContact} onDelete={deleteUser} />
      {/* <select name="payment"
             value={paymentMethod} onChange={evt => {
        setpaymentMethod(evt.target.value);
      }}
   >
        <option value="apple">Apple</option>
        <option value="visa">Visa</option>
            <option value="cash">Cash</option>
      </select> */}
</div>

  )
}

export default App
