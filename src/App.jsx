import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import TaskBlock from './components/TaskBlock/TaskBlock'
import { initFirebase } from './redux/actions/appActions';

function App() {
  const dispatch = useDispatch();
  const { data } = useSelector(store => store.appReducer);

  useEffect(() => {
    dispatch(initFirebase());
    console.log(data);
  }, [])

  return (
    <div>
      123123
    </div>
  )
}

export default App
