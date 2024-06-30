import s from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={s.profileCard}>
      <div className={s.card}>
        <img className={s.image} src={image} alt="User avatar" />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.list}>
        <li className={s.item}>
          <span>Followers</span>
          <span className={s.numbers}>{stats.followers}</span>
        </li>

        <li className={s.item}>
          <span>Views</span>
          <span className={s.numbers}>{stats.views}</span>
        </li>

        <li className={s.item}>
          <span>Likes</span>
          <span className={s.numbers}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
