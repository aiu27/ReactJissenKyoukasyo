import React, { useEffect, useState } from "react";
import { ListItem } from "./components/ListItem";
import { User } from "./types/user";
// import axios from "axios";
// import type { User } from ".type/user";

export const App = () => {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: "主田", age: 24, personalColor: "blue" },
    { id: 2, name: "先岡", age: 28, personalColor: "pink" },
    { id: 3, name: "主田", age: 23, personalColor: "green" },
  ]);

  // useEffect(() => {
  //   axios.get<User[]>("https://jsonplaceholder.typicode.com/users").then((res) => {
  //     setUsers(res.data);
  //     console.log(users);
  //   });
  // }, []);

  return (
    <div>
      {users.map((user) => (
        <ListItem
          id={user.id}
          name={user.name}
          age={user.age}
          personalColor={user.personalColor}
        />
      ))}
    </div>
  );
};
