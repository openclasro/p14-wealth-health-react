import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { selectEmployees } from "../selectors"
import Table from "../components/Table"

const columns = [
  {
    Header: "First Name",
    accessor: "firstName",
  },
  {
    Header: "Last Name",
    accessor: "lastName",
  },
  {
    Header: "Birth date",
    accessor: "birthDate",
  },
  {
    Header: "Start date",
    accessor: "startDate",
  },
  {
    Header: "Street",
    accessor: "street",
  },
  {
    Header: "City",
    accessor: "city",
  },
  {
    Header: "State",
    accessor: "state",
  },
  {
    Header: "Zip code",
    accessor: "zipCode",
  },
  {
    Header: "Department",
    accessor: "department",
  },
]

export default function EmployeeListPage() {
  const employees = useSelector(selectEmployees)

  console.log(employees)
  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <Table data={employees} columns={columns} />
      <Link to="/">Home</Link>
    </div>
  )
}
