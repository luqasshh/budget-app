// rrd imports
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import Intro from "../components/Intro";

//  helper functions
import { fetchData } from "../helpers";

// loader
export function dashboardLoader() {
  const userName = fetchData("userName");
  return { userName };
}

export async function dashboardAction({ request }) {
  const data = await request.formData();
  const formData = Object.fromEntries(data);
  try {
    localStorage.setItem("userName", JSON.stringify(formData.userName));
    return toast.success(`Welcome, ${formData.userName}`);
  } catch (e) {
    throw new Error("There was an issue");
  }
}

const Dashboard = () => {
  const { userName } = useLoaderData();

  return <div>{userName ? <p>{userName}</p> : <Intro />}</div>;
};
export default Dashboard;
