import he from 'he';

const getDataFromApi = () => {
  return fetch('https://opentdb.com/api.php?amount=10&category=25')
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((trivialArt) => {
        return {
          question: he.decode(trivialArt.question),
          correct_answer: he.decode(trivialArt.correct_answer),
          incorrect_answers: trivialArt.incorrect_answers.map((answer) => he.decode(answer)),
        };
      });
    })
    .catch((error) => console.log(`an error has occurred: ${error}`));
};
export default getDataFromApi;
