import css from "./Contact.module.css";

const Contact = ({ name, number, onDelete }) => (
  <li className={css.list}>
    <div className={css.contacts}>
      <div className={css.inform}>
        <p>{name}</p>
        <p>{number}</p>
      </div>

      <button className={css.delete} onClick={onDelete}>
        Delete
      </button>
    </div>
  </li>
);
export default Contact;
