export type trainingPlanType = {
  user: string;
  name: string;
  steps: [
    {
      exercise: string;
      reps: number;
    }
  ];
};
