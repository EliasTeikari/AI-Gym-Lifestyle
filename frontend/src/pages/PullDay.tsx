import "../App.css";
import "./PullDay.css";
import exercisesJSON from "../data/exercises.json";
import type { ExercisesJson } from "../types/exercise";
import ExerciseCard from "../components/ExerciseCard";

const exercises = exercisesJSON as ExercisesJson;
const pullDay = Object.values(exercises.exerciseDays.pullDay);
const base = import.meta.env.VITE_IMAGE_BASE;

function Exercise() {
    return;
    <>
        <div className="exercisePage">
            {pullDay.map((ex) => (
                <ExerciseCard key={ex.imageKey} exercise={ex} baseUrl={base} />
            ))}
        </div>
    </>;
}

export default Exercise;
