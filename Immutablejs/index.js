const { Map, List, fromJS } = require('immutable');

// Map

const map1 = Map({ a: 1, b: {
  b1: 'b1',
  b2: 'b2'
}, c: 3 });

const map2 = map1.set('b', {
  b1: 'b1',
  b2: 'b3'
}); // Set to same value

const map3 = map1.set(['b', 'b1'], 'b222');


// List
const list1 = List([1,3,4]);

const list2 = list1.push(1);

// fromJS

const data = fromJS({
  k1: '1',
  k2: {
    k21: {
      ab: [1,2,3]
    }
  },
  '1': [1, 2, 3]
})

let c = data.get('c');
let k21 = data.getIn(['k2', 'k21', 'ab'])
c = c.push(22);
k21 = k21.clear();

// const log = map1.equals(map2); // true

// Merge
const dataMerge = fromJS({
  a: {
    b: {
      c: '2'
    },
    e: List([2,3,4]),
    d: 3
  }
})

dataMerge1 = dataMerge.mergeDeep({
  a: {
    e: [1,2,3]
  }
})

dataUpdateIn = dataMerge.updateIn(['a', 'b', 'ee', '333'], v => 4)

console.log(dataUpdateIn.getIn(['a', 'b', 'ee']));


const init = {
  a: {
    b: {
      c: '1'
    },
    d: 3
  }
}

function reducer(state = init, action) {
  switch(action.type) {
    case "UPDATE_C": {
      return state.updateIn(['a', 'b', 'c'], c => 333)
    }
    default: return state;
  }
}

