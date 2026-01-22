import "./ExerciseCard.css";
import type { Exercise } from "../types/exercise";

type Props = {
    exercise: Exercise;
    baseUrl: string;
};

export default function ExerciseCard({ exercise, baseUrl }: Props) {
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
            </div>
        </>
    );
}
