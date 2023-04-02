import styled from '@emotion/styled';

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 250px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 250px;
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

export const Status = styled.span`
  display: block;
  margin-left: 20px;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
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
