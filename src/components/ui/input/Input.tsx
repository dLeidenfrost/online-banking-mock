import { Input, InputProps } from "@headlessui/react";

export default function BaseInput(props: InputProps) {
  const { className, ...rest } = props;
  return (
    <div className="bg-light-secondary dark:bg-dark-secondary rounded-lg border dark:border-dark-foreground/10 focus-within:dark:border-dark-foreground/40 h-8 transition-colors">
      <Input
        className={`appearance-none bg-transparent h-full focus-within:outline-none px-2 ${className}`}
        {...rest}
      />
    </div>
  );
}
