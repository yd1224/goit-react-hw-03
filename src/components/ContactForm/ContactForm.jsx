import css from './ContactForm.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useId } from "react";
import * as Yup from "yup";
import IMask from 'imask';
import { useEffect } from 'react';
// import {useState} from "react";
export const ContactForm = ({ onAdd }) => {
    const contactSchema = Yup.object().shape(
        {
        name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
        number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
        }
    )
//   const formatSocialSecurityNumber = (value) => {
//     return value.replace(/^(\d{3})(\d{2})?(\d{2})?$/, (match, p1, p2, p3) => {
//       let formattedValue = p1;
//       if (p2 !== undefined) formattedValue += `-${p2}`;
//       if (p3 !== undefined) formattedValue += `-${p3}`;
//       return formattedValue;
//     });
//   };
  
//     const [number, setNumber] = useState("");
//     const handleChange = evt => {
//       const formattedValue = formatSocialSecurityNumber(evt.target.value);
//     setNumber(formattedValue);
        
    //   }

    const userId1 = useId();
    const userId2 = useId();
   useEffect(() => {
    const inputElement = document.getElementById(userId2);

    if (inputElement) {
      const mask = IMask(inputElement, {
        mask: '000-00-00',
      });
    }
  }, [userId2]);

    return (
        <Formik initialValues={{
        name: "",
        number:""
        }}
            onSubmit={(values, actions) => { 
                onAdd({
                    id: Date.now(),
                    ...values
                })
                actions.resetForm();
            }}
        validationSchema={contactSchema}>
            <Form className={css.form}>
         <label htmlFor={userId1}>Name</label>
                <Field className={css.input} type="text" name="name" id={userId1} />
                <ErrorMessage className={css.err}  name="name" component="p"/>
             <label htmlFor={userId2}>Number</label>
                <Field   pattern="\d{3}-\d{2}-\d{2}" className={css.input} type="text" name="number" id={userId2}  placeholder="Enter a number (e.g., 111-22-33)"   />
                <ErrorMessage className={css.err} name="number"  component="p"/>
                <button className={css.btn} type="submit">Add contact</button>
                
</Form>
        </Formik>
        );
}