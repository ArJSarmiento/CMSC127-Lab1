import { useState } from "react";
import styles from "./form.module.scss";
import Form3Products from "./form3Products";
import { useNavigate } from "react-router-dom";

export default function Form3() {

    const navigate = useNavigate();
    const [components, setComponents] = useState([<Form3Products />]);

    const addComponent = () => {
        setComponents([...components, <Form3Products key={components.length} />]);
    };

    const removeComponent = (index) => {
        const updatedComponents = [...components];
        updatedComponents.splice(index, 1);
        setComponents(updatedComponents);
    };

    // const Products = [];

    // for (let i = 0; i < numProducts; i++) {
    //     Products.push(
    //         <div key={i}>
    //             {
    //                 numProducts == 1 ?
    //                     null
    //                     :
    //                     <button
    //                         onClick={(e) => {
    //                             e.preventDefault();
    //                             setNumProducts(numProducts - 1);
    //                         }}
    //                     >
    //                         <img src={trashCan} />
    //                     </button>
    //             }
    //             <Form3Products />
    //         </div>
    //     );
    // }

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

                <hr />

                {components.map((component, index) => (
                    <div key={index}>
                        <button
                        id={styles.delete}
                        onClick={(e) => {
                            e.preventDefault();
                            removeComponent(index)
                        }}>
                            Delete Product
                        </button>
                        {component}
                    </div>
                ))}



            </form>
            <span className={styles.btnContainer}>

                <button
                    id={styles.add}
                    onClick={(e) => {
                        e.preventDefault();
                        addComponent()
                    }}>
                    + Add Another Product
                </button>
            </span>

            <footer>
                <button onClick={() => navigate("/form-2")} >
                    Prev
                </button>

                <button onClick={() => navigate("/form-4")} className={styles.nextBtn}>
                    Next
                </button>
            </footer>

        </section>
    );
}

