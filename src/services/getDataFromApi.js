const getDataFromApi = () => {
  return fetch('https://opentdb.com/api.php?amount=10&category=25')
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((trivialArt) => {
        return trivialArt;
      });
    });
};
export default getDataFromApi;
