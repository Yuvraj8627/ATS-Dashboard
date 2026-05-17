import { Link } from "react-router-dom";

function CandidateCard({ candidate }) {
  const getStatusBadge = (status) => {
    switch (status) {
      case "Selected":
        return "success";
      case "Interview":
        return "warning";
      case "Rejected":
        return "danger";
      default:
        return "secondary";
    }
  };

  return (
    <div className="card shadow-sm h-100 candidate-card">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start mb-3">
          <div>
            <h5 className="card-title mb-1">{candidate.name}</h5>
            <p className="text-muted mb-0">{candidate.role}</p>
          </div>

          <span
            className={`badge bg-${getStatusBadge(candidate.status)}`}
          >
            {candidate.status}
          </span>
        </div>

        <div className="mb-3">
          <p className="mb-1">
            <strong>Email:</strong> {candidate.email}
          </p>

          <p className="mb-1">
            <strong>Experience:</strong> {candidate.experience}
          </p>

          <p className="mb-0">
            <strong>Score:</strong>
            <span className="ms-2 badge bg-primary">
              {candidate.score}%
            </span>
          </p>
        </div>

        <div className="mb-3">
          <strong>Skills:</strong>

          <div className="mt-2 d-flex flex-wrap gap-2">
            {candidate.skills.map((skill, index) => (
              <span
                key={index}
                className="badge bg-light text-dark border"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <Link
          to={`/candidate/${candidate.id}`}
          className="btn btn-primary w-100"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default CandidateCard;