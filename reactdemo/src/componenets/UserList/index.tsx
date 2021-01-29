import { List } from "semantic-ui-react";
import React from "react";
import { UserListItem } from "../UserListItem";
import { IUser } from "models/user";

interface IProps {
  users: IUser[];
}

export const UserList = (props: IProps) => {
  return (
    <div>
      <h1>Users</h1>
      <div className="list">
        <List divided relaxed animated>
          {props.users.map((item) => (
            <UserListItem user={item} key={item.id}></UserListItem>
          ))}
        </List>
      </div>
    </div>
  );
};
