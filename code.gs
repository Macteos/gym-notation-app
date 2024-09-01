function doGet() {
      return HtmlService.createHtmlOutputFromFile('Index')
        .setTitle('Gym Notation App');
    }

function getSheetForToday() {
  var today = new Date();
  var dayOfWeek = today.getDay();
  var sheetName;
  
  switch(dayOfWeek) {
    case 1: sheetName = 'Monday'; break;
    case 2: sheetName = 'Tuesday'; break;
    case 3: sheetName = 'Wednesday'; break;
    case 4: sheetName = 'Thursday'; break;
    case 5: sheetName = 'Friday'; break;
    default: sheetName = 'Monday'; // Default to Monday if it's weekend
  }
  
  return SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
}

function getExercisesForToday() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Exercises');
  var today = new Date();
  var dayOfWeek = today.getDay();
  var column;

  switch(dayOfWeek) {
    case 1: column = 1; break; // Monday
    case 2: column = 2; break; // Tuesday
    case 3: column = 3; break; // Wednesday
    case 4: column = 4; break; // Thursday
    case 5: column = 5; break; // Friday
    default: column = 1; // Default to Monday if it's weekend
  }

  var exercises = sheet.getRange(2, column, sheet.getLastRow() - 1, 1).getValues();
  var orderedExercises = exercises.map(function(exercise) { return exercise[0]; }).filter(String); // Remove empty strings
  
  Logger.log("Ordered exercises: " + JSON.stringify(orderedExercises));

  return orderedExercises;
}

function getLastWorkoutData(exerciseName) {
  var sheet = getSheetForToday();
  var data = sheet.getDataRange().getValues();

  Logger.log("Data retrieved: " + JSON.stringify(data));

  for (var i = data.length - 1; i >= 0; i--) {
    if (data[i][1] === exerciseName) { // Assuming exerciseName is in the 2nd column (B)
      Logger.log("Matching row found for exercise: " + exerciseName + " - Data: " + JSON.stringify(data[i]));
      return {
        weight: data[i][2], // Assuming weight is in the 3rd column (C)
        sets: data[i].slice(3, 7), // Assuming sets are in columns 4-7 (D-G)
        notes: data[i][7] || '' // Assuming notes are in the 8th column (H)
      };
    }
  }

  return null; // Return null if no previous data is found
}

function saveWorkoutData(workoutData) {
  var sheet = getSheetForToday();
  var lastRow = sheet.getLastRow();
  sheet.getRange(lastRow + 1, 1, workoutData.length, workoutData[0].length).setValues(workoutData);
}

