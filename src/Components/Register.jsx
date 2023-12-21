import React from 'react'
import './Register.css'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate=useNavigate();

  const gotouserdetails=()=>{
    navigate("/")
  }
  return (
   
    
    <div className='Register-box'>
      <style dangerouslySetInnerHTML={{__html: "\n      html, body {\n      min-height: 100%;\n      }\n      body, div, form, input, select { \n      padding: 0;\n      margin: 0;\n      outline: none;\n      font-family: Roboto, Arial, sans-serif;\n      font-size: 14px;\n      color: #666;\n      line-height: 22px;\n      }\n      h1, h4 {\n      margin: 15px 0 4px;\n      font-weight: 400;\n      }\n      h4 {\n      margin: 20px 0 4px;\n      font-weight: 400;\n      }\n      span {\n      color: red;\n      }\n      .small {\n      font-size: 10px;\n      line-height: 18px;\n      }\n      .testbox {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      height: inherit;\n      padding: 3px;\n      }\n      form {\n      width: 100%;\n      padding: 10px;\n      background: pink;\n      box-shadow: 0 2px 5px #ccc; \n      }\n      input {\n      width: calc(100% - 10px);\n      padding: 5px;\n      border: 1px solid black;\n      border-radius: 3px;\n      vertical-align: middle;\n      }\n      input:hover, textarea:hover, select:hover {\n      outline: none;\n      border: 1px solid black;\n      background: #e6eef7;\n      }\n      .title-block select, .title-block input {\n      margin-bottom: 10px;\n      }\n      select {\n      padding: 7px 0;\n      border-radius: 3px;\n      border: 0.5px solid black;\n      background: transparent;\n      }\n      select, table {\n      width: 100%;\n      }\n      option {\n      background: #fff;\n      }\n      .day-visited, .time-visited {\n      position: relative;\n      }\n      input[type=\"date\"]::-webkit-inner-spin-button {\n      display: none;\n      }\n      input[type=\"time\"]::-webkit-inner-spin-button {\n      margin: 2px 22px 0 0;\n      }\n      .day-visited i, .time-visited i, input[type=\"date\"]::-webkit-calendar-picker-indicator {\n      position: absolute;\n      top: 8px;\n      font-size: 20px;\n      }\n      .day-visited i, .time-visited i {\n      right: 5px;\n      z-index: 1;\n      color: #a9a9a9;\n      }\n      [type=\"date\"]::-webkit-calendar-picker-indicator {\n      right: 0;\n      z-index: 2;\n      opacity: 0;\n      }\n      .question-answer label {\n      display: block;\n      padding: 0 20px 10px 0;\n      }\n      .question-answer input {\n      width: auto;\n      margin-top: -2px;\n      }\n      th, td {\n      width: 18%;\n      padding: 15px 0;\n      border-bottom: 1px solid #ccc;\n      text-align: center;\n      vertical-align: unset;\n      line-height: 18px;\n      font-weight: 400;\n      word-break: break-all;\n      }\n      .first-col {\n      width: 25%;\n      text-align: left;\n      }\n      textarea {\n      width: calc(100% - 6px);\n      }\n      .btn-block {\n      margin-top: 20px;\n      text-align: center;\n      }\n      button {\n      width: 150px;\n      padding: 10px;\n      border: none;\n      -webkit-border-radius: 5px; \n      -moz-border-radius: 5px; \n      border-radius: 5px; \n      background-color: #095484;\n      font-size: 16px;\n      color: #fff;\n      cursor: pointer;\n      }\n      button:hover {\n      background-color: #0666a3;\n      }\n      @media (min-width: 568px) {\n      .title-block {\n      display: flex;\n      justify-content: space-between;\n      }\n      .title-block select {\n      width: 30%;\n      margin-bottom: 0;\n      }\n      .title-block input {\n      width: 31%;\n      margin-bottom: 0;\n      }\n      th, td {\n      word-break: keep-all;\n      }\n      }\n    " }} />
      <div className="Register-container-back">
      <div className="Register-container">
    
          <h1>Register Form</h1>
       
          <div className="Register-inputs">
              <h4>Name<span>*</span></h4>
              <input type="text"  name="name" />

              <h4>Email<span>*</span></h4>
              <input type='password'/>

              <h4>Mobile Number<span>*</span></h4>
              <input type="text"  name="name" />

              <h4>Password<span>*</span></h4>
              <input type='password'/>

              <h4>Role<span>*</span></h4>
              <select >
                <option value="Role" selected></option>
                <option value="Admin">Admin</option>
                <option value="User">User</option>
           
              </select>

              <h4>Country<span>*</span></h4>
              <input type='password'/>

             
          
          </div>
         </div>
         <div className="register-button">
          <button onClick={gotouserdetails}>Register</button>
         </div>
      </div>
    </div>
  )
}

export default Register