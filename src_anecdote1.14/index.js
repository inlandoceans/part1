import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ onClick, text }) => (
  <React.Fragment>
    <button onClick={onClick}>{text}</button>
  </React.Fragment>
);

const MostVotes = ({ anecdote, points }) => {
  let i = points.indexOf(Math.max(...points));
  return (
    <React.Fragment>
      <h1>Anecdote with most votes:</h1>
      <p>{anecdote[i]}</p>
      <p>This anecdote has {points[i]} votes</p>
    </React.Fragment>
  );
};

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [points, setVote] = useState(Array(anecdotes.length).fill(0));

  const addVote = () => {
    const newpoints = [...points];
    newpoints[selected] += 1;
    return setVote(newpoints);
  };
  const getRandom = () =>
    setSelected(Math.floor(Math.random() * anecdotes.length));

  return (
    <div>
      <div>{props.anecdotes[selected]} </div>
      <div>has {points[selected]} votes</div>
      <div>
        <Button onClick={addVote} text='Vote' />
        <Button onClick={getRandom} text='next anecdote' />
      </div>
      <MostVotes anecdote={anecdotes} points={points} />
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
