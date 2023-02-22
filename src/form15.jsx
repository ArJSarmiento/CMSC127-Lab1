import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import styles from "./form15.module.scss";

function Form15() {
  return (
    <div className={styles.Form15}>
      <form>
        <span>
          <label>Name of Company </label>
          <input type="text" placeholder="Juan D. Cruz" />
        </span>

        <span>
          <label>Printed name of authorized representative**</label>
          <input type="text" />
        </span>

        <span>
          <label>Signature of authorized representative </label>
          <input type="file" />
        </span>

        <span>
          <label>Date </label>
          <input type="date" />
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
          <div className={styles.industrySector}>
            <label>
              <input type="radio" name="industry-sector1" />
              Automotive parts and accessories
            </label>

            <label>
              <input type="radio" name="industry-sector2" />
              Chemical
            </label>

            <label>
              <input type="radio" name="industry-sector3" />
              Electronics
            </label>

            <label>
              <input type="radio" name="industry-sector4" />
              Fashion accessories fine jewelry
            </label>

            <label>
              <input type="radio" name="industry-sector5" />
              Fresh and processed food
            </label>

            <label>
              <input type="radio" name="industry-sector6" />
              Footwear and travelgoods
            </label>

            <label>
              <input type="radio" name="industry-sector7" />
              Furniture
            </label>

            <label>
              <input type="radio" name="industry-sector8" />
              Garments
            </label>

            <label>
              <input type="radio" name="industry-sector9" />
              Gifts, toys and housewares
            </label>

            <label>
              <input type="radio" name="industry-sector10" />
              Information technology products and services
            </label>

            <label>
              <input type="radio" name="industry-sector11" />
              Metal manufacturers
            </label>

            <label>
              <input type="radio" name="industry-sector12" />
              None-metallic mineral manufactures
            </label>

            <label>
              <input type="radio" name="industry-sector13" />
              Resource-based products (traditional and non-traditional)
            </label>

            <label>
              <input type="radio" name="industry-sector14" />
              Textile yarns and fabrics
            </label>
          </div>
        </span>
        <div className={styles.footnotes}>
          <p>
            <span className={styles.asterisk}>*</span> This name must be that of
            the person designated as the contact person in the Company A company
            profile. This person will be expected to attend all special and
            general membership meetings. If unable to attend any meeting, this
            person must assign his proxy to his appointed representative or to
            Company A.
          </p>
          <p>
            <span className={styles.asterisk}>**</span> If you have questions
            regarding the classification of your company, please contact
            MEMBERSHIP DIVISION.
          </p>
          <p>
            <span className={styles.asterisk}>IMPORTANT</span> Please enclose
            picture/brochures (promotional materials) of your products/services
            you offered.
          </p>
        </div>
      </form>
    </div>
  );
}

export default Form15;
