import { useState } from "react"
import { Link } from "react-router-dom"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import StateSelector from "../components/StatesSelector"
import { STATES } from "../utils/mocks"
import { createEmployee } from "../features/employees"
import { useSelector, useDispatch } from "react-redux"
import { selectEmployees } from "../selectors"

export default function CreateEmployeePage() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [birthDate, setBirthDate] = useState(new Date())
  const [startDate, setStartDate] = useState(new Date())
  const [street, setStreet] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [zipCode, setZipCode] = useState("")
  const [department, setDepartment] = useState("Sales")

  const employees = useSelector(selectEmployees)
  console.log("22222222222222222222222222222222", employees)
  const dispatch = useDispatch()
  function saveEmployee() {
    console.log({
      firstName,
      lastName,
      birthDate,
      startDate,
      street,
      city,
      state,
      zipCode,
      department,
    })
    // importer l'action pour ajouter
    // dispatch l'action
    // voir si ca s'est ajoute dans le store

    console.log("3333333333333333333333333333333333", employees)
    dispatch(
      createEmployee({
        firstName,
        lastName,
        birthDate,
        startDate,
        street,
        city,
        state,
        zipCode,
        department,
      })
    )
  }

  return (
    <div>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="/employees">View Current Employees</Link>
        <h2>Create Employee</h2>
        <form action="#" id="create-employee">
          <label htmlFor="first-name">First Name</label>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            id="first-name"
          />

          <label htmlFor="last-name">Last Name</label>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            id="last-name"
          />

          <label htmlFor="date-of-birth">Date of Birth</label>

          <DatePicker
            id="date-of-birth"
            selected={birthDate}
            onChange={(date) => setBirthDate(date)}
          />

          <label htmlFor="start-date">Start Date</label>
          <DatePicker
            id="start-date"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              id="street"
              type="text"
            />

            <label htmlFor="city">City</label>
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              id="city"
              type="text"
            />

            <StateSelector
              states={STATES}
              state={state}
              onSelect={(s) => {
                setState(s)
              }}
            />

            <label htmlFor="zip-code">Zip Code</label>
            <input
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              id="zip-code"
              type="number"
            />
          </fieldset>

          <label htmlFor="department">Department</label>
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            name="department"
            id="department"
          >
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>
        </form>

        <button onClick={saveEmployee}>Save</button>
      </div>
      <div id="confirmation" className="modal">
        Employee Created!
      </div>
    </div>
  )
}
