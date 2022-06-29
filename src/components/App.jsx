import React from 'react';

import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  changesValueState = evt => {
    const nameFeadbeck = evt.target.id;

    this.setState(prev => {
      return { [nameFeadbeck]: prev[nameFeadbeck] + 1 };
    });
  };
  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, number) => {
      return acc + number;
    }, 0);
  }
  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    console.log(total);
    if (total > 0) {
      return Math.floor((this.state.good / total) * 100);
    }
  }

  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = `${this.countPositiveFeedbackPercentage()}%`;
    const { good, neutral, bad } = this.state;
    return (
      <div className="wraper">
        <h1> Pleas leave feadback</h1>
        <Section>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.changesValueState}
          />
        </Section>
        <Section>
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
}

export default App;
