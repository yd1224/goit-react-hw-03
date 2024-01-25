
import { ContactList } from './components/ContactList/ContactList'
import { SearchBox } from './components/SearchBox/SearchBox'
import {useState} from "react";
// import { useState, useEffect } from 'react';

const contacts = [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
]

function App() {
  const [inputValue, setInputValue] = useState("");
  const [contact, setContact] = useState(contacts);
    const handleChange = evt => {

      setInputValue(evt.target.value);

      const contactName = evt.target.value.trim().toLowerCase();
   

      
      const foundContact = contacts.filter(contact => {
        if (contact.name.trim().toLowerCase().includes(contactName)) {
          return contact;
        } 
      });
  setContact(foundContact);


    }
  
  return (

     <div>
      <h1>Phonebook</h1>
      <SearchBox handleChange={handleChange } inputValue={inputValue} />
  {/* <ContactForm /> */}
      <ContactList contacts={ contact}  />
</div>

  )
}

export default App
