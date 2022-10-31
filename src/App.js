import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import CreateEmployeePage from "./pages/CreateEmployeePage"
import EmployeeListPage from "./pages/EmployeeListPage"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreateEmployeePage />} />
          <Route path="/employees" element={<EmployeeListPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
