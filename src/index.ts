import type { RandomReader } from "@oslojs/crypto/random";
import {
  generateRandomIntegerNumber,
  generateRandomString,
} from "@oslojs/crypto/random";

const random: RandomReader = {
  read(bytes: Uint8Array): void {
    crypto.getRandomValues(bytes);
  },
};

const alphabet =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";

export const generateCode = (length: number) => {
  generateRandomString(random, alphabet, length);
};

export const generateNumber = (max: number) => {
  generateRandomIntegerNumber(random, max);
};
