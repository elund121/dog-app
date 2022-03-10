import axios from "axios";

const URI = "https://dog.ceo/api";

/**
 * Represents a standard api response
 */
type ApiResponse<T> = {
  message: T;
  status: "success" | "error";
};

/**
 * Gets a random image of a dog
 * @param breed the breed of dog
 * @returns the api payload
 */
async function getRandomImage(breed?: string) {
  const url =
    breed !== undefined
      ? `${URI}/breed/${breed}/images/random`
      : `${URI}/breeds/image/random`;

  const { data } = await axios.get<ApiResponse<string>>(url);
  return data;
}

/**
 * Gets a list of random dog breeds
 * @param count the number of breeds to fetch
 * @returns the api payload
 */
async function getRandomBreeds(count: number = 10) {
  const { data } = await axios.get<ApiResponse<string[]>>(
    `${URI}/breeds/list/random/${count}`
  );
  return data;
}

export const dogAPI = { getRandomImage, getRandomBreeds };
