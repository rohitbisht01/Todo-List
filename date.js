exports.getDate = function () {
  // Generates a day in a particular format specified
  const today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  const day = today.toLocaleDateString("en-US", options);

  return day;
};

// Get year

module.exports.getYear = getYear;

var getYear = function () {
  // Generates a year in a particular format specified
  const today = new Date();
  const year = d.getFullYear();
  const options = {
    year: "long",
  };

  year = today.toLocaleDateString("en-US", options);

  return year;
};
