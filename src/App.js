import "./App.css";
import React, { useState, useEffect } from "react";
import UserForm from "./components/UserForm";

const URL = "https://jsonplaceholder.typicode.com/users";

const App = () => {
  let [users, setUsers] = useState([]);
  // const [newUser, setNewUser] =  useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);
  // update
  const [selectedUser, setSelectedUser] = useState({
    username: "",
    email: "",
  });
  const [updateFlag, setUpdateFlag] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState("");

  useEffect(() => {
    fetch(URL).then(res=> res.json()).then(data =>setUsers(data));
  }, [])

  const addUser = (user) => {
    const array = users.push(user);
    console.log(array);
    console.log(users);
    setUsers(array);
  };

  // delete user
  const handleDelete = (id) => {
    // fetch(URL + `/${id}`, {
    //   method: "DELETE",
    // })
    //   .then((res) => {
    //     if (!res.ok) {
    //       throw Error("could not delete");
    //     }
    //     getAllUsers();
    //   })
    //   .catch((err) => {
    //     setError(err.message);
    //   });
  };
  const handleEdit = (id) => {
    // setSelectedUserId(id);
    // setUpdateFlag(true);
    // const filteredData = users.filter((user) => user.id === id);
    // setSelectedUser({
    //   username: filteredData[0].username,
    //   email: filteredData[0].email,
    // });
  };

  const handleUpdate = (user) => {
    // fetch(URL + `/${selectedUserId}`, {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(user),
    // })
    //   .then((res) => {
    //     if (!res.ok) {
    //       throw new Error("failed to update");
    //     }
    //     getAllUsers();
    //     setUpdateFlag(false);
    //   })
    //   .catch((err) => {
    //     setError(err.message);
    //   });
  };
  return (
    <div className="App">
      <h1>User Management App 2022</h1>
      {/* {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>} */}

      {updateFlag ? (
        <UserForm
          btnText="Update User"
          selectedUser={selectedUser}
          handleSubmitData={handleUpdate}
        />
      ) : (
        <UserForm btnText="Add User" handleSubmitData={addUser} />
      )}

      <section>
        {
          users.map(user=> console.log(user))
        }
      </section>
    </div>
  );
};

export default App;
