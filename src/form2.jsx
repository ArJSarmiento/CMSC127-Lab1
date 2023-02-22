import { useNavigate } from 'react-router-dom'
import styles from './form.module.scss'
import styles2 from './form2.module.scss'

function Form2() {
    const navigate = useNavigate()
    return (
        <div className={styles2.form_2}>
            <form>
                <span>
                    <label htmlFor="CtrlNo">Control No: </label>
                    <input type="text" id="CtrlNo" placeholder="Num" />
                </span>

                <h1>Company Profile</h1>
                <div className="CompanyProfile">

                    <span>
                        <label htmlFor="CompanyNameAcryonym">Company Name:</label>
                        <input type="text" id="CompanyNameAcronym" placeholder="Acronym" maxlength="4" />
                        <input type="text" id="CompanyName" placeholder="Company Name" />
                    </span>

                    <span>
                        <h2>Chief Executive: </h2>
                        <input type="text" id="Surname" placeholder="Surname" />
                        <input type="text" id="fName" placeholder="First Name" />
                        <input type="text" id="mInitial" placeholder="M.I." />
                        <input type="text" id="Pos" placeholder="Position" />
                    </span>

                    <span>
                        <h2>Contact Person for Inquiries:</h2>
                        <input type="text" id="contact_Surname" placeholder="Surname" />
                        <input type="text" id="contact_fName" placeholder="First Name" />
                        <input type="text" id="contact_mInitial" placeholder="M.I." />
                        <input type="text" id="contact_Pos" placeholder="Position" />
                    </span>

                    <div>
                        <h2>Address: OFFICE FACTORY</h2>
                        <label htmlFor="BldgNo">No./Bldg.Name: </label>
                        <input type="text" id="BldgName" placeholder="No./Bldg.Name" />
                        <label htmlFor="Street">Street: </label>
                        <input type="text" id="Street" placeholder="Street" />
                        <label htmlFor="City">City/Mun: </label>
                        <input type="text" id="City" placeholder="City/Municipality" />
                        <label htmlFor="Province">Province: </label>
                        <input type="text" id="Province" placeholder="Province" />
                        <label htmlFor="Region">Region: </label>
                        <input type="text" id="Region" placeholder="Region" />
                        <label htmlFor="telCode">Tel. No.: </label>
                        <input type="telCode" id="telCode" placeholder="Country Code" />
                        <input type="text" id="telNum" placeholder="Number" />
                        <label htmlFor="Telex">Telex No.: </label>
                        <input type="text" id="Telex" placeholder="Telex Number" />
                        <label htmlFor="Email">E-mail: </label>
                        <input type="email" id="Email" placeholder="juandelacruz@gmail.com" />
                        <label htmlFor="Facsimile">Facsimile: </label>
                        <input type="text" id="Facsimile" placeholder="Facsimile" />
                    </div>

                    <div>

                        <h2>PRODUCTS ALREADY EXPORTED AS OF PREVIOUS YEAR: </h2>
                        <div class="BRAND_PRODUCT">
                            <div class="BrandName">
                                <h3>Brand Name</h3>
                                <input type="text" id="BrandName" />
                            </div>
                            <div class="ProductCode">
                                <h3>Product Code</h3>
                                <input type="text" id="BrandName" maxlength="7" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2>PRODUCTS PRODUCED FOR DOMESTIC MARKET ONLY AS OF PREVIOUS YEAR: </h2>
                        <div class="BRAND_PRODUCT">
                            <div class="BrandName">
                                <h2>Brand Name</h2>
                                <h3>How many products would you like to enter?</h3>
                                <input type="number" id="NumOfProduct" placeholder="Number of Products" />
                            </div>
                            <div class="ProductCode">
                                <h3>Product Code</h3>
                                <input type="text" id="BrandName" maxlength="7" placeholder='Product Code' />
                            </div>
                        </div>
                    </div>

                    <span>
                        <label htmlFor="CtrlNo">Control No: </label>
                        <input type="text" id="CtrlNo" placeholder="Num" />
                    </span>
                </div>
            </form>

            <footer>
                <button onClick={() => navigate("/")} >
                    Prev
                </button>

                <button onClick={() => navigate("/form-3")} className={styles.nextBtn}>
                    Next
                </button>
            </footer>
        </div>
    )
}

export default Form2
