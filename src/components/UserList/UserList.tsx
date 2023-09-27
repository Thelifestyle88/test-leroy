import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../store';
import { filterUser } from '../../store/userSlice';
import NewUser from '../NewUser/NewUser';
import User from '../User/User';
import styles from './styles/style.module.css';

function UserList() {
  const dispatch = useAppDispatch();
  const filteredUsers = useAppSelector((store) => store.userList.filteredUsers);

  const [valueMin, setValueMin] = useState('');
  const [valueMax, setValueMax] = useState('');
  const [value, setValue] = useState(false);

  const onChangeMin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueMin(e.target.value);
  };
  const onChangeMax = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueMax(e.target.value);
  };
  useEffect(() => {
    dispatch(filterUser({ valueMin, valueMax }));
  }, [valueMin, valueMax, dispatch]);
  // Отправляем экшн в редакс для фильтрации каждый раз при изменении значения в полях Min & Max
  return (
    <section className={styles.userList}>
      <form className={styles.form} action="submit">
        <label className={styles.label} htmlFor="min">
          Min age:
          <div className={styles.inputWrapper}>
            <input
              className={styles.input}
              min={1}
              max={120}
              value={valueMin}
              onChange={onChangeMin}
              // запиываем значения min в стейт
              type="number"
              placeholder="min age"
              id="min"
              name="min"
            />
          </div>
        </label>
        <label className={styles.label} htmlFor="max">
          Max age:
          <div className={styles.inputWrapper}>
            <input
              className={styles.input}
              min={1}
              max={121}
              value={valueMax}
              type="number"
              placeholder="max age"
              onChange={onChangeMax}
              // запиываем значения max в стейт
              name="max"
              id="max"
            />
          </div>
        </label>
      </form>
      <button
        className={styles.button}
        onClick={() => (value ? setValue(false) : setValue(true))}
        // следим за нажатием кнопки добавления пользователя и записываем в стейт
      >
        add new User
      </button>
      <div className={value ? styles.shown : styles.hidden}>
        <NewUser />
      </div>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr className={styles.tr}>
            <th className={styles.th}>Name</th>
            <th className={styles.th}>Surname</th>
            <th className={styles.th}>Age</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {filteredUsers.map((user, index) => {
            return (
              // eslint-disable-next-line react/no-array-index-key
              <tr className={styles.tr} key={index}>
                <User user={user} />
              </tr>
              // "отрисовываем" users
            );
          })}
        </tbody>
      </table>
    </section>
  );
}

export default UserList;
