export function processNutritionData(objectsArray) {
  // Create an array of labels by getting the keys of the first object and removing the 'name' property
  const requiredData = [
    "carbohydrates_total_g",
    "fat_saturated_g",
    "fat_total_g",
    "fiber_g",
    "protein_g",
    "sugar_g",
  ];

  let labelArray = [
    "Carbohydrates",
    "Saturated Fat",
    "Total Fat",
    "Fiber",
    "Protein",
    "Sugar",
  ];

  // Create an object to store the sums of each property
  let sums = {
    "carbohydrates_total_g": 0,
    "fat_saturated_g": 0,
    "fat_total_g": 0,
    "fiber_g": 0,
    "protein_g": 0,
    "sugar_g": 0,
  };

  let totalCalories = 0;

  if(objectsArray.length < 1) {
    return [labelArray, [], 0];
  }

  // Iterate through each object in the array and add its property values to the sums object
  objectsArray.forEach((object) => {
    Object.keys(object).forEach((key) => {
      if (key === 'calories') {
        totalCalories += object[key];
      } else if (requiredData.includes(key)) {
        sums[key] += object[key];
      }
    });
  });

  // Create an array of values by iterating through the sums object and pushing each value to the array
  const dataArray = [];
  Object.keys(sums).forEach((key) => {
    dataArray.push(sums[key]);
  });

  return [labelArray, dataArray, totalCalories.toFixed(2)];
}
