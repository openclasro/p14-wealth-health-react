export default function Select({ id, label, onChange, options, value }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <select value={value} onChange={onChange} name={id}>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </>
  )
}
