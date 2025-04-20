const dammyApiResponse = {
  showLightAndDarkMode: false,
  showTicTacToeBoard: true,
  showRandomColorGenerator: true,
  showAccordian: false,
  showTreeView: true,
};

const featureFlagsDataServicesCall = () => {
  return new Promise((resolve, reject) => {
    if (dammyApiResponse) setTimeout(resolve(dammyApiResponse), 500);
    else reject("Some error occured! Please try again");
  });
};

export default featureFlagsDataServicesCall;
