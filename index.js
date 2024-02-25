const getSleepHours = day => {
    if (day === 'monday') {
      return 5;
    } else if (day === 'tuesday') {
      return 6;
    } else if (day === 'wednesday') {
      return 6;
    } else if (day === 'thursday') {
      return 4;
    } else if (day === 'friday') {
      return 7;
    } else if (day === 'saturday') {
      return 8;
    } else if (day === 'sunday') {
      return 6;
    }
  };
  
  const getActualSleepHours = () => 5 + 6 + 6 + 4 + 7 + 8 + 6;
  
  const getIdealSleepHours = idealHours => idealHours * 7;
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(8);
  
    if (actualSleepHours === idealSleepHours) {
      console.log('You got the perfect amount of sleep.');
    } else if (actualSleepHours > idealSleepHours) {
      console.log('You got more sleep than needed.');
    } else {
      console.log('You should get some rest.');
      console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
    }
  };
  
  calculateSleepDebt();
  