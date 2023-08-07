export default function Form({item, setList, deleteEdu}){
    return (
      <div>
      <div className="form-group row">
        <label htmlFor="university" className="col-4 col-form-label">
          University
        </label>
        <div className="col-8">
          <input
            id="university"
            name="university"
            type="text"
            className="form-control"
            value={item.schoolName}
            onChange={(event) => setList(item.id, 'schoolName', event.target.value)}
          />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="text" className="col-4 col-form-label">
          Year
        </label>
        <div className="col-8">
          <input 
            id="text" 
            name="text" 
            type="text" 
            className="form-control"
            value={item.yearGraduated}
            onChange={(event) => setList(item.id, 'yearGraduated', event.target.value)}
             />
        </div>
      </div>
      <div className="form-group row">
        <div className="offset-4 col-8">
        <button className="btn btn-primary btn-danger" onClick={() => deleteEdu(item.id)}>Delete</button>
        </div>
      </div>
      </div>
      


    )

}