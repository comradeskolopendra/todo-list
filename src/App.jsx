import { useDispatch, useSelector } from "react-redux";

// import TaskBlock from "./components/TaskBlock/TaskBlock";
// import { initFirebase } from "./redux/actions/appActions";
// import { setData } from "./redux/reducer/appReducer";
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';

function App() {
  const dispatch = useDispatch();
  // const { data } = useSelector((store) => store.app);
  const { cash } = useSelector((store) => store.cash);
  const { customers } = useSelector((store) => store.customers);

  // const changeState = () => {
  //   dispatch(setData(123123));
  // };

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash });
  };

  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash });
  };

  const addCustomer = (name) => {
    const customer = { name, id: Date.now() };
    dispatch(addCustomerAction(customer));
  };

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id));
  };

  return (
    <>
      <div style={{ fontSize: "64px" }}>{cash}</div>
      <div style={{ display: "flex" }}>
        {/* <button onClick={changeState}>Изменить состояние</button> */}

        <button onClick={() => addCash(Number(prompt()))}>
          Пополнить счет
        </button>
        <button onClick={() => getCash(Number(prompt()))}>
          Снять со счета
        </button>

        <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
        {/* <button onClick={() => getCash(prompt())}>Удалить клиента</button> */}
      </div>
      {customers.length !== 0 ? (
        customers.map((customer) => (
          <div
            onClick={() => removeCustomer(customer)}
            style={{ fontSize: "64px" }}
            key={Math.round(Math.random() * 1000)}
          >
            {customer.name}
          </div>
        ))
      ) : (
        <div style={{ fontSize: "64px" }}>Нет пользователей</div>
      )}
    </>
  );
}

export default App;
