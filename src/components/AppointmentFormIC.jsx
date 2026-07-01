import { useState } from "react";

function AppointmentFormIC({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: ""
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone Number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone Number must contain 10 digits";
    }

    if (!formData.date) {
      newErrors.date = "Date is required";
    }

    if (!formData.time) {
      newErrors.time = "Time is required";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    setErrors({
      ...errors,
      [e.target.name]: ""
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (onSubmit) {
      onSubmit(formData);
    }

    alert("Appointment booked successfully!");

    setFormData({
      name: "",
      phone: "",
      date: "",
      time: ""
    });
  };

  return (
    <form onSubmit={handleSubmit} className="appointment-form">

      <h2>Book Appointment</h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <p className="error">{errors.name}</p>

      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
      />
      <p className="error">{errors.phone}</p>

      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
      />
      <p className="error">{errors.date}</p>

      <input
        type="time"
        name="time"
        value={formData.time}
        onChange={handleChange}
      />
      <p className="error">{errors.time}</p>

      <button type="submit">
        Book Appointment
      </button>

    </form>
  );
}

export default AppointmentFormIC;
