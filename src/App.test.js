import { render, screen } from "@testing-library/react";
import App from "./App";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

describe("correct", () => {
  const iniState = [];
  const mockStore = configureStore();
  let store;

  it("Button is correct", () => {
    store = mockStore(iniState);
    const getByPlaceholderText = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(queryByLabelText("Add Item")).toBeInTheDocument();
  });
});
