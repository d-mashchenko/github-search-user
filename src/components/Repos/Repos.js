import { Error } from '../Error/Error';
import s from './Repos.module.scss';
import PropTypes from 'prop-types';

const NO_REPOS_MESSAGE = 'There are no repos';

export function Repos(props) {
  return (
    <div>
      <h2>Repositories</h2>
      {!props.userRepos.length ? (
        <Error errorMessage={NO_REPOS_MESSAGE} />
      ) : (
        props.userRepos.slice(0, props.reposQuantity).map((item) => {
          return (
            <div className={s.item} key={item.id}>
              <a className={s.link} href={item.url}>
                {item.name}
              </a>
              <div className={s.rep_info}>
                <p className={s.text}>Forks count: {item.forks_count}</p>
                <p className={s.text}>Issues: {item.open_issues_count}</p>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

Repos.propTypes = {
  userRepos: PropTypes.array.isRequired,
  reposQuantity: PropTypes.number.isRequired,
};
