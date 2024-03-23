import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <h1 className="pt-5 text-5xl font-bold text-center">
      {children}
    </h1>
  );
}
