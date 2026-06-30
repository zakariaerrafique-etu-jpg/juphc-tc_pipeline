import React, { useState } from "react";

function FindDoctorSearch({ doctors }) {
  const [result, setResult] = useState([]);

  const search = (text) => {
    setResult(
      doctors.filter((d) =>
        d.speciality.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  return (
    <div>
      <input placeholder="Search doctor" onChange={(e) => search(e.target.value)} />
      {result.map((d, i) => (
        <p key={i}>{d.name} - {d.speciality}</p>
      ))}
    </div>
  );
}

export default FindDoctorSearch;

