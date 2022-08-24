import axios from "axios"
import { useState } from "react"
const Excuse = () => {
    const [allExcuse, setallExcuse] = useState([])
    const [excuse, setexcuse] = useState("")
    const endpoint = "https://excuser.herokuapp.com/v1/excuse/family/"
    const fetchFamily = () => {
        axios.get(endpoint).then((result) => {
            console.log(result.data[0].excuse);
            setexcuse(result.data[0].excuse);
            console.log(excuse)
            let newExcuse={excuse}
            setallExcuse([newExcuse])
        })
    }
    const endpoint2 = "https://excuser.herokuapp.com/v1/excuse/office/"
    const fetchOffice = () => {
        axios.get(endpoint2).then((result) => {
            console.log(result.data[0].excuse);
            setexcuse(result.data[0].excuse);
            console.log(excuse)
            let newExcuse={excuse}
            setallExcuse([newExcuse])
        })
    }
    const endpoint3 = "https://excuser.herokuapp.com/v1/excuse/children/"
    const fetchChildren = () => {
        axios.get(endpoint3).then((result) => {
            console.log(result.data[0].excuse);
            setexcuse(result.data[0].excuse);
            console.log(excuse)
            let newExcuse={excuse}
            setallExcuse([newExcuse])
        })
    }
    const endpoint4 = "https://excuser.herokuapp.com/v1/excuse/college/"
    const fetchCollege = () => {
        axios.get(endpoint4).then((result) => {
            console.log(result.data[0].excuse);
            setexcuse(result.data[0].excuse);
            console.log(excuse)
            let newExcuse={excuse}
            setallExcuse([newExcuse])
        })
    }
  return (
            <>
            <h1 className="text-center">Welcome to Random Excuses App</h1>
            <h4 className="text-center mb-5">Select categories to generate random excuses</h4>
            {allExcuse.map((stu,index)=>(
                 <div className="container-fluid" key={excuse}>
                 <div className="row">
                   <div className="col-7 mx-auto">
                     <div className="card p-3">
                       <div className="card-text text-center fs-3">{stu.excuse}</div>
                     </div>
                   </div>
                 </div>
               </div>
            ))}
            <center>
                <div style={{marginTop:200}}>
                <button onClick={fetchFamily} className='btn btn-info me-3 '>Family category</button>
                <button onClick={fetchOffice} className='btn btn-warning me-3 '>Office category</button>
                <button onClick={fetchChildren} className='btn btn-primary me-3 '>Children category</button>
                <button onClick={fetchCollege} className='btn btn-danger me-3'>College category</button>
                </div>
            </center>
            </>
        )
    }

    export default Excuse;