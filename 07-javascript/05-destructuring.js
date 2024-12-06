const destructureItems = (input) => {
  // destructure the name and parents of the character and format the output as shown
  let name = input.first + " " + input.last;
  let daughter_stat = "  daughter of";
  let parent_set =
    "  " +
    input.allegiance.parents.mother +
    " and " +
    input.allegiance.parents.father;

  /*

  let result = { name, daughter_stat, parent_set };
  console.log(result.name);
  console.log(result.daughter_stat);
  console.log(result.parent_set);
  */

  return name + "\n" + daughter_stat + "\n" + parent_set + "\n";
};

const sansa = {
  first: "Sansa",
  last: "Stark",
  allegiance: {
    house: "Winterfell",
    parents: {
      mother: "Catelyn Tully",
      father: "Eddard Stark",
    },
    animals: {
      direwolf: "Lady",
    },
  },
};

const daenerys = {
  first: "Daenerys",
  last: "Targaryen",
  allegiance: {
    house: "Targaryen",
    parents: {
      mother: "Queen Rhaella",
      father: "King Aerys II Targaryen",
    },
    animals: {
      dragons: "Drogon",
    },
  },
};

console.log(destructureItems(sansa));
// Sansa Stark
//   daughter of
//   Catelyn Tully and Eddard Stark
console.log(destructureItems(daenerys));
// Daenerys Targaryen
//   daughter of
//   Queen Rhaella and King Aerys II Targaryen
