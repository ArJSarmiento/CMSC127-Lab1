import { useState } from "react";
import styles from "./form.module.scss";
import Form3Products from "./form3Products";

import trashCan from "./assets/trash-can-solid.svg";

export default function Form3() 
{
    const [showOtherUnit, setShowOtherUnit] = useState("");
    const [numProducts, setNumProducts] = useState("5");
    const [numMaterials, setNumMaterials] = useState("1");

    const Products = [];

    for (let i=0; i<numProducts; i++){
        Products.push(
        <div key={i}>
            {
                numProducts == 1 ? 
                null 
                : 
                <button>
                    <img src={trashCan}/>
                </button>
            }
            <Form3Products />
        </div>
        );
    }

    return (
        <section className={styles.form}>

            <header>
                <h1>Product Sheet</h1>
            </header>
            
            <form id={styles.form3}>

            <span>
                <label htmlFor="comppany-name">Company Name: </label>
                <input type="text" id="comppany-name" placeholder="Company Name" />
            </span>

            

            {Products}
            
                <span className={styles.btnContainer}>

                    <button
                    onClick={(e)=>{
                        e.preventDefault();
                    }}>
                        + Add Another Product
                    </button>

                </span>

            </form>

        </section>
    );
}

