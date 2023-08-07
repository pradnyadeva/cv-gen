import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './component/Form.jsx'
import Experience from './component/Experience.jsx'
import PersonalForm from './component/PersonalForm.jsx'



function App() {
  const [name, setName] = useState('Sample');
  const [email, setEmail] = useState('Sample');
  const [phone, setPhone] = useState('Sample');
  const [address, setAddress] = useState('Sample');
  const [summary, setSummary] = useState('sample');
  const [educationList, setEducationList] = useState([
    { id: 1, schoolName: 'sample', yearGraduated: 'sample' },
  ]);
  const [experienceList, setExperience] = useState([
    { id: 1, company: 'sample', jobDesc: 'sample', year: 'year' },
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
        schoolName: "sample",
        yearGraduated: "sample"
      },
    ])
  }

  function deleteEdu(id){
    setEducationList(educationList.filter(a => a.id !== id));

  }

  function addExperience(){
    setExperience([
      ...experienceList, {
        id: experienceList.length + 1, company: 'sample', jobDesc: 'sample', year: 'year'
      },
    ])
  }

  function deleteExp(id){
    setExperience(experienceList.filter(a => a.id !== id));
  }

  function updateExp(expId, attr, value){
    setExperience(experienceList.map(exp => {
      if (exp.id === expId){
        return {...exp, [attr]: value};
      } else{
        return exp;
      }
    }));
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
      <div className='left-div'>
      <PersonalForm 
        handleName={handleName}
        handleAddress={handleAddress}
        handleEmail={handleEmail}
        handlePhone={handlePhone}
        handleSummary={handleSummary}
      />
      <div>
      <h2>University</h2>
      {educationList.map((item) => (
        <Form 
          item={item}
          setList={setList}
          deleteEdu={deleteEdu}  
        />
      ))}
      
      <button className="btn btn-primary" onClick={addForm}>Add New</button>
      </div>
      <div className='mt-5'>
        <h2>Experience</h2>
        {experienceList.map((item) => (
          <Experience 
            item={item}
            updateExp={updateExp}
            deleteExp={deleteExp}
          
          />

        ))}
        
      </div>
      <button className='btn btn-primary' onClick={addExperience}>Add New</button>
      </div>


      <div className='container right-div'>
        <h1>{name}</h1>
        <div className='personal-information'>
          <div><p>{email}</p></div>
          <div><p>{address}</p></div>
          <div><p>{phone}</p></div>
        </div>
      
        <p className='summary'>{summary}</p>
        <h3 className='mt-5'>Education</h3>
        {educationList.map((item) => (
          <div className='
            d-flex justify-content-between
          '>
              <div><p>{item.schoolName}</p></div>
              <div><p>{item.yearGraduated}</p></div>
          </div>
        ))}

        <h3 className='mt-3'>Experience</h3>
        <div>
        {experienceList.map((item) => (
          <div className='d-flex flex-column'>
            <div className='
            d-flex justify-content-between
          '>
              <div><p>- {item.company}</p></div>
              <div><p>{item.year}</p></div>
          </div>
            <div>
              <p className='new-line'>{item.jobDesc}</p>
            </div>
          </div>
        ))}
        </div>
      

      </div>
    
    </>
    





  )
}

export default App
