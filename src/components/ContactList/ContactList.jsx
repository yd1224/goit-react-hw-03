import { Contact } from "../Contact/Contact"
import css from './ContactList.module.css'
export const ContactList = ({ contacts }) => {
console.log(contacts);
  
    return (
        <ul >
            {contacts.map(contact => 

               ( <li className={css.list} key={contact.id}>
 <Contact  user={contact} />
                    </li>)
      )}
                
    
        </ul>
   
    )
}