import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { theme, setTheme, systemTheme } = useTheme();

  const handleChangeTheme = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    setTheme(() => (currentTheme === "light" ? "dark" : "light"));
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 bg-background ${inter.className}`}
    >
      <Button variant="default" onClick={handleChangeTheme}>
        Toggle mode
      </Button>
    </main>
  );
}
