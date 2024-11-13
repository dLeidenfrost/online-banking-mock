import { LoginTopBar } from "./_components/login-top-bar";

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-full container mx-auto">
      <header className="flex justify-between py-4">
        <div className="flex items-center space-x-2">
          <div className="bg-light-secondary dark:bg-dark-secondary rounded-full h-10 w-10" />
          <h4 className="text-light-foreground dark:text-dark-foreground">
            Infinite Money Bank
          </h4>
        </div>
        <LoginTopBar />
      </header>
      <main className="grow">{children}</main>
    </div>
  );
}
