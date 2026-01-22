export type Exercise = {
    name: string;
    imageKey: string;
    sets: number;
    reps: string;
};

export type ExerciseDay = Record<string, Exercise>;

export type ExercisesJson = {
    exerciseDays: Record<string, ExerciseDay>;
};
