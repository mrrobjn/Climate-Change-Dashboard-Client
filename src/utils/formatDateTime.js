import moment from "moment";
export const formatDate = (input) => {
  var date = moment(input);
  return date.format("MMMM Do YYYY");
};
