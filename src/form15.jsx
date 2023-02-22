import { useNavigate } from 'react-router-dom'
import styles15 from "./form15.module.scss";
import styles from './form.module.scss'

function Form15() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!event.target.checkValidity()) {
      alert('Please fill out all required fields.');
      return;
    }
    navigate('/form-2');
  };

  return (
    <form className={styles15.Form15}
      onSubmit={handleSubmit}
    >
      <div>
        <span>
          <label>Name of Company </label>
          <input type="text" placeholder="ABC Inc." />
        </span>

        <span>
          <label>Printed name of authorized representative**</label>
          <input type="text" placeholder="Juan D. Cruz" />
        </span>

        <span>
          <label>Signature of authorized representative </label>
          <input required type="file" />
        </span>

        <span>
          <label>Date </label>
          <input required type="date" />
        </span>

        <span>
          <label>
            We wish to be classified under the following industry sector:*
            <br />
            <em>
              (Check only one industry category; if involved in more than one
              industry, choose the industry sector to which you would most like
              to belong)
            </em>
          </label>
          <div className={styles15.industrySector}>
            <label>
              <input required type="radio" name="industry-sector" />
              Automotive parts and accessories
            </label>

            <label>
              <input type="radio" name="industry-sector" />
              Chemical
            </label>

            <label>
              <input type="radio" name="industry-sector" />
              Electronics
            </label>

            <label>
              <input type="radio" name="industry-sector" />
              Fashion accessories fine jewelry
            </label>

            <label>
              <input type="radio" name="industry-sector" />
              Fresh and processed food
            </label>

            <label>
              <input type="radio" name="industry-sector" />
              Footwear and travelgoods
            </label>

            <label>
              <input type="radio" name="industry-sector" />
              Furniture
            </label>

            <label>
              <input type="radio" name="industry-sector" />
              Garments
            </label>

            <label>
              <input type="radio" name="industry-sector" />
              Gifts, toys and housewares
            </label>

            <label>
              <input type="radio" name="industry-sector" />
              Information technology products and services
            </label>

            <label>
              <input type="radio" name="industry-sector" />
              Metal manufacturers
            </label>

            <label>
              <input type="radio" name="industry-sector" />
              None-metallic mineral manufactures
            </label>

            <label>
              <input type="radio" name="industry-sector" />
              Resource-based products (traditional and non-traditional)
            </label>

            <label>
              <input type="radio" name="industry-sector" />
              Textile yarns and fabrics
            </label>
          </div>
        </span>
        <div className={styles15.footnotes}>
          <p>
            <span className={styles15.asterisk}>*</span> This name must be that of
            the person designated as the contact person in the Company A company
            profile. This person will be expected to attend all special and
            general membership meetings. If unable to attend any meeting, this
            person must assign his proxy to his appointed representative or to
            Company A.
          </p>
          <p>
            <span className={styles15.asterisk}>**</span> If you have questions
            regarding the classification of your company, please contact
            MEMBERSHIP DIVISION.
          </p>
          <p>
            <span className={styles15.asterisk}>IMPORTANT</span> Please enclose
            picture/brochures (promotional materials) of your products/services
            you offered.
          </p>
        </div>

        <footer>
          <button onClick={() => navigate("/")} >
            Prev
          </button>

          <button
            type="submit"
            // onClick={()=>{
            //   navigate('/form-2')
            // }}
            className={styles.nextBtn}>
            Next
          </button>
        </footer>
      </div>

    </form>
  );
}

export default Form15;
