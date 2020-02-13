import React, { 
  useState, 
  useCallback, 
  useEffect, 
  useReducer, 
  useMemo,
  useRef
} from 'react';

const getInitState = (num) => {
  return num;
}

function ComponentDemo(props) {
  useEffect(() => {
    console.log('ComponentDemo updated');
  }, [props.onClickCount2])

  return (
    <div>
      DEMO
    </div>
  )
}

function useCount(count) {
  const double = useMemo(() => ({
    current: count * 2
  }), [count]);

  return double
}

function TestUseMemo(props) {
  const count1chia2 = useCount(props.count);

  useEffect(() => {
    console.log('count1chia2 da thay doi', count1chia2.current);
  }, [count1chia2])

  return (
    <div>
      {count1chia2.current}
    </div>
  )
}

const amounFunctions = new Set();

export default function Hook(props) {
  const [count, setCount] = useState(() => getInitState(1));
  const [count2, setCount2] = useState(2)
  const prevCount = useRef(count);


  const handleCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const handleCount2 = useCallback(() => {
    setCount2(count2 + 1);
    handleCount();
  }, [count2]);

  useEffect(() => {
    prevCount.current = count;
  }, [count])

  const prevCountCurrent = prevCount.current;

  useEffect(() => {
    console.log('Gia tri cu', prevCountCurrent);
    console.log('Gia tri moi', count);
  }, [count])

  // amounFunctions.add(handleCount);
  amounFunctions.add(prevCount);

  console.log('render');

  return (
    <div>
      Count 1 ---> {count}
      <br/>
      Count 2 ---> {count2}
      <br/>
      Amount functions created: {amounFunctions.size}

      <br/>
      <button onClick={handleCount}>Count 1</button>
      <button onClick={handleCount2}>Count 2</button>

      <ComponentDemo
        onClickCount2={handleCount2}
      />

      <TestUseMemo
        count={count}
        count2={count2}
        count3={count + count2}
      />
    </div>
  )
}