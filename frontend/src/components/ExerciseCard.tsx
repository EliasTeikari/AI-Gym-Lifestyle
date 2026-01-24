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
        <>
            <div className="exerciseCard">
                <img
                    src={baseUrl + exercise.imageKey}
                    alt={exercise.name}
                    className="imageExercise"
                />
                <h2>{exercise.name}</h2>
                <p>Sets: {exercise.sets}</p>
                <p>Reps: {exercise.reps}</p>
                <ExerciseCompletion
                    currentSet={currentSet}
                    totalSets={exercise.sets}
                    onAdvance={onAdvance}
                />
            </div>
        </>
    );
}
