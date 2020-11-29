const getDates = (data) => {
  const dateArray = [];
  data.forEach((expense) => {
    if (!dateArray.includes(expense.paymentDate)) {
      dateArray.push(expense.paymentDate)
    };
  });
  return(dateArray)
};

const dates = getDates(data);

const timesDateAppears = (array, data) => {
  const dateArray = [];
  array.forEach((paymentDate) => {
    dateArray.push(data.filter(expense => expense.paymentDate === paymentDate))
  });
  return dateArray
};

const arrayOfAppearances = timesDateAppears(dates, data);

const summariseSpendingByDays = (array) => {
  const finalArray = [];
  array.forEach((innerArray) => {
    let totalValue = 0
    innerArray.forEach((item) => {
      totalValue += item.amount
    })
      finalArray.push(item = {
        totalNumber: innerArray.length,
        totalValue: totalValue,
        averageValue: (totalValue / innerArray.length)
      });
    });
  return(finalArray)
};

const objects = summariseSpendingByDays(arrayOfAppearances);

const formatDates = (dates) => {
  const formattedDates = [];
  dates.forEach((date) => {
    formattedDates.push(`${date.slice(8, 10)}/${date.slice(5, 7)}/${date.slice(0, 4)}`)
  });
  return formattedDates
};

const formattedDatesArray = formatDates(dates);


let lowestCurrentMonth = 12
let lowestCurrentDay = 30

const getEarliestDate = (dates) => {
  dates.forEach((date) => {
    if (date.slice(5, 7) < lowestCurrentMonth) {
      lowestCurrentMonth = date.slice(5, 7)
    }
    if ((date.slice(5, 7) === lowestCurrentMonth) && (date.slice(8, 10) < lowestCurrentDay))
      lowestCurrentDay = date.slice(8, 10)
  })
}

// this function is optional (add values into endDate in 'insertZeroValues') so that information will end
// with most recent transaction

// let highestCurrentMonth = 1
// let highestCurrentDay = 1

// const getLatestDay = (dates) => {
//   dates.forEach((date) => {
//     if (date.slice(5, 7) > highestCurrentMonth) {
//       highestCurrentMonth = date.slice(5, 7)
//     }
//     if ((date.slice(5, 7) === highestCurrentMonth) && (date.slice(8, 10) < lowestCurrentDay))
//       highestCurrentDay = date.slice(8, 10)
//   })
// }

const startMonth = getEarliestDate(dates)


const insertZeroValueDates = () => {
  let startDate = new Date(`${lowestCurrentMonth}/${lowestCurrentDay}/2020`)
  let endDate = new Date()
  let completeDatesArray = []

  let loop = new Date(startDate);
    while (loop <= endDate) {
  let newDate = loop.setDate(loop.getDate() + 1);
    loop = new Date(newDate);

  let dateToPush = (`${new Date(newDate)}`)

   completeDatesArray.push(dateToPush.slice(4, 15));
  }
  return completeDatesArray
}


const completeDatesArray = insertZeroValueDates()

const reFormatDates = (dates) => {
  let existingDates = []
  dates.forEach((date) => {
    let dateToPush = `${new Date(date)}`
    existingDates.push(dateToPush.slice(4, 15))
  })
  return existingDates
}

const shortDatesList = reFormatDates(dates)


const fillInData = (valueDatesArray, emptyValueArray) => {
  const finalDataArray = []

  emptyValueArray.forEach((item) => {
    let index = valueDatesArray.indexOf(item)
    if (index > 0) {
      finalDataArray.push(`{ "${item}": { "totalNumber": ${objects[index].totalNumber}, "totalValue": ${objects[index].totalValue}, "averageValue": ${objects[index].averageValue} }`)
    } else {
      finalDataArray.push(`{ "${item}": { "totalNumber": 0, "totalValue": 0, "averageValue": 0 }`)
    }
  })
console.log(finalDataArray)
return finalDataArray
}

module.exports = {
  getDates: getDates,
  timesDateAppears: timesDateAppears,
  summariseSpendingByDays: summariseSpendingByDays,
  formatDates: formatDates,
  nameDates: nameDates
  getEarliestDate: getEarliestDate,
  insertZeroValueDates: insertZeroValueDates,
  reFormatDates: reFormatDates,
  fillInData: fillInData
}
