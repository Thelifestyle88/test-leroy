import { TUser } from '../../services/constants';

type TUserProps = {
  user: TUser;
};

function User({ user }: TUserProps) {
  const { name, surname, age } = user;
  return (
    <>
      <td>{name}</td>
      <td>{surname}</td>
      <td>{age}</td>
    </>
  );
}

export default User;
