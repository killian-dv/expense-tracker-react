import { setIncome } from "store/expense/expense-slice";
import s from "./style.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export function IncomeInput(props) {

  const income = useSelector(store => store.EXPENSE.income);
  const dispatch = useDispatch();
  function updateIncome(e) {
    const income = e.target.value;
    dispatch(setIncome(income))
  }

  return (
    <div className="row justify-content-center mb-2">
      <div className={`col-6 ${s.label}`}>Income</div>
      <div className="col-6">
        <input onChange={updateIncome} defaultValue={income} type="number" className="form-control" placeholder="Ex: 3000" />
      </div>
    </div>
  );
}
