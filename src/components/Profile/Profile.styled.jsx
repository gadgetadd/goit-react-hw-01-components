import styled from '@emotion/styled';
import { getColor } from 'utils';

export const ProfileCard = styled.div`
  width: 250px;
  margin: 0 auto 40px;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

export const Description = styled.div`
  padding: 40px;
`;

export const Avatar = styled.img`
  margin: 0 auto 20px;
  display: block;
  width: 100px;
  border-radius: 50%;
`;

export const ProfileName = styled.h3`
  text-align: center;
  margin: 0;
`;
export const ProfileTag = styled.p`
  text-align: center;
  font-size: 12px;
  margin: 10px 0;
  color: rgba(0, 0, 0, 0.6);
`;
export const ProfileLocation = styled.p`
  text-align: center;
  font-size: 14px;
  margin: 0;
  color: rgba(0, 0, 0, 0.6);
`;
export const ProfileStats = styled.ul`
  margin: 0;
  padding: 0px;
  display: flex;
  justify-content: space-between;
  list-style: none;
  background-color: ${getColor};
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  li {
    width: calc(100% / 3);
    border-right: 1px solid rgba(0, 0, 0, 0.2);
    padding: 14px;
  }
  li:last-child {
    border-right: none;
  }
`;
export const StatsLabel = styled.span`
  display: block;
  text-align: center;
  font-size: 10px;
  margin: 0;
  margin-bottom: 10px;
  color: rgba(0, 0, 0, 0.6);
`;
export const StatsQuantity = styled.span`
  display: block;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  margin: 0;
  color: black;
`;
