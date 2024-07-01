import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPhone } from "@fortawesome/free-solid-svg-icons";
import css from "./Contact.module.css";

const Contact = ({ name, number, onDelete }) => {
  return (
    <div className={css.contactCard}>
      <div className={css.contactDetails}>
        <div className={css.contactName}>
          <FontAwesomeIcon icon={faUser} /> {name}
        </div>
        <div className={css.contactNumber}>
          <FontAwesomeIcon icon={faPhone} /> {number}
        </div>
      </div>
      <button className={css.deleteButton} onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
