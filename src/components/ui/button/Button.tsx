import { Button, ButtonProps } from "@headlessui/react";
import clsx from "clsx";

type Props = {
  variant?: "default" | "link";
};
export default function BaseButton(props: ButtonProps & Props) {
  const { children, className, variant = "default", ...rest } = props;
  if (variant === "link") {
    return (
      <Button
        className={clsx(
          "rounded-lg py-2 text-light-foreground dark:text-dark-foreground hover:text-light-foreground/80 hover:dark:text-dark-foreground/80 active:text-light-foreground active:dark:text-dark-foreground transition-colors underline",
          className ?? "",
        )}
        {...rest}
      >
        {children}
      </Button>
    );
  }
  return (
    <Button
      className={clsx(
        "bg-light-primary dark:bg-dark-primary rounded-lg py-2 text-light-background dark:text-dark-background hover:bg-light-accent/80 hover:dark:bg-dark-accent/80 active:bg-light-primary active:dark:bg-dark-primary transition-colors",
        className ?? "",
      )}
      {...rest}
    >
      {children}
    </Button>
  );
}
