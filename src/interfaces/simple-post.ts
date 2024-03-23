import { type Author } from "./author";

export type SimplePost = {
  slug: string;
  title: string;
  date: string;
  emoji: string;
  author: Author;
  content: string;
};