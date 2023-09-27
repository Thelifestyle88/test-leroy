import { useState } from 'react';

import { useAppDispatch } from '../../store';
import { addUser } from '../../store/userSlice';
import styles from './styles/style.module.css';

function NewUser() {
  const dispatch = useAppDispatch();

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onChangeSurname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSurname(e.target.value);
  };
  const onChangeAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAge(e.target.value);
  };
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const clearField = () => {
    setName('');
    setSurname('');
    setAge('');
    setEmail('');
  };

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        // отменяем стандартное поведение
        dispatch(addUser({ name, surname, age, email }));
        // отправляем экшн на добавление нового юзера
        clearField();
        // Очищаем поля ввода
      }}
      action="submit"
    >
      <input
        required
        className={styles.input}
        onChange={onChangeName}
        value={name}
        placeholder="name"
        type="text"
      />
      <input
        required
        className={styles.input}
        onChange={onChangeSurname}
        value={surname}
        placeholder="surname"
        type="text"
      />
      <input
        required
        className={styles.input}
        onChange={onChangeAge}
        value={age}
        placeholder="age"
        type="number"
      />
      <input
        className={styles.input}
        onChange={onChangeEmail}
        value={email}
        placeholder="email"
        type="email"
      />
      <button className={styles.button} type="submit">
        <span>Add</span>
      </button>
    </form>
  );
}

export default NewUser;
