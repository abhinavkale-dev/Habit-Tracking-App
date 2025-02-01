import useHabitStore from "@/store/store";
import { Card } from "@/components/ui/card";

const HabitStats = () => {
  const { habits } = useHabitStore();
  const totalHabits = habits.length;
  const completedHabits = habits.filter((habit) => habit.completedDates.length > 0).length;

  return (
    <Card className="p-4 w-full shadow-md flex flex-col items-center">
      <h2 className="text-xl font-bold">Habit Stats</h2>
      <p className="text-gray-700">Total Habits: {totalHabits}</p>
      <p className="text-green-600">Completed Habits: {completedHabits}</p>
    </Card>
  );
};

export default HabitStats;