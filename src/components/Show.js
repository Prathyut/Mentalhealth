import { blueGrey } from "@mui/material/colors";
import axios from "axios";
import { useState } from "react";
import '../App.css'; // Import the updated CSS

export default function Show() {
  const [result, setResult] = useState(null);

  function handleDelete(email) {
    axios
      .delete("http://localhost:9090/delete", {
        params: {
          email: email,
        },
      })
      .then((res) => {
        alert(res.data);
        setResult(null);
      });
  }

  if (result == null) {
    axios.get("http://localhost:9090/all", {}).then((response) => {
      setResult(response.data);
    });
  }

  if (result) {
    return (
      <div className="table-container">
        <table className="styled-table">
          <thead>
            <tr style={{ backgroundColor: blueGrey[500], color: '#fff' }}>
              <th>Name</th>
              <th>Role</th>
              <th>Email</th>
              <th>Password</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {result.map((innerRow, index) => (
              <tr key={index} className={index % 2 === 0 ? "even-row" : "odd-row"}>
                <td>{innerRow.name}</td>
                <td>{innerRow.role}</td>
                <td>{innerRow.email}</td>
                <td>{innerRow.password}</td>
                <td>
                  <button className="delete-button" onClick={() => handleDelete(innerRow.email)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } else {
    return <div className="fetching">Result is fetching...</div>;
  }
}
