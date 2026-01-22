import exercisesJSON from "../data/exercises.json";
import ExerciseCard from "../components/ExerciseCard";
import type { ExercisesJson } from "../types/exercise";
import "./ExerciseDayPage.css";

const exercises = exercisesJSON as ExercisesJson;
const base = import.meta.env.VITE_IMAGE_BASE;

type DayId = keyof ExercisesJson["exerciseDays"];

export default function ExerciseDayPage({ dayId }: { dayId: DayId }) {
    const dayExercises = Object.values(exercises.exerciseDays[dayId]);
    return (
        <div className="exercisePage">
            {dayExercises.map((ex) => (
                <ExerciseCard key={ex.imageKey} exercise={ex} baseUrl={base} />
            ))}
        </div>
    );
}
