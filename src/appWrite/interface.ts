import { Client, Databases, Query, ID } from "appwrite";
import { trainingPlanType } from "./types";

const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APP_WRITE_ENDPOINT as string)
  .setProject(process.env.NEXT_PUBLIC_APP_WRITE_PROJECT_ID as string);

const databases = new Databases(client);

export const appWriteController = {
  // adding plans
  addTrainingPlan: async (plan: trainingPlanType) => {
    const plans = await databases.createDocument(
      process.env.NEXT_PUBLIC_APP_WRITE_DB_ID as string,
      process.env.NEXT_PUBLIC_APP_WRITE_COLLECTION_ID as string,
      ID.unique(),
      {
        user: plan.user,
        name: plan.name,
        description: plan.description,
        steps: JSON.stringify(plan.steps),
      }
    );
  },

  // fetching plans
  fetchTrainingPlan: async (user: string) => {
    const plans = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APP_WRITE_DB_ID as string,
      process.env.NEXT_PUBLIC_APP_WRITE_COLLECTION_ID as string,
      [Query.equal("user", user)]
    );
    return plans.documents;
  },

  // get plans
  getPlan: async (document_id: string) => {
    const document = await databases.getDocument(
      process.env.NEXT_PUBLIC_APP_WRITE_DB_ID as string,
      process.env.NEXT_PUBLIC_APP_WRITE_COLLECTION_ID as string,
      document_id
    );
    return document;
  },

  // delete plans
  deleteTrainingPlan: async (id: string) => {
    const plans = await databases.deleteDocument(
      process.env.NEXT_PUBLIC_APP_WRITE_DB_ID as string,
      process.env.NEXT_PUBLIC_APP_WRITE_COLLECTION_ID as string,
      id
    );
    return plans;
  },

  // update plans
  updateTrainingPlan: async (id: string, data: any) => {
    const plans = await databases.updateDocument(
      process.env.NEXT_PUBLIC_APP_WRITE_DB_ID as string,
      process.env.NEXT_PUBLIC_APP_WRITE_COLLECTION_ID as string,
      data
    );
    return plans;
  },
};
