
import {ContactList} from './components/ContactList/ContactList'
// import { useState, useEffect } from 'react';

const contacts = [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
]

function App() {
  // const [contacts, setContacts] = useState(contacts);

  return (

     <div>
  <h1>Phonebook</h1>
  {/* <ContactForm />
  <SearchBox /> */}
      <ContactList contacts={ contacts} />
</div>

  )
}

export default App
