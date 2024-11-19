import { Button, ButtonProps } from "@headlessui/react";
import clsx from "clsx";
import loaderJSON from "@/assets/lottie/loader.json";
import Lottie from "lottie-react";

type Props = {
  variant?: "default" | "link";
  loading?: boolean;
};
export default function BaseButton(props: ButtonProps & Props) {
  const {
    children,
    loading = false,
    className,
    variant = "default",
    type = "button",
    ...rest
  } = props;
  if (variant === "link") {
    return (
      <Button
        className={clsx(
          "rounded-lg py-2 text-light-foreground dark:text-dark-foreground hover:text-light-foreground/80 hover:dark:text-dark-foreground/80 active:text-light-foreground active:dark:text-dark-foreground transition-colors underline",
          className ?? "",
        )}
        type={type}
        {...rest}
      >
        {children}
      </Button>
    );
  }
  return (
    <Button
      className={clsx(
        "bg-light-primary dark:bg-dark-primary rounded-lg py-2 text-light-background dark:text-dark-background hover:bg-light-accent/80 hover:dark:bg-dark-accent/80 active:bg-light-primary active:dark:bg-dark-primary transition-colors h-10",
        className ?? "",
        loading && "pointer-events-none cursor-default",
      )}
      type={type}
      {...rest}
    >
      {loading ? (
        <Lottie
          animationData={loaderJSON}
          className="h-5 fill-light-background dark:fill-dark-background"
        />
      ) : (
        <>{children}</>
      )}
    </Button>
  );
}
