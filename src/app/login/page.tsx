import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";

export default function loginPage() {
  const t = useTranslations("HomePage");
  return (
    <section id="login" className="flex flex-col items-center h-full pt-48">
      <h3 className="text-2xl py-4 text-light-foreground dark:text-dark-foreground">
        {t("title")}
      </h3>
      <div className="flex bg-light-primary/5 dark-bg-dark-secondary/10 text-light-foreground dark:text-dark-foreground w-[400px] p-4 rounded-lg">
        <form className="grow">
          <h4 className="text-lg py-4 font-medium">Sign in to your account</h4>
          <div className="flex flex-col space-y-2">
            <label>User</label>
            <Input className="w-full" />
          </div>
          <div className="mt-4 flex flex-col">
            <Button>Continue</Button>
          </div>
        </form>
      </div>
    </section>
  );
}
