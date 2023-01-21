import { Client, Databases, Query, ID } from "appwrite";
import { trainingPlanType } from "./types";

const client = new Client()
  .setEndpoint(process.env.APP_WRITE_ENDPOINT as string)
  .setProject(process.env.APP_WRITE_PROJECT_ID as string);

const databases = new Databases(client);

export const appWriteController = {
  // adding plans
  addTrainingPlan: (plan: trainingPlanType) => {},

  // fetching plans
  fetchTrainingPlan: async () => {
    const plans = await databases.listDocuments(
      process.env.APP_WRITE_DB_ID as string,
      process.env.APP_WRITE_COLLECTION_ID as string
    );
    console.log(plans);
  },

  // delete plans
  deleteTrainingPlan: (id: string) => {},

  // update plans
  updateTrainingPlan: (id: string) => {},
};
