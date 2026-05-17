import { useParams } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";
import candidates from "../data/candidates";

function CandidateDetails() {
  const { id } = useParams();

  const candidate = candidates.find(
    (item) => item.id === Number(id)
  );

  return (
    <DashboardLayout>
      <div className="card shadow p-4">
        <h2>{candidate.name}</h2>

        <p>Email: {candidate.email}</p>
        <p>Role: {candidate.role}</p>
        <p>Experience: {candidate.experience}</p>
        <p>Score: {candidate.score}</p>
        <p>Status: {candidate.status}</p>

        <div>
          <strong>Skills:</strong>

          <div className="mt-2">
            {candidate.skills.map((skill, index) => (
              <span
                key={index}
                className="badge bg-primary me-2"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default CandidateDetails;