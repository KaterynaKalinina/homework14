var calculations = {
  salasySum: function () {
    return this.reduce(function (acc, next) {
      return acc + next;
    }, 0);
  },
  logName: function () {
    this.forEach(function (user) {
      console.log(user.name);
    });
  },
  findUsersByIds: function (ids) {
    return this.filter(function (user) {
      return ids.find(function (id) {
        return user.id === id;
      })
    });
  }
};

var users = [
  {
    id: 1,
    name: "User 2",
    salary: 200
  },
  {
    id: 2,
    name: "User 3",
    salary: 200
  },
  {
    id: 3,
    name: "User 4",
    salary: 200
  }
];

// Task 1

const allSalaries = users.map((user) => {
  if (user.salary) return user.salary;
});

const sum = calculations.salasySum.call(allSalaries);
console.log(sum);

// Task 2

calculations.logName.call(users);

// Task 3

const usersById = calculations.findUsersByIds.call(users, [1,3]);
console.log(usersById);
