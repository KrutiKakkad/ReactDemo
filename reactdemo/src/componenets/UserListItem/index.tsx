import { IUser } from "../../models";
import { List, Image } from "semantic-ui-react";

interface IProps {
  user: IUser;
}

export const UserListItem = (props: IProps) => {
  return (
    <List.Item>
      <Image avatar src={props.user.picture} />
      <List.Content>
        <List.Header>{props.user.name.first}</List.Header>
        <List.Description>{props.user.email}</List.Description>
      </List.Content>
    </List.Item>
  );
};
