const anecdotesAtStart = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

export const getId = () => (100000 * Math.random()).toFixed(0);

/*export const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  };
};*/

export const addVote = (data) => {
  return {
    type: "VOTE_ADD",
    data,
  };
};

export const createAnecdote = (data) => {
  return {
    type: "ANECDOTE_ADD",
    data,
  };
};

export const initializeAnecdotes = (anecdotes) => {
  return {
    type: "INIT_ANECDOTES",
    data: anecdotes,
  };
};

const sortAnecdotes = (state) => state.sort((a, b) => a.votes < b.votes);

//export const initialState = anecdotesAtStart.map(asObject);

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case "VOTE_ADD":
      let voteAddState = [...state];
      let anecdote = voteAddState.find(
        (anecdote) => anecdote.id === action.data.id
      );
      anecdote.votes += 1;
      return sortAnecdotes(voteAddState);
    case "ANECDOTE_ADD":
      let newAnecdote = { ...action.data };
      let anecdoteAddState = [...state];
      return sortAnecdotes(anecdoteAddState.concat(newAnecdote));
    case "INIT_ANECDOTES":
      return sortAnecdotes(action.data);
    default:
      return sortAnecdotes(state);
  }
};

export default anecdoteReducer;
