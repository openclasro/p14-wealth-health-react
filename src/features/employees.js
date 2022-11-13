import { createSlice } from "@reduxjs/toolkit"

const { actions, reducer } = createSlice({
  name: "employees",
  initialState: JSON.parse(localStorage.getItem("employees")) || [],
  reducers: {
    createEmployee: (state, action) => {
      // payload: Nouvel employee
      // state: [...Les anciens employees, Nouvel employee]
      const employees = [...state, action.payload]
      localStorage.setItem("employees", JSON.stringify(employees))
      return employees
    },
  },
})

export const { createEmployee } = actions
export default reducer
