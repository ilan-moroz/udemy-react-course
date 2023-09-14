import classes from "./UserList.module.css";

const UserList = props => {
  return (
    <div>
      {props.users.map((user, i) => (
        <div className={classes.user} key={i}>
          <p>
            {user.userName} ({user.age} Years old)
          </p>
        </div>
      ))}
    </div>
  );
};

export default UserList;
