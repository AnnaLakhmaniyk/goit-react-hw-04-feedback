import PropTypes from 'prop-types';
import s from './Section.module.css';

function Section({ children, title }) {
  return (
    <div className={s.section}>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
}

Section.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default Section;
