import { useState } from "react";
import ContactCard from "./contactCard";
import FormPanel from "./formPanel";

const Dashboard = () => {
  return (
    <div>
      <FormPanel></FormPanel>
      <ContactCard></ContactCard>
    </div>
  );
};

export default Dashboard;
