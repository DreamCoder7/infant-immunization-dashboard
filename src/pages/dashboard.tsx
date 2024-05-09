import { useSelector } from "react-redux";

import PageHeader from "@/components/header/page-header";
import { selectCurrentUser } from "@/features/authSlice";

function Dashboard() {
  const currentUser = useSelector(selectCurrentUser);

  return (
    <div className="mx-auto w-full bg-muted rounded  mt-1 pb-4 ">
      <PageHeader pageName="Dashboard" />
      <div className="mx-auto w-[98%] h-fit bg-card rounded overflow-auto  mt-2   py-4 px-4  relative">
        {/* <AdminTable admins={admins} /> */}
        <h1>Hello, {currentUser.firstName}</h1>
      </div>
    </div>
  );
}

export default Dashboard;
