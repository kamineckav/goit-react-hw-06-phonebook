import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filter/filter-slice';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = ({ target }) => dispatch(setFilter(target.value));

  return (
    <input
      className={css.input}
      onChange={changeFilter}
      name="filter"
      placeholder="Search contacts..."
    />
  );
};

export default Filter;
