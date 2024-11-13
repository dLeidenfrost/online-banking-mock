import { Button, ButtonProps } from "@headlessui/react";

type Props = {
  buttonProps?: ButtonProps;
};
export default function BaseButton(props: Props & React.PropsWithChildren) {
  const { children, buttonProps } = props;
  return (
    <Button
      className="bg-light-primary dark:bg-dark-primary rounded-lg py-2 text-light-background dark:text-dark-background hover:bg-light-accent/80 hover:dark:bg-dark-accent/80 active:bg-light-primary active:dark:bg-dark-primary transition-colors"
      {...buttonProps}
    >
      {children}
    </Button>
  );
}
