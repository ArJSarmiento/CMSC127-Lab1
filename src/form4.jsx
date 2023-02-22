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
    setSkills(() => [...skills, <input type="text" className={styles4.skillInput} />]);
  };

  const handleDelSkills = () => {
    setSkills((skillInp) => skillInp.slice(0, -1));
  };

  return (
    <div className={styles4.Form4}>
      <form>
        <span>
          <label>Production Technology/Patents/PSA License: </label>
          <input type="text" />
        </span>

        <span>
          <label>Technical Skills Available: </label>
          <input type="text" className={styles4.skillInput}/>
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
              <input id="hiddenInput" type="input" />
            </span>
          ) : null}
        </span>

        <span>
          <label>Control Number: </label>
          <input type="text" />
        </span>
      </form>

      <footer>
        <button onClick={() => navigate("/form-3")} >
            Prev
        </button>
        <button onClick={() => navigate("/thank-you")} className={styles.nextBtn}>
            Submit
        </button>
      </footer>
    </div>
  );
}

export default Form4;
