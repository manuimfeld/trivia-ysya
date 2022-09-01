const answerTrue = (
  setCounter,
  points,
  setPoints,
  answerCount,
  setAnswerCount,
  setAreDisabled,
  e
) => {
  setCounter(0);
  setPoints((points += 1));
  setAnswerCount((answerCount += 1));
  setAreDisabled(true);
  e.target.className = "answer-correct";
};

const answerFalse = (
  setCounter,
  points,
  setPoints,
  answerCount,
  setAnswerCount,
  setAreDisabled,
  e
) => {
  setCounter(0);
  setPoints(points);
  setAnswerCount((answerCount += 1));
  setAreDisabled(true);
  e.target.className = "answer-incorrect";
};

export { answerTrue, answerFalse };
