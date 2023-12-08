import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

const Prediction = () => {
  const [formData, setFormData] = useState({
    firstTermGPA: 0.0,
    secondTermGPA: 0.0,
    firstLanguage: 1,
    funding: 1,
    fastTrack: 2,
    residency: 1,
    highSchool: 0.0,
    mathScore: 0.0,
    englishGrade: 1,
  });


  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setFormData({ ...formData, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)

    try {
      // Replace the URL with your actual backend API endpoint
      const url = 'http://localhost:8080/api/submitForm';
      const { data: res } = await axios.post(url, formData);
      console.log(res.message);
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <div className={styles.left}>

          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1></h1>



            


            <div>
              <label name="firstTermGPA" >
                First Term GPA
              </label>
              <input
                type="number"
                placeholder="First Term GPA"
                name="firstTermGPA"
                min="0.0"
                max="4.5"
                onChange={handleChange}
                value={formData.firstTermGPA}
                className={styles.input}
              />

            </div>


            <div>
              <label name="secondTermGPA" >
                Second Term GPA
              </label>
              <input
                type="text"
                placeholder="Second Term GPA"
                name="secondTermGPA"
                min="0.0"
                max="4.5"
                onChange={handleChange}
                value={formData.secondTermGPA}
                className={styles.input}
              />

            </div>



            <div>
              <label htmlFor="firstLanguage">Select Language</label>
              <select
                name="firstLanguage"
                value={formData.firstLanguage}
                onChange={handleChange}
                className={styles.input}
              >
                <option value="1">English</option>
                <option value="2">French</option>
                <option value="3">Other</option>
              </select>
            </div>




            <div>
              <label htmlFor="funding">Funding</label>
              <select
                name="funding"
                value={formData.funding}
                onChange={handleChange}
                className={styles.input}
              >
                <option value="1">Apprentice_PS</option>
                <option value="2">GPOG_FT</option>
                <option value="3">Intl Offshore</option>
                <option value="4">Intl Regular</option>
                <option value="5">Intl Transfer</option>
                <option value="6">Joint Program Ryerson</option>
                <option value="7">Joint Program UTSC</option>
                <option value="8">Second Career Program</option>
                <option value="9">Work Safety Insurance Board</option>
              </select>
            </div>

            <div>
              <label htmlFor="fastTrack">Fast Track</label>
              <select
                name="fastTrack"
                value={formData.fastTrack}
                onChange={handleChange}
                className={styles.input}
              >
                <option value="1">Y</option>
                <option value="2">N</option>
              </select>
            </div>

            <div>
              <label htmlFor="residency">Residency</label>
              <select
                name="residency"
                value={formData.residency}
                onChange={handleChange}
                className={styles.input}
              >
                <option value="1">Domestic</option>
                <option value="2">International</option>
              </select>
            </div>
            <div>
              <label htmlFor="highSchool">High School Average Mark</label>
              <input
                type="number"
                placeholder="High School Average Mark"
                name="highSchool"
                min="0.0"
                max="100.0"
                onChange={handleChange}
                value={formData.highSchool}
                className={styles.input}
              />
            </div>
            <div>
              <label htmlFor="mathScore">Math Score</label>
              <input
                type="number"
                placeholder="MathScore 0.0-50.0"
                name="mathScore"
                min="0.0"
                max="50.0"
                onChange={handleChange}
                value={formData.mathScore}
                className={styles.input}
              />
            </div>
            <div>
              <label htmlFor="englishGrade">Select Level</label>
              <select
                name="englishGrade"
                value={formData.englishGrade}
                onChange={handleChange}
                className={styles.input}
              >
                <option value="1">Level-130</option>
                <option value="2">Level-131</option>
                <option value="3">Level-140</option>
                <option value="4">Level-141</option>
                <option value="5">Level-150</option>
                <option value="6">Level-151</option>
                <option value="7">Level-160</option>
                <option value="8">Level-161</option>
                <option value="9">Level-170</option>
                <option value="10">Level-171</option>
                <option value="11">Level-180</option>
              </select>
            </div>


            {error && <div className={styles.error_msg}>{error}</div>}
            <button type="submit" className={styles.green_btn}>
              Predict
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Prediction;
