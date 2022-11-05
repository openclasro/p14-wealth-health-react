import { useState } from "react"
import { Link } from "react-router-dom"
import "react-datepicker/dist/react-datepicker.css"
import StateSelector from "arezki-states-selector"
import { STATES } from "../utils/mocks"
import { createEmployee } from "../features/employees"
import { useSelector, useDispatch } from "react-redux"
import { selectEmployees } from "../selectors"
import Modal from "react-modal"
import TextInput from "../components/TextInput"
import DatePicker from "../components/DatePicker"

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
}

Modal.setAppElement("#root")

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

  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

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
        birthDate: birthDate.toLocaleDateString(),
        startDate: startDate.toLocaleDateString(),
        street,
        city,
        state,
        zipCode,
        department,
      })
    )
    openModal()
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
          <TextInput
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            label="First Name"
            id="first-name"
          />

          <TextInput
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            label="Last Name"
            id="last-name"
          />

          <DatePicker
            label="Date of Birth"
            id="date-of-birth"
            selected={birthDate}
            onChange={(date) => setBirthDate(date)}
          />

          <DatePicker
            label="Start Date"
            id="start-date"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />

          <fieldset className="address">
            <legend>Address</legend>

            <TextInput
              label="Street"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              id="street"
              type="text"
            />

            <TextInput
              label="City"
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

            <TextInput
              label="Zip Code"
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
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="New employee"
      >
        <h3>Employee created!</h3>
        <button onClick={closeModal}>Ok!</button>
      </Modal>
    </div>
  )
}
