import React, { useState } from "react";
import ReactDOM from "react-dom";

const Display = () => <h1>give feedback</h1>;

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Statistic = ({ text, value }) => (
  <tr>
    <td>
      {text} {value}
    </td>
  </tr>
);

const Statistics = ({ good, neutral, bad }) => {
  let total = good + neutral + bad;
  let average = (good - bad) / total;
  let positive = (good / total) * 100;

  if (isNaN(average)) {
    return (
      <React.Fragment>
        <h1>statistics</h1>
        <p>No feedback given </p>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <table>
        <tbody>
          <Statistic text='good' value={good} />
          <Statistic text='neutral' value={neutral} />
          <Statistic text='bad' value={bad} />
          <tr>
            <td>average: </td>
            <td>{average}</td>
          </tr>
          <tr>
            <td>positive: </td>
            <td>{positive}%</td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
};
const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodClick = () => {
    setGood(good + 1);
  };
  const neutralClick = () => {
    setNeutral(neutral + 1);
  };
  const badClick = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <Display />
      <Button onClick={goodClick} text='good' />
      <Button onClick={neutralClick} text='neutral' />
      <Button onClick={badClick} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
