import { get } from "../shared/methods";
import { Genre } from "./types";

export async function fetchGenres(): Promise<Genre[]> {
  const { data } = await get<Genre[]>("genres");
  return data;
}
