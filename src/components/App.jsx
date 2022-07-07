import { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + neutral + bad;
  const changesValueState = evt => {
    switch (evt.target.id) {
      case `good`:
        setGood(state => state + 1);
        break;
      case `neutral`:
        setNeutral(state => state + 1);
        break;
      case `bad`:
        setBad(state => state + 1);
        break;
      default:
        break;
    }
  };
  const countPositiveFeedbackPercentage = () => {
    if (total > 0) {
      return Math.floor((good / total) * 100);
    }
  };
  const positivePercentage = countPositiveFeedbackPercentage();
  return (
    <div className="wraper">
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={[`good`, `neutral`, `bad`]}
          onLeaveFeedback={changesValueState}
        />
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}

export default App;
