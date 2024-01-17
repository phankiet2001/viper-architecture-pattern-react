import { FC, HTMLAttributes, PropsWithChildren } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  title?: string;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  title,
  ...props
}) => {
  return <button {...props}>{children || title}</button>;
};
