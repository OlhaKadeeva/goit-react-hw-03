import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div className={css.list}>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <Contact
            key={id}
            name={name}
            number={number}
            onDelete={() => onDelete(id)}
          />
        ))}
      </ul>
    </div>
  );
};
export default ContactList;
