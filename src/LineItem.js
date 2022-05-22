import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { delTodo, modTodo } from "./actions/listAction"

const LineItem = ({ content, isCompleted, index}) => {
  const dispatch = useDispatch();

  return (
    <li className="item">
      <input
        type="checkbox"
        onChange={() => modTodo(dispatch)(index)}
        checked={isCompleted}
      />
      <label
        style={isCompleted ? { textDecoration: "line-through" } : null}
      >
        {content}
      </label>
      <FaTrashAlt
        onClick={() => delTodo(dispatch)(index)}
        role="button"
        tabIndex="0"
        aria-label={`Delete ${content}`}
      />
    </li>
  );
};

export default LineItem;
