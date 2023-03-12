import {
  StatsSection,
  StatsTitle,
  StatsList,
  StatsItem,
  StatsLabel,
  StatsPercentage,
} from './Statistics.styled';

function getColor() {
  return (
    'hsl(' +
    360 * Math.random() +
    ',' +
    (25 + 70 * Math.random()) +
    '%,' +
    (85 + 10 * Math.random()) +
    '%)'
  );
}

export const Statistics = ({ title, stats }) => {
  return (
    <StatsSection>
      {title && <StatsTitle>{title}</StatsTitle>}
      <StatsList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatsItem color={getColor()} key={id}>
              <StatsLabel>{label}</StatsLabel>
              <StatsPercentage>{percentage}</StatsPercentage>
            </StatsItem>
          );
        })}
      </StatsList>
    </StatsSection>
  );
};
