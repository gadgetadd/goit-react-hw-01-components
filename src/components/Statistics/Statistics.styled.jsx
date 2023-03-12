import styled from '@emotion/styled';

export const StatsSection = styled.section`
  margin: 10px auto;
  width: 200px;
  padding: 10px;
  background-color: white;
  border-radius: 5px;
`;

export const StatsTitle = styled.h2`
  text-transform: uppercase;
  text-align: center;
`;

export const StatsList = styled.ul`
  display: flex;
  list-style: none;
  gap: 5px;
  margin: 0;
  padding: 0;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
  background-color: ${({ color }) => color};
`;

export const StatsLabel = styled.span``;

export const StatsPercentage = styled.span``;
