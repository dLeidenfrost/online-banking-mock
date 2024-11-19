import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { useTranslations } from "next-intl";
import { LoginSwitcherProps } from "../login-switcher/LoginSwitcher";
import { mockWait } from "@/services";
import { useState } from "react";

export default function UserForm(props: LoginSwitcherProps) {
  const t = useTranslations("Login");
  const [loading, setLoading] = useState(false);

  const onClick = async () => {
    setLoading(true);
    await mockWait(2000);
    props.setUser("my user");
  };

  return (
    <>
      <div className="min-h-[160px] flex items-end">
        <Text variant="h3" className="py-4">
          {t("title")}
        </Text>
      </div>
      <div className="min-h-[232px]">
        <div className="flex bg-light-primary/5 dark-bg-dark-secondary/10 text-light-foreground dark:text-dark-foreground w-[400px] p-4 rounded-lg">
          <form className="grow">
            <div className="flex flex-col space-y-2">
              <label>{t("username")}</label>
              <Input className="w-full" />
            </div>
            <div className="mt-4 flex flex-col">
              <Button loading={loading} onClick={onClick}>
                {t("actions.continue")}
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-2 py-4">
        <div className="bg-light-accent dark:bg-dark-accent w-2 h-2 rounded-full" />
        <div className="bg-light-accent/20 dark:bg-dark-accent/20 w-2 h-2 rounded-full" />
      </div>
    </>
  );
}
