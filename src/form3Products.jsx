import React from 'react'
import { useState } from "react";
import styles from "./form.module.scss";


const Form3Products = () => {
  const [showOtherUnit, setShowOtherUnit] = useState("");
  return (
    <>
      <div>
        {/* component */}

        <span>
          <label htmlFor="product-name">Product: </label>
          <input type="text" id="product-name" placeholder="Product Name" />
        </span>

        <h3>Product Description and Specifications</h3>

        <span>
          <label htmlFor="brand-name">Local Brand Name: </label>
          <input type="text" id="brand-name" placeholder="Local Brand Name" />
        </span>

        <span>
          <label htmlFor="export">Export Brand Name: </label>
          <input type="text" id="export" placeholder="Export Brand Name" />
        </span>

        <span>
          <label htmlFor="technical-specification">Technical Specifications: </label>
          <textarea type="text" id="technical-specification" placeholder="Technical Specifications" />
        </span>

        <span>
          <label htmlFor="function">Function: </label>
          <textarea type="text" id="function" placeholder="Function" />
        </span>

        <span>
          <label htmlFor="color">Color: </label>
          <input type="text" id="color" placeholder="Color" />
        </span>

        <span>
          <label htmlFor="size">Sizes: </label>
          <input type="text" id="size" placeholder="Size" />
        </span>
      </div>

      <div>
        <h3>Packaging/Labeling/Marking Details</h3>

        <span>
          <label htmlFor="unit">Unit: </label>
          <select
            onChange={(e) => {
              setShowOtherUnit(e.target.value);
            }}
          >
            <option value="" hidden></option>
            <option value="piece">Piece</option>
            <option value="bottle">Bottle</option>
            <option value="par">Par</option>
            <option value="other">Other</option>
          </select>
          {
            // if other, show input
            showOtherUnit === "other" ?
              <input type="text" id={styles.other_unit} placeholder="Other" />
              :
              null
          }
        </span>

        <span>
          <label htmlFor="net-weight">Net weight per unit: </label>
          <input type="text" id="net-weight" placeholder="Net weight per unit" />
        </span>

        <span>
          <label htmlFor="units-per-pack">No. of units per pack: </label>
          <input type="text" id="units-per-pack" placeholder="No. of units per pack" />
        </span>

        <span>
          <label htmlFor="weight-per-pack">No. of weight per pack: </label>
          <input type="text" id="weight-per-pack" placeholder="No. of weight per pack" />
        </span>

        <span>
          <label htmlFor="units-per-20">No. of units per 20 FCL: </label>
          <input type="text" id="units-per-20" placeholder="No. of units per 20 FCL" />
        </span>

        <span>
          <label htmlFor="units-per-40">No. of units per 40 FCL: </label>
          <input type="text" id="units-per-40" placeholder="No. of units per 40 FCL" />
        </span>

      </div>


      <h3>Major Raw Materials/Components Used:</h3>

      { // component
        <div>

          <span>
            <label htmlFor="material-used">Material used: </label>
            <input type="text" id="material-used" placeholder="Material used" />
          </span>

          <span>
            <label htmlFor="quantity-used">Quantity used: </label>
            <input type="text" id="quantity-used" placeholder="Quantity used" />
          </span>

          <span>
            <label htmlFor="is-required">Is the material a required raw material?</label>
            <input type="checkbox" id="is-required" />
          </span>

          <span>
            <label htmlFor="">Material Source: </label>
            <select>
              <option value="" hidden></option>
              <option value="domestic">Domestic</option>
              <option value="imported">Imported</option>
            </select>
          </span>

        </div>
      }
    </>
  )
}

export default Form3Products