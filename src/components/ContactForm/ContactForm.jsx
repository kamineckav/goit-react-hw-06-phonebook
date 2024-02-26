import { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/contacts-slice';
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';

import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

const INITIAL_STATE = {
  name: '',
  phone: '',
};

const ContactForm = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const [constact, setContact] = useState({
    ...INITIAL_STATE,
  });

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = e => {
    const { value, name } = e.target;
    setContact({
      ...constact,
      [name]: value,
    });
  };

  const isDuplicate = ({ name }) => {
    const nameNormalized = name.toLowerCase();

    const duplicate = contacts.find(item => {
      const currentNameNormalize = item.name.toLowerCase();
      return currentNameNormalize === nameNormalized;
    });

    return Boolean(duplicate);
  };

  const onAddContact = e => {
    e.preventDefault();

    if (isDuplicate(constact)) {
      return alert(`${constact.name} is already in contacts`);
    }

    const action = addContact(constact);
    dispatch(action);
    reset();
  };

  const reset = () => {
    setContact({ ...INITIAL_STATE });
  };

  const { name, phone } = constact;

  const nameId = nanoid();
  const phoneId = nanoid();

  return (
    <form className={css.form} onSubmit={onAddContact}>
      <div className={css.formGroup}>
        <input
          ref={inputRef}
          onChange={handleChange}
          id={nameId}
          placeholder="Enter name"
          type="text"
          name="name"
          value={name}
          required
        />
      </div>
      <div className={css.formGroup}>
        <input
          onChange={handleChange}
          id={phoneId}
          placeholder="Enter number"
          type="tel"
          name="phone"
          value={phone}
          required
        />
      </div>
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
