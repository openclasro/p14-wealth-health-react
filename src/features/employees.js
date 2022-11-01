import { createSlice } from "@reduxjs/toolkit"

const { actions, reducer } = createSlice({
  name: "employees",
  initialState: null,
  reducers: {
    createEmployee: (state, action) => {},
  },
})

export const { createEmployee } = actions
export default reducer
