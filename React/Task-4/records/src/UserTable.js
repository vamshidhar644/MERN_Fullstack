import React, { useEffect, useState } from 'react';

const UserTable = () => {
  const [data, setdata] = useState();

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((response) => response.json())
      .then((json) => {
        if (Array.isArray(json.users)) {
          setdata(json.users);
        } else {
          setdata([]);
        }
      })
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h1>User Records</h1>
      <table>
        <thead>
          <tr>
            <th>firstName</th>
            <th>lastName</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
            <th className="heading">Phone</th>
            <th>UserName</th>
            <th>DOB</th>
            <th>Image</th>
            <th>Height</th>
            <th>Weight</th>
            <th>City</th>
            <th>Lat</th>
            <th>Lng</th>
            <th>cardExpire</th>
            <th>CompanyName</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((user) => (
              <tr key={user.id}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.username}</td>
                <td>{user.birthDate}</td>
                <td>{user.image}</td>
                <td>{user.height}</td>
                <td>{user.weight}</td>
                <td>{user.address.city}</td>
                <td>{user.address.coordinates.lat}</td>
                <td>{user.address.coordinates.lng}</td>
                <td>{user.bank.cardExpire}</td>
                <td>{user.company.name}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
