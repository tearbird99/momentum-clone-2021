const player = {
  name: "eugene",
  points: 10,
  fat: false,
};
console.log(player);
console.log(player.name);
console.log(player["name"]);

player.point = 100; //Okay
player = {}; //Error(const)

player.lastName = "seo";
player.points = player.points + 15;
