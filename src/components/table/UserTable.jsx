import React, { useEffect, useState } from "react";
import useHttp from "../../hooks/use-http";
import Spinner from "../../UI/Spinner";
import "./UserTable.css";

const UserTable = () => {
  const [userData, setUserData] = useState([]);
  const { isLoading, error, fetchHandler: getData } = useHttp();
  useEffect(() => {
    getData(
      {
        url: "https://seed-cart-7d0b9-default-rtdb.asia-southeast1.firebasedatabase.app/users.json",
      },
      (data) => setUserData(data)
    );
  }, [getData]);
  return (
    <div>
      {isLoading && <Spinner />}
      {error && <h2 style={{ color: "red" }}>Error in Loading data</h2>}
      <table className="result">
        <thead>
          <tr style={{ color: "black" }}>
            <th>Name</th>
            <th>Email</th>
            <th>Phone No.</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(userData).map((each) => {
            return (
              <tr key={each}>
                <td>{userData[each].name} </td>
                <td>{userData[each].email}</td>
                <td>{userData[each].number}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
