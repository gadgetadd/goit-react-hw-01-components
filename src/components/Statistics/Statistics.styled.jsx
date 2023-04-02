import styled from '@emotion/styled';

export const StatsSection = styled.section`
  margin: 40px auto;
  width: 250px;
  padding: 0;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

export const StatsTitle = styled.h2`
  text-transform: uppercase;
  text-align: center;
  margin: 0;
  padding: 20px 0;
  color: rgba(0, 0, 0, 0.75);
`;

export const StatsList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const StatsItem = styled.li`
  width: 0;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background-color: ${({ color }) => color};
`;

export const StatsLabel = styled.span`
  text-align: center;
  font-size: 10px;
  margin: 10px 0;
`;

export const StatsPercentage = styled.span`
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 10px;
`;
