import React from "react";
import {
  render,
  screen,
  cleanup,
  waitFor,
  fireEvent,
} from "@testing-library/react";
import App from "./App";
import { dogAPI } from "./api/dogAPI";
import { act } from "react-dom/test-utils";

afterEach(cleanup);

const dogAPISpy = jest.spyOn(dogAPI, "getRandomImage");

beforeEach(() => {
  dogAPISpy.mockImplementation(() =>
    Promise.resolve({
      message: "https://images.dog.ceo/breeds/briard/n02105251_8194.jpg",
      status: "success",
    })
  );
});

afterEach(() => {
  dogAPISpy.mockClear();
});

it("fetches a random image and displays it", async () => {
  render(<App />);
  await waitFor(() => expect(dogAPISpy).toHaveBeenCalledTimes(1));
});

it("refreshes the random image when refresh button is clicked", async () => {
  render(<App />);

  await act(async () => {
    fireEvent.click(screen.getByText("Refresh"));
  });
  expect(
    screen.getByText("Last refreshed", { exact: false })
  ).toBeInTheDocument();
});
