export type trainingPlanType = {
  name: string;
  steps: [
    {
      exercise: string;
      reps: number;
    }
  ];
};
