import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={s.wrap}>
      {options.map(option => (
        <li key={option} className={s.item}>
          <button type="button" className={s.button} onClick={onLeaveFeedback}>
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
}
export default FeedbackOptions;
