import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import styles from './form.module.scss'
import styles2 from './form2.module.scss'

const ProductFormComponent = () => {
    return (
        <div class="BRAND_PRODUCT">
            <div class="BrandName">
                <label htmlFor="BrandName">Brand Name</label>
                <input required type="text" id="BrandName" placeholder='Brand Name' />
            </div>
            <div class="ProductCode">
                <label htmlFor="ProductCode">Product Code</label>
                <input required type="text" id="ProductCode" placeholder='Product Code' />
            </div>
        </div>
    )
}

function Form2() {
    const navigate = useNavigate()
    const [productsExportedComponents, setProductsExportedComponents] = useState([<ProductFormComponent />])
    const [productsProducedComponents, setProductsProducedComponents] = useState([<ProductFormComponent />])

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!event.target.checkValidity()) {
            alert('Please fill out all required fields.');
            return;
        }
        navigate('/form-3');
    };

    return (
        <div className={styles2.form_2}>
            <form onSubmit={handleSubmit}>
                <span>
                    <label htmlFor="CtrlNo">Control Number: </label>
                    <input type="text" id="CtrlNo" placeholder="Control Number" />
                </span>

                <h1>Company Profile</h1>
                <div className="CompanyProfile">

                    <span>
                        <label htmlFor="CompanyNameAcryonym">Company Name:</label>
                        <input required type="text" id="CompanyNameAcronym" placeholder="Acronym" maxLength="4" />
                        <input required type="text" id="CompanyName" placeholder="Company Name" />
                    </span>

                    <span>
                        <h2>Chief Executive: </h2>
                        <input required type="text" id="Surname" placeholder="Surname" />
                        <input required type="text" id="fName" placeholder="First Name" />
                        <input required type="text" id="mInitial" placeholder="M.I." />
                        <input required type="text" id="Pos" placeholder="Position" />
                    </span>

                    <span>
                        <h2>Contact Person for Inquiries:</h2>
                        <input required type="text" id="contact_Surname" placeholder="Surname" />
                        <input required type="text" id="contact_fName" placeholder="First Name" />
                        <input required type="text" id="contact_mInitial" placeholder="M.I." />
                        <input required type="text" id="contact_Pos" placeholder="Position" />
                    </span>

                    <div>
                        <h2>Address: OFFICE FACTORY</h2>
                        <label htmlFor="BldgNo">No./Bldg.Name: </label>
                        <input required type="text" id="BldgName" placeholder="No./Bldg.Name" />
                        <label htmlFor="Street">Street: </label>
                        <input required type="text" id="Street" placeholder="Street" />
                        <label htmlFor="City">City/Mun: </label>
                        <input required type="text" id="City" placeholder="City/Municipality" />
                        <label htmlFor="Province">Province: </label>
                        <input required type="text" id="Province" placeholder="Province" />
                        <label htmlFor="Region">Region: </label>
                        <input required type="text" id="Region" placeholder="Region" />
                        <br />
                        <label htmlFor="telCode">Tel. No.: </label>
                        <input required type="text" id="telCode" placeholder="Country Code" />
                        <input required type="text" id="telNum" placeholder="Number" />
                        <label htmlFor="Telex">Telex No.: </label>
                        <input required type="text" id="Telex" placeholder="Telex Number" />
                        <label htmlFor="Email">E-mail: </label>
                        <input required type="email" id="Email" placeholder="juandelacruz@gmail.com" />
                        <label htmlFor="Facsimile">Facsimile: </label>
                        <input required type="text" id="Facsimile" placeholder="Facsimile" />
                    </div>

                    <div>
                        <h2>PRODUCTS ALREADY EXPORTED AS OF PREVIOUS YEAR: </h2>
                        <button
                            id={styles.add}
                            onClick={(e) => {
                                e.preventDefault();
                                setProductsExportedComponents([...productsExportedComponents, <ProductFormComponent />])
                            }}>
                            + Add Exported Product
                        </button>

                        {productsExportedComponents.map((component, index) => {
                            return (
                                <div key={index}>
                                    <br />
                                    {component}
                                </div>
                            )
                        }
                        )}
                    </div>

                    <div>
                        <h2>PRODUCTS PRODUCED FOR DOMESTIC MARKET ONLY AS OF PREVIOUS YEAR: </h2>
                    </div>

                    <span>
                        <button id={styles.add} onClick={(e) => {
                            e.preventDefault();
                            setProductsProducedComponents([...productsProducedComponents, <ProductFormComponent />])
                        }}>
                            + Add Produced Product
                        </button>
                        {
                            productsProducedComponents.map((component, index) => {
                                return (
                                    <div key={index}>
                                        <br />
                                        {component}
                                    </div>
                                )
                            }
                            )
                        }
                        <br />
                        <label htmlFor="CtrlNo">Control No: </label>
                        <input required type="text" id="CtrlNo" placeholder="Num" />
                    </span>
                </div>

                <footer>
                    <button onClick={() => navigate("/form-1a")} >
                        Prev
                    </button>

                    <button type="submit" className={styles.nextBtn}>
                        Next
                    </button>
                </footer>
            </form>

        </div>
    )
}

export default Form2
