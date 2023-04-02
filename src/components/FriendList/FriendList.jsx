import PropTypes from 'prop-types';
import {
  List,
  ListItem,
  Status,
  Avatar,
  FriendName,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <ListItem key={id}>
            <Status status={isOnline}></Status>
            <Avatar src={avatar} alt={name} width="48" />
            <FriendName>{name}</FriendName>
          </ListItem>
        );
      })}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
