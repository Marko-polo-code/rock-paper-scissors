const getSleepHours = (day) => {
  if (day === 'monday') {
    return 8;
  } else if (day === 'tuesday') {
    return 8;
  } else if (day === 'wednesday') {
    return 8;
  } else if (day === 'thursday') {
    return 8;
  } else if (day === 'friday') {
    return 8;
  } else if (day === 'saturday') {
    return 8;
  } else if (day === 'sunday') {
    return 8;
  } else {
    return "wrong day"
  }
}

const getActualSleepHours = () =>
getSleepHours('monday')
+ getSleepHours('tuesday')
+ getSleepHours('wednesday')
+ getSleepHours('thursday')
+ getSleepHours('friday')
+ getSleepHours('saturday')
+ getSleepHours('sunday');

const getIdealSleepHours = (idealHours) => {
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(8);

  if (actualSleepHours === idealSleepHours) { console.log('The user got ' + (actualSleepHours) + ' hours, the perfect amount of sleep.');
  } else if (actualSleepHours > idealSleepHours) { console.log('The user got ' + (actualSleepHours - idealSleepHours) + 'hours more sleep than needed.');
  } else { console.log('The user got ' + (actualSleepHours - idealSleepHours) + ' hours less sleep, they should get some rest.');
  }
};

calculateSleepDebt();
