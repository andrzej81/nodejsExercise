exports.FizzBuzzNumbers = (number) => {
  if (number % 15 == 0) return "FizzBuzz";
  else if (number % 3 == 0) return "Fizz";
  else if (number % 5 == 0) return "Buzz";
  else return number;
};

exports.myDateTime = () => {
  let ts = Date.now();

  let date_ob = new Date(ts);
  let date = date_ob.getDate();
  let month = date_ob.getMonth() + 1;
  let year = date_ob.getFullYear();
  return year + "-" + month + "-" + date;
};
