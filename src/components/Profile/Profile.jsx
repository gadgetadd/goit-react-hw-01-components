import {
  ProfileCard,
  Description,
  Avatar,
  ProfileName,
  ProfileTag,
  ProfileLocation,
  ProfileStats,
  StatsLabel,
  StatsQuantity,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileCard>
      <Description>
        <Avatar src={avatar} alt={username} />
        <ProfileName>{username}</ProfileName>
        <ProfileTag>@{tag}</ProfileTag>
        <ProfileLocation>{location}</ProfileLocation>
      </Description>
      <ProfileStats>
        <li>
          <StatsLabel>Followers</StatsLabel>
          <StatsQuantity>{stats.followers}</StatsQuantity>
        </li>
        <li>
          <StatsLabel>Views</StatsLabel>
          <StatsQuantity>{stats.views}</StatsQuantity>
        </li>
        <li>
          <StatsLabel>Likes</StatsLabel>
          <StatsQuantity>{stats.likes}</StatsQuantity>
        </li>
      </ProfileStats>
    </ProfileCard>
  );
};
