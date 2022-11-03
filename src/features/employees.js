import { createSlice } from "@reduxjs/toolkit"

const { actions, reducer } = createSlice({
  name: "employees",
  initialState: [
    {
      firstName: "asfsadf",
      lastName: "asfd",
      birthDate: "2022-11-02T19:01:50.583Z",
      startDate: "2022-11-02T19:01:50.583Z",
      street: "asdf",
      city: "adsf",
      state: "",
      zipCode: "324234",
      department: "Sales",
    },
    {
      firstName: "asfsadf",
      lastName: "asfd",
      birthDate: "2022-11-02T19:01:50.583Z",
      startDate: "2022-11-02T19:01:50.583Z",
      street: "asdf",
      city: "adsf",
      state: "",
      zipCode: "324234",
      department: "Sales",
    },
    {
      firstName: "asfsadf",
      lastName: "asfd",
      birthDate: "2022-11-02T19:01:50.583Z",
      startDate: "2022-11-02T19:01:50.583Z",
      street: "asdf",
      city: "adsf",
      state: "",
      zipCode: "324234",
      department: "Sales",
    },
    {
      firstName: "xxx",
      lastName: "ccc",
      birthDate: "2022-11-02T19:01:50.583Z",
      startDate: "2022-11-02T19:01:50.583Z",
      street: "asdf",
      city: "adsf",
      state: "",
      zipCode: "324234",
      department: "Sales",
    },
  ],
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
