import { useState } from "react";
import styles4 from "./form4.module.scss";
import styles from "./form.module.scss";
import { useNavigate } from "react-router-dom";

function Form4() {
  const [otherCheck, setOtherCheck] = useState(false);
  const [skills, submitsetSkills] = useState([]);
  const navigate = useNavigate()

  const handleOther = () => {
    setOtherCheck(!otherCheck);
  };

  const handleAddSkills = () => {
    submitsetSkills(() => [...skills, <input required type="text" className={styles4.skillInput} key={skills.length} />]);
  };

  const handleDelSkills = () => {
    submitsetSkills((skillInp) => skillInp.slice(0, -1));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!event.target.checkValidity()) {
      alert('Please fill out all required fields.');
      return;
    }
    navigate('/thank-you');
  };

  return (
    <div className={styles4.Form4}>
      <form onSubmit={handleSubmit}>
        <span>
          <label>Production Technology/Patents/PSA License: </label>
          <input required type="text" />
        </span>

        <span>
          <label>Technical Skills Available: </label>
          <input required type="text" className={styles4.skillInput} />
          {skills}
          <div className={styles4.buttonSkillInput}>
            <button type="button" onClick={handleAddSkills}>
              Add new input field
            </button>
            <button type="button" onClick={handleDelSkills}>
              Delete input field
            </button>
          </div>
        </span>

        <span>
          <label>
            Availability of Sales Aids (Please enclose available sales aids){" "}
          </label>
          <div className={styles4.salesAids}>
            <label>
              <input type="checkbox" name="sales-aids1" />
              Samples
            </label>
            <label>
              <input type="checkbox" name="sales-aids2" />
              Photos
            </label>
            <label>
              <input type="checkbox" name="sales-aids3" />
              Catalogues
            </label>
            <label>
              <input type="checkbox" name="sales-aids4" />
              Price List
            </label>
            <label>
              <input
                type="checkbox"
                name="salesAids4"
                id="others"
                onChange={handleOther}
              />
              Others
            </label>
          </div>
          {otherCheck == true ? (
            <span>
              <label>Please Specify: </label>
              <input required id="hiddenInput" type="text" />
            </span>
          ) : null}
        </span>

        <span>
          <label>Control Number: </label>
          <input required type="text" />
        </span>
        <footer>
          <button onClick={() => navigate("/form-3")} >
            Prev
          </button>
          <button type="submit" className={styles.nextBtn}>
            Submit
          </button>
        </footer>
      </form>

    </div>
  );
}

export default Form4;
