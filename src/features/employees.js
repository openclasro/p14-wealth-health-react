import { createSlice } from "@reduxjs/toolkit"

const { actions, reducer } = createSlice({
  name: "employees",
  initialState: [],
  reducers: {
    createEmployee: (state, action) => {
      // payload: Nouvel employee
      // state: [...Les anciens employees, Nouvel employee]
      return [...state, action.payload]
    },
  },
})

export const { createEmployee } = actions
export default reducer
