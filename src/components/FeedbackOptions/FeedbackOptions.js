import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={s.wrap}>
      {options.map(option => (
        <li key={option} className={s.item}>
          <button
            id={option}
            type="button"
            className={s.button}
            onClick={onLeaveFeedback}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
}
FeedbackOptions.propType = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
