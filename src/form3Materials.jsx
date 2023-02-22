import React from 'react'
import styles from './form.module.scss'

const Form3Materials = () => {
    return (
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
    )
}

export default Form3Materials