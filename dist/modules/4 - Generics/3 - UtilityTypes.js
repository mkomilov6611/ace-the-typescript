"use strict";
function createCourseGoal(title, description, date) {
    const courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.date = date;
    return courseGoal;
}
const readOnlyNames = ["Max", "Anna"];
