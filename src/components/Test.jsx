import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtoArray, count } from '../reducers/testreducer'

const Test = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.test);
  const { array, count } = state;

  useEffect(() => {
    const loadList = async () => {
      const data = await fetch('/api/test');
      const parsed = await data.json();
      await dispatch(addtoArray(parsed));
    }
    loadList();
  }, [dispatch]);

  const testArray = array.map(el => <li>{el}</li>);
  const onClick = () => {
    dispatch(count({}))
  }
  return (
    <>
      <h1>This is a test</h1>
      <h3>Count is: {count}</h3>
      <button onClick={e => {
        e.preventDefault();
        onClick(e);
      }} >Click Me</button>
      <ul>
        {testArray}
      </ul>
    </>

  )
}