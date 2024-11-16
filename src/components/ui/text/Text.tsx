import clsx from "clsx";
import { PropsWithChildren } from "react";

type Props = {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span" | "label";
  className?: string;
};
export default function Text(props: PropsWithChildren & Props) {
  if (props.variant === "h3") {
    return (
      <h3
        className={clsx(
          "text-2xl text-light-foreground dark:text-dark-foreground",
          props.className ?? "",
        )}
      >
        {props.children}
      </h3>
    );
  }
  return <span>{props.children}</span>;
}
