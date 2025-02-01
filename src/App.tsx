import React, { useEffect } from "react";
import { Card } from "@/components/ui/card";
import AddHabitForm from "@/components/habit-form";
import HabitList from "@/components/habit-list";
import HabitStats from "@/components/habit-stats";
import useHabitStore from "@/store/store";
import { ThemeProvider } from "@/components/theme-provider";

const App: React.FC = () => {
  const { fetchHabits } = useHabitStore();

  useEffect(() => {
    fetchHabits();
  }, []);

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background p-8 flex items-center justify-center">
        <Card className="w-full max-w-2xl p-6 bg-card text-card-foreground">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-8 text-center">
            Habit Tracker
          </h1>
          <AddHabitForm />
          <HabitList />
          <HabitStats />
        </Card>
      </div>
    </ThemeProvider>
  );
};

export default App;