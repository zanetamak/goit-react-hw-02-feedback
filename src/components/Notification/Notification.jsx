import PropTypes from 'prop-types';
import css from './Notification.module.css';

const Notification = ({ message }) => (
        <p className={css.notificationMessage}> {message}</p>
    )

Notification.propTypes = {
    message: PropTypes.string.isRequired
}

export default Notification