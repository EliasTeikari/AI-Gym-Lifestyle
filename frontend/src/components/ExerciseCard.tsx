import "./ExerciseCard.css";
import type { Exercise } from "../types/exercise";
import ExerciseCompletion from "./ExerciseCompletion";

type Props = {
    exercise: Exercise;
    baseUrl: string;
    currentSet: number;
    onAdvance: () => void;
};

export default function ExerciseCard({
    exercise,
    baseUrl,
    currentSet,
    onAdvance,
}: Props) {
    return (
        <div className="exerciseCard">
            <img
                src={baseUrl + exercise.imageKey}
                alt={exercise.name}
                className="imageExercise"
            />
            <div className="glass-overlay title-overlay">
                <h2>{exercise.name}</h2>
            </div>
            <div className="glass-overlay info-overlay">
                <p className="reps">Reps: {exercise.reps}</p>
                <ExerciseCompletion
                    currentSet={currentSet}
                    totalSets={exercise.sets}
                    onAdvance={onAdvance}
                />
            </div>
        </div>
    );
}
