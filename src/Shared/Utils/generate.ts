import { nanoid } from "nanoid";

export function generateRandomId(length: number = 16): string {
  return nanoid(length);
}
