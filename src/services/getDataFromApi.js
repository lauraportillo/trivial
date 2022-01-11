const getDataFromApi = () => {
  return fetch('https://opentdb.com/api.php?amount=10&category=25')
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((art) => {
        return {
          question: art.question,
          correct_answer: art.correct_answer,
          incorrect_answer_1: art.incorrect_answers[0],
          incorrect_answer_2: art.incorrect_answers[1],
          incorrect_answer_3: art.incorrect_answers[2],
        };
      });
    });
};
export default getDataFromApi;
