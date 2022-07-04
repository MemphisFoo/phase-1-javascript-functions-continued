function saturdayFun(activity = "roller-skate") {
  return`This Saturday, I want to ${activity}!`;
}

const mondayWork = function (task = "go to the office") {
  return `This Monday, I will ${task}.`
};

const wrapAdjective = function (style = "*") {
  return function (adjective = "a hard worker") {
    return `You are ${style}${adjective}${style}!`
  }
};
