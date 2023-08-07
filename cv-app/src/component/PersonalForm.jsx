export default function PersonalForm({handleName, handleEmail, handleAddress, handlePhone, handleSummary}){
    return (
        <div className='detail'>
        <h2 className='detail-title'>Details</h2>
        <form>
        <div className="form-group row">
          <label htmlFor="name" className="col-4 col-form-label">
            Full Name
          </label>
          <div className="col-8">
            <input onChange={handleName} id="name" name="name" type="text" className="form-control" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="email" className="col-4 col-form-label">
            Email
          </label>
          <div className="col-8">
            <input onChange={handleEmail} id="email" name="email" type="text" className="form-control" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="address" className="col-4 col-form-label">
            Address
          </label>
          <div className="col-8">
            <input onChange={handleAddress} id="address" name="address" type="text" className="form-control" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="phonenumber" className="col-4 col-form-label">
            Phone Number
          </label>
          <div className="col-8">
            <input
              id="phonenumber"
              name="phonenumber"
              type="text"
              className="form-control"
              onChange={handlePhone}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="summary" className="col-4 col-form-label">
            Summary
          </label>
          <div className="col-8">
            <textarea
              id="summary"
              name="summary"
              cols={40}
              rows={2}
              className="form-control"
              defaultValue={""}
              onChange={handleSummary}
            />
          </div>
        </div>
      </form>
    </div>
    );
}