"use client";

import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { ReactNode, useState } from "react";

export type SelectInputOption = {
  id: number;
  name: string;
  description?: string;
  icon?: ReactNode;
  buttonLabel?: string;
};

type Props = {
  options: SelectInputOption[];
  onChange?: (value: SelectInputOption) => void;
  defaultValue?: SelectInputOption;
};

export default function SelectInput({
  options,
  onChange,
  defaultValue,
}: Props) {
  const [selectedOption, setSelectedOption] = useState(
    defaultValue ?? options[0],
  );
  const isIcon = Boolean(selectedOption?.icon);

  return (
    <Listbox
      value={selectedOption}
      onChange={value => {
        setSelectedOption(value);
        onChange?.(value);
      }}
    >
      <ListboxButton
        className={`w-14 py-2 border text-light-foreground dark:text-dark-foreground rounded-lg ${isIcon ? "flex items-center justify-center" : ""}`}
      >
        {selectedOption?.icon ??
          selectedOption?.buttonLabel ??
          selectedOption.name}
      </ListboxButton>
      <ListboxOptions
        anchor="bottom"
        className="w-48 p-2 shadow-lg bg-light-secondary dark:bg-dark-secondary text-light-background dark:text-dark-background rounded-lg mt-2"
      >
        {options.map(option => (
          <ListboxOption
            key={option.id}
            value={option}
            className="data-[focus]:bg-light-primary data-[focus]:dark:bg-dark-primary data-[focus]:text-light-background data-[focus]:dark:text-dark-background text-light-foreground dark:text-dark-foreground rounded-lg p-4 cursor-default"
          >
            {isIcon ? (
              <div className="flex items-center space-x-2">
                {option.icon}
                <span>{option?.description ?? option.name}</span>
              </div>
            ) : (
              <>{option?.description ?? option.name}</>
            )}
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
}
