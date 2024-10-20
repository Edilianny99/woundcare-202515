import { Manager } from "socket.io-client";
import { BASE_URL } from "./utils/variables";

export const manager = new Manager(`${BASE_URL}`, {
  reconnectionDelayMax: 10000,
});
