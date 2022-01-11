const getDataFromApi = () => {
  return fetch('https://opentdb.com/api.php?amount=10&category=25')
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((trivialArt) => {
        return {
          question: trivialArt.question,
          correct_answer: trivialArt.correct_answer,
          incorrect_answer_1: trivialArt.incorrect_answers[0],
          incorrect_answer_2: trivialArt.incorrect_answers[1],
          incorrect_answer_3: trivialArt.incorrect_answers[2],
        };
      });
    });
};
export default getDataFromApi;
