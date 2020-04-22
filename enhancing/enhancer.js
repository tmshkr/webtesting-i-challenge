module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  const newItem = { ...item };
  if (newItem.enhancement < 20) {
    newItem.enhancement++;
  }
  return newItem;
}

function fail(item) {
  const newItem = { ...item };
  if (newItem.enhancement < 15) {
    newItem.enhancement -= 5;
  } else if (newItem.enhancement > 16) {
    newItem.enhancement -= 1;
  } else if (newItem.enhancement >= 15) {
    newItem.enhancement -= 10;
  }
  return newItem;
}

function repair(item) {
  const newItem = { ...item };
  newItem.durability = 100;
  return newItem;
}

function get(item) {
  const newItem = { ...item };
  if (newItem.enhancement > 0) {
    newItem.name = `[+${newItem.enhancement}] ${newItem.name}`;
  }
  return newItem;
}
