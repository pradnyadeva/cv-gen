export default function Experience({item, updateExp, deleteExp}) {
  return (
    <div>
      <div className="form-group row">
        <label htmlFor="company" className="col-4 col-form-label">
          Company
        </label>
        <div className="col-8">
          <input value={item.company} id="company" name="company" type="text" className="form-control" onChange={(event) => updateExp(item.id, 'company', event.target.value)} />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="date" className="col-4 col-form-label">
          Date
        </label>
        <div className="col-8">
          <input value={item.year} id="date" name="date" type="text" className="form-control" onChange={(event) => updateExp(item.id, 'year', event.target.value)}/>
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="job-desc" className="col-4 col-form-label">
          Job Description
        </label>
        <div className="col-8">
          <textarea
            id="job-desc"
            name="job-desc"
            cols={40}
            rows={5}
            className="form-control"
            value={item.jobDesc}
            onChange={(event) => updateExp(item.id, 'jobDesc', event.target.value)}
            wrap="soft"
          />
        </div>
      </div>
        <div className="form-group row">
            <div className="offset-4 col-8">
            <button className="btn btn-primary btn-danger" onClick={() => deleteExp(item.id)}>Delete</button>
        </div>
    </div>
    </div>
  );
}