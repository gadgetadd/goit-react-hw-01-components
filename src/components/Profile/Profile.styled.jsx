import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  width: 200px;

  margin: 0 auto;
  padding: 40px;
  background-color: white;
  border-radius: 10px;
`;

export const Description = styled.div``;

export const Avatar = styled.img`
  margin: 0 auto;
  display: block;
  width: 100px;
  border-radius: 50%;
`;

export const ProfileName = styled.p`
  text-align: center;
`;
export const ProfileTag = styled.p`
  text-align: center;
`;
export const ProfileLocation = styled.p`
  text-align: center;
`;
export const ProfileStats = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  list-style: none;
`;
export const StatsLabel = styled.span`
  display: block;
`;
export const StatsQuantity = styled.span`
  display: block;
`;
