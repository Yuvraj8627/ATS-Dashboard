import DashboardLayout from "../layouts/DashboardLayout";
import SummaryCard from "../components/SummaryCard";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { name: "Jan", candidates: 40 },
  { name: "Feb", candidates: 25 },
  { name: "Mar", candidates: 60 },
];

function Dashboard() {
  return (
    <DashboardLayout>
      <h2 className="mb-4">Dashboard</h2>

      <div className="row g-4 mb-4">
        <div className="col-md-4">
          <SummaryCard title="Total Jobs" value="12" />
        </div>

        <div className="col-md-4">
          <SummaryCard title="Candidates" value="150" />
        </div>

        <div className="col-md-4">
          <SummaryCard title="Selected" value="35" />
        </div>
      </div>

      <div className="card p-4">
        <h5>Hiring Analytics</h5>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="candidates" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;