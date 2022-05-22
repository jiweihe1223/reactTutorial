import LineItem from "./LineItem";
import { useSelector } from "react-redux";

const Content = () => {
  const searchText = useSelector((state) => state.search);
  const items = useSelector((state) => state.list).filter((item) =>
    item.content.includes(searchText)
  );

  return (
    <main>
      <ol>
        {items.map(({ content, isCompleted }, index) => (
          <LineItem
            key={`${content}-${index}`}
            content={content}
            isCompleted={isCompleted}
            index={index}
          />
        ))}
      </ol>
    </main>
  );
};

export default Content;
