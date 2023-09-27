import { TUser } from '../../services/types';
import styles from './styles/styles.module.css';

type TUserProps = {
  user: TUser;
};

function User({ user }: TUserProps) {
  const { name, surname, age } = user;
  return (
    <>
      <td className={styles.sell}>{name}</td>
      <td className={styles.sell}>{surname}</td>
      <td className={styles.sell}>{age}</td>
    </>
  );
}

export default User;
