import s from './Error.module.scss';
import PropTypes from 'prop-types';

export function Error(props) {
  return <p className={s.error_message}>{props.errorMessage}</p>;
}

Error.propTypes = {
  errorMessage: PropTypes.string.isRequired,
};
