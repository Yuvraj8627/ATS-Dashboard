import DashboardLayout from "../layouts/DashboardLayout";
import jobs from "../data/jobs";

function Jobs() {
  return (
    <DashboardLayout>
      <h2 className="mb-4">Job Listings</h2>

      <div className="row g-4">
        {jobs.map((job) => (
          <div className="col-md-6" key={job.id}>
            <div className="card shadow-sm">
              <div className="card-body">
                <h5>{job.title}</h5>
                <p>Location: {job.location}</p>
                <p>Openings: {job.openings}</p>
                <p>Applicants: {job.applicants}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}

export default Jobs;