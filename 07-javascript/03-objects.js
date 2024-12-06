let result = {};

const insertItem = (key, value) => {
  // insertItem the property with key and value into result
  result[key] = value;
};

const deleteItem = (key) => {
  delete result[key];
};

const lookupItem = (key) => {
  // return the value from result that is associated with key
  if (result[key] === undefined) return "Item does not exist";
  else return result[key];
};

const printItems = () => {
  let array = Object.keys(result);
  let print_str = "";

  for (let i = 0; i < array.length; ++i) {
    print_str = print_str + array[i];

    if (i < array.length - 1) {
      print_str = print_str + ", ";
    }
  }
  // return a string of the concatenated key in result, separated by commas
  return print_str;
};

insertItem("hello", "world");
insertItem("lorem", "ipsum");
insertItem("sit", "amet");
console.log(printItems());
// expected: 'hello, lorem, sit' (order may be different)
console.log(lookupItem("lorem"));
// expected: 'ipsum'

deleteItem("lorem");
console.log(printItems());
// expected: 'hello, sit' (order may be different)
console.log(lookupItem("lorem"));
// expected: 'Item does not exist'
