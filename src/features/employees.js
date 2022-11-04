import { createSlice } from "@reduxjs/toolkit"

const { actions, reducer } = createSlice({
  name: "employees",
  initialState: [
    {
      firstName: "a",
      lastName: "b",
      birthDate: "2022-11-02T19:01:50.583Z",
      startDate: "2022-11-02T19:01:50.583Z",
      street: "c",
      city: "d",
      state: "e",
      zipCode: "9999",
      department: "f",
    },
    {
      firstName: "g",
      lastName: "h",
      birthDate: "2022-11-02T19:01:50.583Z",
      startDate: "2022-11-02T19:01:50.583Z",
      street: "i",
      city: "j",
      state: "k",
      zipCode: "324234",
      department: "l",
    },
    {
      firstName: "m",
      lastName: "n",
      birthDate: "2022-11-02T19:01:50.583Z",
      startDate: "2022-11-02T19:01:50.583Z",
      street: "o",
      city: "p",
      state: "q",
      zipCode: "r",
      department: "s",
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
