import {  React,useEffect } from 'react'

import axios from "../axios";
import Navbar from './Navbar'
import './Table.css'
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { FcPlus } from "react-icons/fc";
import { useStates } from '../States';
const Table = () => {
    const navigate=useNavigate();
    const {Student,setStudent} = useStates();
    const getStudentdetails = () => {
      axios.get("/studentdetails/view")
       
        .then((result) => {
          setStudent(result.data);
          console.log(result);
        });
    };
    const deleteStudent = (no) => {
      console.log(no);
      axios.delete(`/studentdetails/delete/${no}`).then((res) => {
        getStudentdetails();
        // alert("Delete Success for Train details");
        // toast.success("Deleted Successfully")
      });
    };
    useEffect(() => {
      getStudentdetails();
    }, []);
    const gotoupdateform=(no)=>{
        navigate('/updateform/'+no)
    }
    const gotoform=()=>{
        navigate('/form')
    }
    // const deleteStudent = (i) => {
    //   const deleteStudent = Student.filter((e,index)=>i!==index);
    //   setStudent(deleteStudent);
    //   console.log("Delete task");
    // };
  return (
    <div><Navbar/>
    <div className='table-top'>
        <p>Student Informations</p>
        <button onClick={gotoform}><FcPlus />Add new Student</button>
        <div>
<table id="customers">
  <tr>
    <th>S.No</th>
    <th>Name</th>
    <th>Dept</th>
    <th>Roll Number</th>
    <th>Father Name</th>
    <th>Gender</th>
    <th>Email</th>
    <th>Studying Period</th>
    <th>Contact No</th>
    <th>Address</th>
    <th>Actions</th>
    
  </tr>
  {
    Student.map((student,i)=>{
      return(

        <tr>
    <td>
    {i+1}
    </td>
    <td >{student.name} </td>
    <td>{student.dept}</td>
    <td>{student.rollnumber}</td>
    <td>{student.fathername}</td>
    <td>{student.gender}</td>
    <td>{student.mail}</td>
    <td>{student.studyingperiod}</td>
    <td>{student.contactno}</td>
    <td>{student.address}</td>
    <td><div className='table-actions-buttons'><FiEdit className='editicon' onClick={()=>gotoupdateform(student.no)}/><RiDeleteBinLine  className='deleteicon' onClick={()=>deleteStudent(student.no)}/></div></td>
 

  </tr>
    )
  })
}
 
</table>
</div>
</div>
</div>
  )
}

export default Table


