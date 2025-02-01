import { useState } from "react";
import useHabitStore from "@/store/store";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Trash2 } from "lucide-react";

const HabitList = () => {
  const { habits, removeHabit, toggleHabit } = useHabitStore();
  const [selectedDate, _] = useState(new Date().toISOString().split("T")[0]);

  if (habits.length === 0) {
    return (
      <div className="text-center py-6 text-muted-foreground">
        No habits added yet. Start tracking now!
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {habits.map((habit) => (
        <Card key={habit.id} className="p-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-medium leading-none">{habit.name}</h3>
              <p className="text-sm text-muted-foreground">
                Frequency: {habit.frequency}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant={habit.completedDates.includes(selectedDate) ? "default" : "outline"}
                size="sm"
                onClick={() => toggleHabit(habit.id, selectedDate)}
              >
                <Check className={habit.completedDates.includes(selectedDate) ? "opacity-100" : "opacity-0"} />
                {habit.completedDates.includes(selectedDate) ? "Done" : "Mark Done"}
              </Button>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => removeHabit(habit.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default HabitList;