export const groupByTimePeriod = (data, hourly, period) => {
    let result = {};
    hourly.forEach(key => {
        result[key] = [];
    });
    result['time'] = [];

    let sum = {};
    let count = {};
    hourly.forEach(key => {
        sum[key] = 0;
        count[key] = 0;
    });

    let currentDay = new Date(data.time[0]).getDate();

    for (let i = 0; i < data.time.length; i++) {
        let date = new Date(data.time[i]);
        if (date.getDate() !== currentDay) {
            result['time'].push(new Date(data.time[i-1]).toISOString().split('T')[0]);
            hourly.forEach(key => {
                if (sum[key] && count[key]) {
                    result[key].push(sum[key] / count[key]);
                }
                sum[key] = 0;
                count[key] = 0;
            });
            currentDay = date.getDate();
        }
        hourly.forEach(key => {
            if (data[key]) {
                sum[key] += data[key][i];
                count[key]++;
            }
        });
    }

    result['time'].push(new Date(data.time[data.time.length - 1]).toISOString().split('T')[0]);
    hourly.forEach(key => {
        if (sum[key] && count[key]) {
            result[key].push(sum[key] / count[key]);
        }
    });

    return result;
};
