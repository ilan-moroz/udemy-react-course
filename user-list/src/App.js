import React from "react";
import Card from "./components/Card/Card";
import AddUser from "./components/AddUser/AddUser";
import UserList from "./components/UserList/UserList";

function App() {
  const [users, setUsers] = React.useState([]);

  const isEmpty = users.length === 0;

  return (
    <div>
      <Card>
        <AddUser setUsers={setUsers} />
      </Card>
      {!isEmpty && (
        <Card>
          {" "}
          <UserList users={users} />
        </Card>
      )}
    </div>
  );
}

export default App;
