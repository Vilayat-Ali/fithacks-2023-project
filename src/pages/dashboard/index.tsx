// lib
import { useEffect } from "react";
import { appWriteController } from "@/appWrite/interface";
import PageWrapper from "@/components/PageWrapper";

type Props = {};

const Dashboard = (props: Props) => {
  useEffect(() => {
    appWriteController.fetchTrainingPlan();
  }, []);

  return (
    <PageWrapper
      title="Profile"
      description=""
      keywords={[]}
      isProtected={true}
    >
      <div>Dashboard</div>
    </PageWrapper>
  );
};

export default Dashboard;
