// lib
import { useEffect } from "react";
import { appWriteController } from "@/appWrite/interface";
import PageWrapper from "@/components/PageWrapper";

const Dashboard = () => {
  // useEffect(() => {
  //   const app = appWriteController.fetchTrainingPlan("abc@test.com");
  //   app
  //     .then((data: any) => console.log(data))
  //     .catch((err: any) => console.log(err));
  // }, []);

  // const add = () => {
  //   const a = appWriteController.addTrainingPlan({
  //     user: "abc@test.com",
  //     name: "abc-plan-1",
  //     steps: [
  //       {
  //         exercise: "pushups",
  //         reps: 12,
  //       },
  //     ],
  //   });
  //   a.then((p: any) => console.log(p)).catch((e: any) => console.log(e));
  // };

  return (
    <PageWrapper
      title="Dashboard"
      description=""
      keywords={[]}
      isProtected={true}
    >
      <div>Dashboard</div>
    </PageWrapper>
  );
};

export default Dashboard;
