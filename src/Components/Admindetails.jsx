import React, { useEffect } from 'react'
import CachedIcon from '@mui/icons-material/Cached';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import axios from "../axios";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import './UserDetails.css'
import { useNavigate } from 'react-router-dom';
import { useStates } from '../States';
const Admindetails = () => {
    const navigate=useNavigate();
    const{Register,setRegister}=useStates();
    const getregisterdetails =()=>{
        axios.get("/Register/view")

        .then((result)=>{
            setRegister(result.data);
            console.log(result);
        })
    };
    const deleteRegister=(id)=>{
        console.log(id);
        axios.delete(`/Register/delete/${id}`).then((res)=>{
            getregisterdetails();
        });
    };
    useEffect(()=>{
        getregisterdetails();
    
    },[]);
    const gotoupdateuserdetails=(id)=>{
         navigate('/updateRegister/'+id)
    }
  return (
    <div> <div class="container">
    <div class="row">
        <div class="col-md-offset-1 col-md-10">
            <div class="panel">
                <div class="panel-heading">
                    <div class="row">
                        <div class="col col-sm-3 col-xs-12">
                            <h4 class="title">Admin Details <span>List</span></h4>
                        </div>
                        <div class="col-sm-9 col-xs-12 text-right">
                            <div class="btn_group">
                                <input type="text" class="form-control" placeholder="Search"/>
                                <div class="from-buttons">
                                <button class="btn btn-default" title="Reload"><CachedIcon/></button>
                                <button class="btn btn-default" title="Pdf"><PersonIcon/></button>
                                <button class="btn btn-default" title="Excel"><HomeIcon/></button></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="panel-body table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile No</th>
                                <th>Country</th>
                                <th>Role</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Register.map((register,i)=>{
                                    return(
                                    <tr>
                                <td>{i+1}</td>
                                <td>{register.name}</td>
                                <td>{register.email}</td>
                                <td>{register.mobileno}</td>
                                <td>{register.country}</td>
                                <td>{register.role}</td>
                                <td>
                                    <ul class="action-list">
                                        <li><a href="#" data-tip="edit"><FiEdit onClick={()=>gotoupdateuserdetails(register.id)}/></a></li>
                                        <li><a href="#" data-tip="delete"><RiDeleteBinLine onClick={()=>deleteRegister(register.id)}/></a></li>
                                    </ul>
                                </td>
                            </tr>
                              )
                           })
                        }
                           
                        </tbody>
                    </table>
                </div>
            
            </div>
        </div>
    </div>
</div></div>
  )
}

export default Admindetails