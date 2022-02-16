class MySet {
  // throw an error if called with anything other than string, array or nothing
  // if an iterable is provided only its unique values should be in data
  // strings and arrays will need to be broken down by their elements/characters
  constructor(iterable) {
    if(!(iterable===undefined || Array.isArray(iterable) === true || typeof iterable === "string")){
      return error
    }
    this.data={}
    if(iterable){
      for(let i of iterable){
        if(this.data[i]===undefined){
          this.data[i] = true
        }
      }
    }
  }

  // return number of elements in MySet
  size() {
    return Object.keys(this.data).length
  }

  // add an item to MySet as is
  // don't worry about arrays here!
  // return the MySet instance
  add(item) {
    this.data[item] = true
    return this
  }

  // delete an item from MySet
  // don't worry about arrays here!
  // return true if successful, otherwise false
  delete(item) {
    if(this.data[item]===true){
      delete this.data[item]
      return true
    }else{
      return false
    }
  }

  // return true if in MySet, otherwise false
  // don't worry about arrays here!
  has(item) {
    if(this.data[item] === true){
      return true
    }else{
      return false
    }
  }

  // return data as an array
  // don't worry about arrays here!
  entries() {
    let entryArr = []
    for (let key in this.data){
      entryArr.push(key)
    }
    return entryArr
  }
}

if (require.main === module) {
  // add your own tests in here
  let testSet = new MySet("heythere")

  console.log("Expecting: {'h', 'e', 'y', 't', 'r'}");
  console.log("=>", testSet);

  console.log("Expecting: 5");
  console.log("=>", testSet.size());

  console.log("Expecting: {'h', 'e', 'y', 't', 'r', 'heythere'}");
  console.log("=>", testSet.add("heythere"));

  console.log("Expecting: true");
  console.log("=>", testSet.delete('r'));

  console.log("Expecting: true");
  console.log("=>", testSet.has('y'));

  console.log("Expecting: ['h', 'e', 'y', 't', 'heythere']");
  console.log("=>", testSet.entries());
}

module.exports = MySet;

