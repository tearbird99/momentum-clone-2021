function plus(a, b) {
  console.log(a + b);
}
plus(8, 60);

const player = {
  name: "eugene",
  sayHello: function (otherPersonsName) {
    console.log("hello " + otherPersonsName);
  },
};

console.log(player.name);
player.sayHello("eugene");
