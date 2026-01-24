import { useState } from "react";
import exercisesJSON from "../data/exercises.json";
import ExerciseCard from "../components/ExerciseCard";
import type { ExercisesJson } from "../types/exercise";
import "./ExerciseDayPage.css";
import "../App.css";

const exercises = exercisesJSON as ExercisesJson;
const base = import.meta.env.VITE_IMAGE_BASE;

type DayId = keyof ExercisesJson["exerciseDays"];

export default function ExerciseDayPage({ dayId }: { dayId: DayId }) {
    const dayExercises = Object.values(exercises.exerciseDays[dayId]);

    const [setProgress, setSetProgress] = useState<Record<string, number>>({});

    const handleAdvance = (id: string, totalSets: number) => {
        setSetProgress((prev) => {
            const currentSet = prev[id] ?? 1;
            if (currentSet > totalSets) {
                return prev;
            }
            return { ...prev, [id]: currentSet + 1 };
        });
    };
    return (
        <div className="exercisePage">
            {dayExercises.map((ex) => (
                <ExerciseCard
                    key={ex.imageKey}
                    exercise={ex}
                    baseUrl={base}
                    currentSet={setProgress[ex.imageKey] ?? 1}
                    onAdvance={() => handleAdvance(ex.imageKey, ex.sets)}
                />
            ))}
        </div>
    );
}
