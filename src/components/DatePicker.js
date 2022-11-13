import ReactDatePicker from "react-datepicker"

import "react-datepicker/dist/react-datepicker.css"

export default function DatePicker({ label, id, selected, onChange }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <ReactDatePicker id={id} selected={selected} onChange={onChange} />
    </>
  )
}
