# Gym Notation App

## Overview

The Gym Notation App is designed to help users track their workouts without the hassle of paid subscriptions or microtransactions. It allows you to record your weight, number of reps for each set, and any general notes about your workouts. The app aims to provide a simple, user-friendly interface for managing your fitness routine and storing your data in a Google Sheets document.

## Key Features

- **Exercise Tracking**: Record weight, number of reps, and general notes for each exercise on a daily basis.
- **Daily Updates**: Automatically displays the exercises for the current day based on the setup in your Google Sheets.
- **Google Sheets Integration**: Saves workout data directly to a Google Sheets document for easy access and analysis.

## Setup and Usage

1. **Create a Google Sheets Document**:
   - Create a separate sheet for each day of the week (e.g., Monday, Tuesday, etc.).
   - In each sheet, add the following headers: `Date`, `Exercises`, `Weight`, `Set 1`, `Set 2`, `Set 3`, `Set 4`, `Notes`.

2. **Set Up Exercises Sheet**:
   - Create a sheet named `Exercises`.
   - Add headers for each day of the week you have set up.
   - List the exercises you plan to do on each respective day.

3. **Deploy the App**:
   - Go to the toolbar in Google Sheets and select `Extensions` > `Apps Script`.
   - Copy the contents of the `code.gs` file from this repository into the Apps Script editor.
   - Create an `Index.html` file in the same editor and paste the HTML code from this repository.
   - Deploy the script by following the instructions in the Apps Script editor.

## Technologies Used

- **Google Apps Script**: For backend logic and integration with Google Sheets.
- **HTML**: For creating the app’s user interface.
- **JavaScript**: For handling interactions and dynamic updates.

## Contribution

This project was developed by Mateo Escorcia. Contributions are not currently accepted as it is a personal project.

## Contact

For any questions or feedback, you can reach out to Mateo Escorcia at macteos@gmail.com.
