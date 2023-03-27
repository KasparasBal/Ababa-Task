import { get } from "../shared/methods";
import { Year } from "./types";

export async function fetchYears(): Promise<Year[]> {
  const { data } = await get<Year[]>("years");
  return data;
}
