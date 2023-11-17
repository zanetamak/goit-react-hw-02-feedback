import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <div className={css.feedbackContainer}>
      {options.map(option => (
        <button
          className={css.feedbackBtn}
          key={option}
          onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      ))}
    </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

// moliwość uzycia return  w co wkładam div, ale mona zrobic bez, zeby bylo mniej rozbudowane