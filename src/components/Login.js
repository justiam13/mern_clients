import React, { useState } from "react";
//import axios from "axios"; // Import Axios
export default function Login() {
const [formData, setForm] = useState({
email: "",
password: ""});
const handleChange = (e) => {
const { id, value } = e.target;
setForm((prevFormData) => ({...prevFormData,[id]: value}));
}
}