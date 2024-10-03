import React from 'react';
import { useDispatch } from 'react-redux'; // Import useDispatch

const SomeComponent = () => {
  const dispatch = useDispatch(); // Initialize dispatch

  const handleSomeAction = () => {
    dispatch({ type: 'YOUR_ACTION_TYPE', payload: yourData });
  };

  return (
    <button onClick={handleSomeAction}>Dispatch Action</button>
  );
};

export default SomeComponent;
