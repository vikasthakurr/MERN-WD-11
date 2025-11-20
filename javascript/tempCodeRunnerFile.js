let obj = {
  fname: "vikas",
  lname: "thakur",
  getName: function (city) {
    console.log(`my name is ${this.fname} ${this.lname}`);
  },
};

let obj1 = {
  fname: "akash",
  lname: "kumar",
};
// obj1.getName();
//call method
// obj.getName.call(obj1, "agra");
// obj.getName.apply(obj1,["adsfghsdfgjhj"]);
let res = obj.getName.bind(obj1);
console.log(res);
