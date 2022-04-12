/* 
    Utility Types
*/

// Example 1: Partial

interface CourseGoal {
  title: string;
  description: string;
  date: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  const courseGoal: Partial<CourseGoal> = {};

  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.date = date;

  return courseGoal as CourseGoal;
}

// Example 2: Readonly

const readOnlyNames: Readonly<string[]> = ["Max", "Anna"];

// readOnlyNames.push("Some other guy");  Not allowed to change the data structure
