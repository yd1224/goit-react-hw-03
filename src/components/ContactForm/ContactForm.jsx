export const ContactForm = ({onAdd}) => {
    const handleSubmit = evt => {
        evt.preventDefault();
        onAdd(evt.target.elements.username.value);
        evt.target.reset();
    }
    return (
        <form onSubmit={handleSubmit}>
<input type="text" name= "username" />
<button type="submit">Add contact</button>
        </form>
        )
}