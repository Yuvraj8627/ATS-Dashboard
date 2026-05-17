import { Modal, Button } from "react-bootstrap";

function CandidateModal({
  show,
  handleClose,
  candidate,
}) {
  if (!candidate) return null;

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
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          Candidate Details
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="text-center mb-4">
          <div className="avatar-circle mx-auto mb-3">
            {candidate.name.charAt(0)}
          </div>

          <h4>{candidate.name}</h4>

          <span
            className={`badge bg-${getStatusBadge(
              candidate.status
            )}`}
          >
            {candidate.status}
          </span>
        </div>

        <div className="mb-3">
          <strong>Email:</strong>
          <p>{candidate.email}</p>
        </div>

        <div className="mb-3">
          <strong>Role:</strong>
          <p>{candidate.role}</p>
        </div>

        <div className="mb-3">
          <strong>Experience:</strong>
          <p>{candidate.experience}</p>
        </div>

        <div className="mb-3">
          <strong>Score:</strong>

          <div className="progress mt-2">
            <div
              className="progress-bar"
              role="progressbar"
              style={{
                width: `${candidate.score}%`,
              }}
            >
              {candidate.score}%
            </div>
          </div>
        </div>

        <div>
          <strong>Skills:</strong>

          <div className="mt-2 d-flex flex-wrap gap-2">
            {candidate.skills.map((skill, index) => (
              <span
                key={index}
                className="badge bg-primary"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={handleClose}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CandidateModal;