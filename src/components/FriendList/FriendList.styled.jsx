import styled from '@emotion/styled';

export const List = styled.ul`
  list-style: none;
  padding: 0;
  width: 300px;
  margin: 10px auto;
  background-color: white;
  border-radius: 5px;
`;

export const ListItem = styled.li`
  display: flex;
  padding: 10px;
  gap: 10px;
  align-items: center;

  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

export const Status = styled.span`
  display: block;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  border: 1px solid black;
  background-color: ${({ status }) => {
    return status ? 'green' : 'red';
  }};
`;

export const Avatar = styled.img`
  display: block;
  height: 100%;
`;

export const FriendName = styled.p`
  font-size: 24px;
`;
