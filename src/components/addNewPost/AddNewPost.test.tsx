import React from "react";
import { render, fireEvent, act } from "@testing-library/react-native"; // Import act from @testing-library/react-native
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { AddNewPost } from "./AddNewPost";
jest.useFakeTimers();
const middlewares = [thunk]; // Додайте Redux Thunk до мок-магазину
const mockStore = configureMockStore(middlewares);

describe("AddNewPost Component", () => {
  it("handles input change correctly", () => {
    const store = mockStore({});
    const { getByLabelText } = render(
      <Provider store={store}>
        <AddNewPost />
      </Provider>
    );

    const titleInput = getByLabelText("Title");
    const bodyInput = getByLabelText("Body");

    // Simulate changing the text in the input fields
    fireEvent.changeText(titleInput, "Test Title");
    fireEvent.changeText(bodyInput, "Test Body");

    // Assertions go here
    expect(titleInput.props.value).toBe("Test Title");
    expect(bodyInput.props.value).toBe("Test Body");
  });

  it("dispatches createPost action on button click", async () => {
    const store = mockStore({});
    const { getByText } = render(
      <Provider store={store}>
        <AddNewPost />
      </Provider>
    );

    const createButton = getByText("Create new post");

    await act(async () => {
      await fireEvent.press(createButton); // Симулюйте натискання кнопки у асинхронній функції
    });

    // Очікуємо, що функція createPost буде викликана
    const actions = store.getActions();
    expect(actions).toMatchObject([
      {
        type: "posts/createPost/pending",
        payload: undefined,
      },
    ]);
  });
});
