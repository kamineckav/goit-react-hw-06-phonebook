import Contacts from './Contacts/Contacts';
import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.container}>
      <Contacts />
    </div>
  );
};
