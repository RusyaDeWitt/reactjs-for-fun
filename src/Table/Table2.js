function Tables(){

  const [students, setStudents] = useState([])
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [age, setAge] = useState("")

  const onChangeName = (event) => setName(event.target.value)
  const onChangeSurname = (event) => setSurname(event.target.value)
  const onChangeAge = (event) => setAge(event.target.value)

  const onSubmit = () => {
    setStudents(prev => prev.concat([{
      name:name,
    }]))
    setName("")
    setSurname("")
    setAge("")
  }

  return(
    <div className="Table">
      <input name="name" onChange={onChangeName} value={name} />
      <input name="surname" onChange={onChangeSurname} value={surname} />
      <input name="age" onChange={onChangeAge} value={age} />
      <button onClick={onSubmit}>submit</button>

      <Table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
          </tr>
        </thead>
          <tbody>
              {students.map(student => {
                  return <tr>{student}</tr>;
              })}
          </tbody>
      </Table>
    </div>
  )

}
