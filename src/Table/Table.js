import React, { useEffect, useState , Component } from "react";
import { Table } from 'react-bootstrap';


function Tables() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");

  const addItem = event => {
    event.preventDefault();
    setStudents([...students,
      {
        id: students.length,
        name: name,
        surname: surname,
        age: age
      }
    ]);
    setName("");
    setSurname("");
    setAge("");
    console.log(students)
  };
  return (
    <div>

        <label>
          <input
            name="name"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            name="surname"
            type="text"
            value={surname}
            onChange={e => setSurname(e.target.value)}
          />
          <input
            name="age"
            type="text"
            value={age}
            onChange={e => setAge(e.target.value)}
          />
        </label>
        <button onClick={addItem}> Add </button>

        <Table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
        {students.map(student => (
          <tr>
            <th>{student.name}</th>
            <th>{student.surname}</th>
            <th>{student.age}</th>
          </tr>
        ))}
        </tbody>
        </Table>

    </div>
  );
}
export default Tables
