import moment from "moment";
export const getGreetInfo = () => {
  const isMorning = moment().isBetween(
    moment("4:00:00", "hh:mm:ss"),
    moment("12:00:00", "hh:mm:ss")
  );

  const isNoon = moment().isBetween(
    moment("12:00:00", "hh:mm:ss"),
    moment("16:00:00", "hh:mm:ss")
  );

  const isEvening = moment().isBetween(
    moment("16:00:00", "hh:mm:ss"),
    moment("20:00:00", "hh:mm:ss")
  );

  return (isMorning ? "Good Morning" : isNoon ? "Good Afternoon" : isEvening ? "Good Evening" : "Good Night")
}

