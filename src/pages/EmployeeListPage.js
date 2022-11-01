import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { selectEmployees } from "../selectors"

export default function EmployeeListPage() {
  const employees = useSelector(selectEmployees)
  console.log(employees)
  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <table id="employee-table" className="display"></table>
      <Link to="/">Home</Link>
    </div>
  )
}
