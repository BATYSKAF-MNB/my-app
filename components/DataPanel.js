"use client";
import { useState } from "react";

import styles from "./DataPanel.module.css";

// const DataPanel = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Wprowadzone dane:", formData);
//   };

//   return (
//     <div style={{ maxWidth: "600px", margin: "20px auto" }}>
//       <h1>Panel danych</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Imię i nazwisko:
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//           />
//         </label>
//         <br />
//         <label>
//           Email:
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//         </label>
//         <br />
//         <label>
//           Telefon:
//           <input
//             type="tel"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//           />
//         </label>
//         <br />
//         <label>
//           Adres:
//           <input
//             type="text"
//             name="address"
//             value={formData.address}
//             onChange={handleChange}
//           />
//         </label>
//         <br />
//         <button type="submit">Zapisz</button>
//       </form>
//     </div>
//   );
// };
const DataPanel = () => {
  return (
    <div className={styles.animatedBackground}>
      <div className={styles.panel}>
        <h2 className={styles.title}>Panel Danych</h2>
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="name" className={styles.label}>
              Imię
            </label>
            <input
              type="text"
              id="name"
              className={styles.input}
              placeholder="Wpisz swoje imię"
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="name" className={styles.label}>
              Nazwisko
            </label>
            <input
              type="text"
              id="name"
              className={styles.input}
              placeholder="Wpisz swoje Nazwisko"
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              className={styles.input}
              placeholder="Wpisz swój email"
            />
          </div>
          <button type="submit" className={styles.button}>
            Wyślij
          </button>
        </form>
      </div>
    </div>
  );
};

export default DataPanel;
