import "./ExerciseCompletion.css";

type Props = {
    completed: boolean;
    onToggle: () => void;
};

export default function ExerciseCompletion({ completed, onToggle }: Props) {
    return (
        <div>
            <button
                type="button"
                className={`exercise-completion ${completed ? "is-done" : ""}`}
                onClick={onToggle}
            >
                {completed ? "Done ✔" : "Mark as done"}
            </button>
        </div>
    );
}
