import "./ExerciseCompletion.css";

type Props = {
    currentSet: number;
    totalSets: number;
    onAdvance: () => void;
};

export default function ExerciseCompletion({
    currentSet,
    totalSets,
    onAdvance,
}: Props) {
    const isFinished = currentSet > totalSets;
    const label = isFinished
        ? `Set ${totalSets} Done`
        : currentSet === totalSets
        ? "Final set"
        : `Set ${currentSet}`;

    return (
        <div>
            <button
                type="button"
                className={`exercise-completion ${isFinished ? "is-done" : ""}`}
                onClick={onAdvance}
                disabled={isFinished}
            >
                {label}
            </button>
        </div>
    );
}
