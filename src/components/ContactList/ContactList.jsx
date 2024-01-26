import { Contact } from "../Contact/Contact"
import css from './ContactList.module.css'
export const ContactList = ({ contacts, onDelete}) => {

// console.log("______", contacts[0]);
    return (
        <ul >
            {contacts.map(contact => {
 return  ( <li className={css.list} key={contact.id}>
 <Contact user={contact} onDelete={onDelete} />
                    </li>)
        
}
    )} </ul>
   
    )
}