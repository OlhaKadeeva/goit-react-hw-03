import css from "./Contact.module.css";
import { IoCall } from "react-icons/io5";
import { RiContactsFill } from "react-icons/ri";

const Contact = ({ name, number, onDelete }) => (
  <li className={css.list}>
    <div className={css.contacts}>
      <div className={css.inform}>
        <p>
          <RiContactsFill className={css.icon} size="20" />
          {name}
        </p>
        <p>
          <IoCall className={css.icon} size="20" />
          {number}
        </p>
      </div>

      <button className={css.delete} onClick={onDelete}>
        Delete
      </button>
    </div>
  </li>
);
export default Contact;
