import React from "react";
import { addVote } from "../reducers/anecdoteReducer";
import { useSelector, useDispatch } from "react-redux";

export default function Anecdotes() {
  const anecdotes = useSelector((state) => {
    if (state.filter === "ALL") return state.anecdotes;

    return state.anecdotes.filter((ancedote) =>
      ancedote.content.toLowerCase().includes(state.filter.toLowerCase())
    );
  });
  const dispatch = useDispatch();

  const vote = async (anecdote) => {
    dispatch(addVote(anecdote));
  };

  return (
    <>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </>
  );
}
