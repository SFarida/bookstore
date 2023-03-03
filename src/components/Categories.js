import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories.status);
  const checkBookStatus = () => {
    dispatch(checkStatus());
  };
  return (
    <div className="container">
      <p className="Current-Chapter">{status}</p>
      <button className="btn btn-primary" type="button" onClick={checkBookStatus}>Check status</button>
    </div>
  );
};

export default Categories;
