import s from './Card.module.scss';
import PropTypes from 'prop-types';

export function Card(props) {
  return (
    <div className="container">
      <div className={s.main_content}>
        <img
          className={s.avatar}
          src={props.userInfo.avatar_url}
          alt="avatar"
        />
        <div>
          <h3>{props.userInfo.login}</h3>
          <p>Followers: {props.userInfo.followers}</p>
          <p>Following: {props.userInfo.following}</p>
        </div>
      </div>
      <div>
        <p>{props.userInfo.bio}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  userInfo: PropTypes.object.isRequired,
};
