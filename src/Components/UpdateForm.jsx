import React, { useEffect, useState } from "react";
import axios from "../axios";
import { useNavigate, useParams } from "react-router-dom";
import { useStates } from "../States";

import { toast } from "react-hot-toast";
const UpdateForm = () => {
  const [name, setName] = useState("");
  const [dept, setDept] = useState("");
  const [fathername, setFathername] = useState("");
  const [gender, setGender] = useState("");
  const [rollnumber,setRollnumber]=useState("");
  const [mail, setMail] = useState("");
  const [studyingperiod, setStudyingperiod] = useState("");
  const [contactno, setContactno] = useState("");
  const [address, setAddress] = useState("");
  const { id } = useParams();

  const getStudent = async () => {
    axios.get("/getById/" + id).then((response) => {
      setName(response.data?.name);
      setDept(response.data?.dept);
      setFathername(response.data?.fathername);
      setGender(response.data?.gender);
      setRollnumber(response.data?.rollnumber);
      setMail(response.data?.mail);
      setStudyingperiod(response.data?.studyingperiod);
      setContactno(response.data?.contactno);
      setAddress(response.data?.address);
      console.log(response);
    }).catch((err)=>{
      console.log(err);
    });
  };
  useEffect(() => {
    getStudent();
  }, []);
  const studentupdatedetails = () => {
    axios
      .put(`/studentdetails/update/${id}`, {
        name: name,
        dept: dept,
        fathername: fathername,
        gender: gender,
        rollnumber:rollnumber,
        mail: mail,
        studyingperiod: studyingperiod,
        contactno: contactno,
        address: address,
      })
      .then((res) => {
        console.log(res);
        toast.success("Student Details is updated Successfully!");
        navigate("/");
      });
  };
  const navigate = useNavigate();

  //   const navigate=useNavigate();
  //  const {setStudent}=useStates();

  //   const gototable=()=>{
  //     navigate('/')
  //   }
  //   const handleSubmit=(e)=>{
  //     e.preventDefault();
  //     const newStudent={
  //       id:Date.now(),
  //       name,
  //       dept,
  //       fathername,
  //       gender,
  //       mail,
  //       studyingperiod,
  //       contactno,
  //       address,
  //     };
  //     onaddStudent(newStudent);
  //     setName('');
  //     setDept('');
  //     setFathername('');
  //     setGender('');
  //     setMail('');
  //     setStudyingperiod('');
  //     setContactno('');
  //     setAddress('');
  //   };
  //   const onaddStudent=(student)=>{
  //     setStudent((prev)=>[...prev,student])

  // }
  return (
    <div className="Form-screen">
      {/* <Navbar/> */}
      <div className="studentform">
        <div className="Student management-box">
          <style
            dangerouslySetInnerHTML={{
              __html:
                '\n      html, body {\n      min-height: 100%;\n      }\n      body, div, form, input, select { \n      padding: 0;\n      margin: 0;\n      outline: none;\n      font-family: Roboto, Arial, sans-serif;\n      font-size: 14px;\n      color: #666;\n      line-height: 22px;\n      }\n      h1, h4 {\n      margin: 15px 0 4px;\n      font-weight: 400;\n      }\n      h4 {\n      margin: 20px 0 4px;\n      font-weight: 400;\n      }\n      span {\n      color: red;\n      }\n      .small {\n      font-size: 10px;\n      line-height: 18px;\n      }\n      .testbox {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      height: inherit;\n      padding: 3px;\n      }\n      form {\n      width: 100%;\n      padding: 10px;\n      background: pink;\n      box-shadow: 0 2px 5px #ccc; \n      }\n      input {\n      width: calc(100% - 10px);\n      padding: 5px;\n      border: 1px solid black;\n      border-radius: 3px;\n      vertical-align: middle;\n      }\n      input:hover, textarea:hover, select:hover {\n      outline: none;\n      border: 1px solid black;\n      background: #e6eef7;\n      }\n      .title-block select, .title-block input {\n      margin-bottom: 10px;\n      }\n      select {\n      padding: 7px 0;\n      border-radius: 3px;\n      border: 0.5px solid black;\n      background: transparent;\n      }\n      select, table {\n      width: 100%;\n      }\n      option {\n      background: #fff;\n      }\n      .day-visited, .time-visited {\n      position: relative;\n      }\n      input[type="date"]::-webkit-inner-spin-button {\n      display: none;\n      }\n      input[type="time"]::-webkit-inner-spin-button {\n      margin: 2px 22px 0 0;\n      }\n      .day-visited i, .time-visited i, input[type="date"]::-webkit-calendar-picker-indicator {\n      position: absolute;\n      top: 8px;\n      font-size: 20px;\n      }\n      .day-visited i, .time-visited i {\n      right: 5px;\n      z-index: 1;\n      color: #a9a9a9;\n      }\n      [type="date"]::-webkit-calendar-picker-indicator {\n      right: 0;\n      z-index: 2;\n      opacity: 0;\n      }\n      .question-answer label {\n      display: block;\n      padding: 0 20px 10px 0;\n      }\n      .question-answer input {\n      width: auto;\n      margin-top: -2px;\n      }\n      th, td {\n      width: 18%;\n      padding: 15px 0;\n      border-bottom: 1px solid #ccc;\n      text-align: center;\n      vertical-align: unset;\n      line-height: 18px;\n      font-weight: 400;\n      word-break: break-all;\n      }\n      .first-col {\n      width: 25%;\n      text-align: left;\n      }\n      textarea {\n      width: calc(100% - 6px);\n      }\n      .btn-block {\n      margin-top: 20px;\n      text-align: center;\n      }\n      button {\n      width: 150px;\n      padding: 10px;\n      border: none;\n      -webkit-border-radius: 5px; \n      -moz-border-radius: 5px; \n      border-radius: 5px; \n      background-color: #095484;\n      font-size: 16px;\n      color: #fff;\n      cursor: pointer;\n      }\n      button:hover {\n      background-color: #0666a3;\n      }\n      @media (min-width: 568px) {\n      .title-block {\n      display: flex;\n      justify-content: space-between;\n      }\n      .title-block select {\n      width: 30%;\n      margin-bottom: 0;\n      }\n      .title-block input {\n      width: 31%;\n      margin-bottom: 0;\n      }\n      th, td {\n      word-break: keep-all;\n      }\n      }\n    ',
            }}
          />
          <div className="testbox">
            <form action="/">
              <h1 className="Student-management-box-header">
                Student Management Form
              </h1>
              <h4>
                Student Dept<span>*</span>
              </h4>
              <select value={dept} onChange={(e) => setDept(e.target.value)}>
                <option value />
                <option value>Computer Science And Engineering</option>
                <option value={"Information Technology"}>
                  Information Technology
                </option>
                <option value={"Electrical And Electronincs Engineering"}>
                  Electrical And Electronincs Engineering
                </option>
                <option value={"Electrical And Communication Engineering"}>
                  Electrical And Communication Engineering
                </option>
                <option value={"Machanical Engineering"}>
                  Machanical Engineering
                </option>
                <option value={"Civil Engineering"}>Civil Engineering</option>
                <option value={"Agricultural Engineering"}>
                  Agricultural Engineering
                </option>
                <option value={"Artificial And DataScience"}>
                  Artificial And DataScience{" "}
                </option>
              </select>
              <h4>
                Studying Period<span>*</span>
              </h4>
              <select
                value={studyingperiod}
                onChange={(e) => setStudyingperiod(e.target.value)}
              >
                <option value />
                <option value={"2018-2022"}>2018-2022</option>
                <option value={"2019-2023"}>2019-2023</option>
                <option value={"2020-2024"}>2020-2024</option>
                <option value={"2021-2025"}>2021-2025</option>
                <option value={"2022-2026"}>2022-2026</option>
                <option value={"2023-2027"}>2023-2027</option>
              </select>
              <h4>
                Name<span>*</span>
              </h4>
              <div className="title-block">
                {/* <select>
                  <option value="title" selected>Title</option>
                  <option value="ms">Ms</option>
                  <option value="miss">Miss</option>
                  <option value="mrs">Mrs</option>
                  <option value="mr">Mr</option>
                </select> */}
                <input
                  className="name"
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="FullName"
                />
                <input
                  className="rollnumber"
                  type="text"
                  name="name"
                  value={rollnumber}
                  onChange={(e) => setRollnumber(e.target.value)}
                  placeholder="Roll Number"
                />
              </div>
              <h4>
                Email Address<span>*</span>
              </h4>
              <input
                type="text"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                name="name"
              />
              <h4>
                Contact Number<span>*</span>
              </h4>
              <input
                type="text"
                name="name"
                value={contactno}
                onChange={(e) => setContactno(e.target.value)}
              />
              <h4>Father Name</h4>
              <input
                value={fathername}
                onChange={(e) => setFathername(e.target.value)}
                type="text"
                name="name"
              />
              <h4>Gender</h4>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="gender" selected></option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <h4>
                Address<span>*</span>
              </h4>
              <input
                type="text"
                name="name"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              {/* <h4>Paramenent Address</h4>
              <p className="small">Ex: T-22,KOVAIPUDUR,KUNIAMUTHUR, COIMBATORE 641042.
                <textarea rows={5} defaultValue={""} />
              </p> */}
              <div className="btn-block">
                <button
                  onClick={ studentupdatedetails}
                  type="submit"
                  href="/"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateForm;
