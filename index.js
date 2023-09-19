function createEmployeeRecord(array) {
  return {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: []
  };
}

function createEmployeeRecords(array) {
  let result = [];
  for (let arr of array) result.push(createEmployeeRecord(arr));
  return result;
}

function createTimeInEvent(employeeRecord, dateStamp) {
  const dates = dateStamp.split(" ")
  employeeRecord.timeInEvents.push({
    type: "TimeIn",
    hour: dates[1],
    date: dates[0]
  })
}

function createTimeOutEvent(employeeRecord, dateStamp) {
  const dates = dateStamp.split(" ")
  employeeRecord.timeOutEvents.push({
    type: "TimeOut",
    hour: dates[1],
    date: dates[0]
  })
}

function hoursWorkedOnDate(employeeRecord, date) {
  const index = employeeRecord.timeOutEvents.indexOf(employeeRecord.timeOutEvents.find(obj => obj.date === date));
  const hoursWorked = +employeeRecord.timeOutEvents[index].hour - +employeeRecord.timeInEvents[index].hour;
  return hoursWorked;
}

function wagesEarnedOnDate(employeeRecord, date) {

}

function allWagesFor(employeeRecord) {

}

function calculatePayroll(array) {

}