import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import styles from "./form4.module.scss";

function Form4() {
  const [otherCheck, setOtherCheck] = useState(false);
  const [skills, setSkills] = useState([]);

  const handleOther = () => {
    setOtherCheck(!otherCheck);
  };

  const handleAddSkills = () => {
    setSkills(() => [...skills, <input type="text" className={styles.skillInput} />]);
  };

  const handleDelSkills = () => {
    setSkills((skillInp) => skillInp.slice(0, -1));
  };

  return (
    <div className={styles.Form4}>
      <form>
        <span>
          <label>Production Technology/Patents/PSA License: </label>
          <input type="text" />
        </span>

        <span>
          <label>Technical Skills Available: </label>
          <input type="text" className={styles.skillInput}/>
          {skills}
          <div className={styles.buttonSkillInput}>
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
          <div className={styles.salesAids}>
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
    </div>
  );
}

export default Form4;
