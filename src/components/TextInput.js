export default function TextInput({ label, id, onChange, value, type }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        type={type ? type : "text"}
        id={id}
      />
    </>
  )
}
