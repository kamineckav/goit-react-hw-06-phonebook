import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';
import { deleteContact } from '../../redux/contacts/contacts-slice';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const elements = contacts.map(({ id, name, phone }) => (
    <li className={css.item} key={id}>
      {name}: {phone}
      <button
        className={css.button}
        onClick={() => onDeleteContact(id)}
        type="button"
      >
        Delete
      </button>
    </li>
  ));

  return <ul className={css.list}>{elements}</ul>;
};

export default ContactList;
