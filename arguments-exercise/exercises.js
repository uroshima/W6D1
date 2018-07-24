function sum(...args) {
  let count = 0;
  args.forEach((el) =>
      count += el
  );
  return count;
}

// sum(1,2,3,4,5,6) === 21;

Object.prototype.myBind = function(context, ...args) {
  return (...newArgs) => {
    let combined = args.concat(newArgs);
    this.call(context, ...combined);
  };
};

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }
//
//   says(sound, person) {
//     `${this.name} says ${sound} to ${person}!`);
//     return true;
//   }
// }

// const markov = new Cat("Markov");
// const breakfast = new Cat("Breakfast");
//

// markov.says.myBind(breakfast, "meow", "Kush")();
// markov.says.myBind(breakfast)("meow", "a tree");
// markov.says.myBind(breakfast, "meow")("Markov");
// const notMarkovSays = markov.says.myBind(breakfast);
// notMarkovSays("meow", "me");

function curriedSum(numOfArgs) {
  const numbers = [];
  let partialSum = (num) => {
    numbers.push(num);
    if (numbers.length === numOfArgs) {
      return sum(...numbers);
    } else {
      return partialSum;
    }
    // debugger
  };
  return partialSum;
}

// const sum4 = curriedSum(4);
// console.log(sum4(5)(30)(20)(5));

Function.prototype.curry = function(numArgs){
  let args = [];
  let partial = (...newArgs) => {
    console.log(this);
    args = args.concat(newArgs);
    if (args.length === numArgs) {
      return this(...args);
      // return this.apply(null, args);
    } else {
      return partial;
    }
  };
  return partial;
};

// console.log(sum.curry(4)(1,3));
console.log(sum.curry(4)(1,3,3,1));
// console.log(sum.curry(4)(1,3)(3,1));
