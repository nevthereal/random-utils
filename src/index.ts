import type { RandomReader } from "@oslojs/crypto/random";
import { generateRandomString } from "@oslojs/crypto/random";

const random: RandomReader = {
  read(bytes: Uint8Array): void {
    crypto.getRandomValues(bytes);
  },
};

const alphabet =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";

const numbers = "1234567890";

export const generateCode = (length: number) => {
  return generateRandomString(random, alphabet, length);
};

export const generateNumber = (length: number) => {
  return generateRandomString(random, numbers, length);
};
