import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { useTranslations } from "next-intl";
import { LoginSwitcherProps } from "../login-switcher/LoginSwitcher";

export default function CredentialsForm(props: LoginSwitcherProps) {
  const t = useTranslations("Login");
  return (
    <>
      <div className="flex flex-col items-center pb-6 space-y-2">
        <div className="w-12 h-12 rounded-full bg-dark-background/40 dark:bg-light-background/40" />
        <Text variant="h3">M*** U****</Text>
        <Button variant="link" onClick={() => props.setUser("")}>
          It's not me
        </Button>
      </div>
      <div className="flex bg-light-primary/5 dark-bg-dark-secondary/10 text-light-foreground dark:text-dark-foreground w-[400px] p-4 rounded-lg">
        <form className="grow flex flex-col space-y-3">
          <div className="flex flex-col space-y-2">
            <label>{t("password")}</label>
            <Input className="w-full" />
          </div>
          <div className="flex flex-col space-y-2">
            <label>{t("token")}</label>
            <Input className="w-full" />
          </div>
          <div className="flex flex-col pt-2">
            <Button>{t("actions.sign-in")}</Button>
          </div>
        </form>
      </div>
      <div className="flex items-center justify-center space-x-2 py-4">
        <div className="bg-light-accent/20 dark:bg-dark-accent/20 w-2 h-2 rounded-full" />
        <div className="bg-light-accent dark:bg-dark-accent w-2 h-2 rounded-full" />
      </div>
    </>
  );
}
