export const groupByTimePeriod = (data, hourly, period) => {
  let result = {};
  hourly.forEach((key) => {
    result[key] = [];
  });
  result["time"] = [];

  let sum = {};
  let count = {};
  hourly.forEach((key) => {
    sum[key] = 0;
    count[key] = 0;
  });

  let currentDay = new Date(data.time[0]).getDate();

  for (let i = 0; i < data.time.length; i++) {
    let date = new Date(data.time[i]);
    if (date.getDate() !== currentDay) {
      result["time"].push(
        new Date(data.time[i - 1]).toISOString().split("T")[0]
      );
      hourly.forEach((key) => {
        if (sum[key] && count[key]) {
          result[key].push(sum[key] / count[key]);
        }
        sum[key] = 0;
        count[key] = 0;
      });
      currentDay = date.getDate();
    }
    hourly.forEach((key) => {
      if (data[key]) {
        sum[key] += data[key][i];
        count[key]++;
      }
    });
  }

  result["time"].push(
    new Date(data.time[data.time.length - 1]).toISOString().split("T")[0]
  );
  hourly.forEach((key) => {
    if (sum[key] && count[key]) {
      result[key].push(sum[key] / count[key]);
    }
  });

  return result;
};

export const convertToDate = (datetime) => {
  let dates = datetime.map((isoDateTime) => {
    let date = new Date(isoDateTime); // Convert to Date object
    let year = date.getFullYear();
    let month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based in JavaScript
    let day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`; // Return the date string
  });
  return dates;
};
export const convertDailyMatchHourLy = (arr, time) => {
  if (!arr || arr.length === 0) {
      console.error('Array is undefined or empty');
      return;
  }

  let result = [];
  let j = 0; // Index for arr
  for (let i = 0; i < time.length; i++) {
      if (i === 0 || new Date(time[i]).getDate() !== new Date(time[i-1]).getDate()) {
          // If it's the first element or the date has changed, use the next value from arr
          result.push(arr[j]);
          j++;
      } else {
          // If it's the same date, use the same value as before
          result.push(result[i-1]);
      }
  }
  return result;
}




