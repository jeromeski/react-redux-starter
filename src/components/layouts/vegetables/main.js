import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { testMessage } from '../../../redux/actions/test';

export default function Vegetables() {
  const test = useSelector((state) => state.test);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(testMessage());
  }, []);
  console.log(test);
  return (
    <div>
      <h1>{test.message}</h1>
    </div>
  );
}
