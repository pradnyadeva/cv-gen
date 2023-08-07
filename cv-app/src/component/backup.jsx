import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Form(){
  return (
    <div key={item.id}>
      <div className="form-group row">
        <label htmlFor="Year" className="col-4 col-form-label">
          University
        </label>
        <div className="col-8">
          <input id="Year" name="Year" type="text" className="form-control" value={item.schoolName} onChange={(e) => handleSchool(e, item.id, 'schoolName')}/>
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="text" className="col-4 col-form-label">
          Year
        </label>
        <div className="col-8">
          <input value={item.yearGraduated}id="text" name="text" type="text" className="form-control" onChange={(e) => handleSchool(e, item.id, 'schoolName')} />
        </div>
      </div>
    </div>
  )
}


function App() {
  const [name, setName] = useState('Sample');
  const [email, setEmail] = useState('Sample');
  const [phone, setPhone] = useState('Sample');
  const [address, setAddress] = useState('Sample');
  const [summary, setSummary] = useState('sample');
  const [educationList, setEducationList] = useState([
    { id: 1, schoolName: '', yearGraduated: '' },
  ]);

  function handleName(e){
    setName(e.target.value);
  }

  function handleEmail(e){
    setEmail(e.target.value);
  }
  function handlePhone(e){
    setPhone(e.target.value);
  }
  function handleAddress(e){
    setAddress(e.target.value);
  }

  function handleSummary(e){
    setSummary(e.target.value);
  }

  function addForm(){
    setEducationList([
      ...educationList,{
        id: educationList.length + 1,
        schoolName: "",
        yearGraduated: ""
      },
    ])
  }

  function setList(eduId, attr, value) {
    setEducationList(educationList.map(edu => {
      if (edu.id === eduId){
        return { ...edu, [attr]: value};
      } else {
        return edu;
      }
    }));
  }
  
  

  return(
    <>
      <div className='left-div container'>
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
      <div>

      <h2>University</h2>
      {educationList.map((item) => (
        <div key={item.id}>
          <input
            type="text"
            value={item.schoolName}
            onChange={(event) => setList(item.id, 'schoolName', event.target.value)}
            placeholder="School Name"
          />
          <input
            type="text"
            value={item.yearGraduated}
            onChange={(event) => setList(item.id, 'yearGraduated', event.target.value)}
            placeholder="Year Graduated"
          />
        </div>

        
      ))}
      
      <button onClick={addForm}>Add New</button>
      </div>
      <div>
        <h2></h2>
      </div>



      </div>


      <div className='right-div'>
        <h1>{name}</h1>
        <div className='personal-information'>
          <div><p>{email}</p></div>
          <div><p>{address}</p></div>
          <div><p>{phone}</p></div>
        </div>
        <p></p>
        <p className='summary'>{summary}</p>
        {educationList.map((item) => (
          <div>
              <h2>{item.schoolName}</h2>
              <h2>{item.yearGraduated}</h2>
          </div>
        ))}

      </div>
    
    </>
    





  )
}

export default App
