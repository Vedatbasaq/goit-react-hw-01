import css from './Profile.module.css';

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className={css.profile}>
      <div>
        <img src={avatar} width={300} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.sameColor}>{tag}a</p>
        <p className={css.sameColor}>{location}</p>
      </div>

      <ul className={css.list}>
        <li>
          <span>Followers</span> <br />
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <br />
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <br />
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
