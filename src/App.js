import Header from "./Header";
import AddItem from "./AddItem";
import Content from "./Content";
import SearchItem from "./SearchItem";
import { useEffect } from "react";
import { initTodo } from "./actions/listAction";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    initTodo(dispatch)();
  }, [dispatch]);

  return (
    <div className="App">
      <Header title="Grocery List" />
      <AddItem />
      <SearchItem />
      <Content />
    </div>
  );
}

export default App;
