import { useNavigate } from 'react-router-dom'
import styles from './form.module.scss'
import styles2 from './form2.module.scss'

function Form2() {
    const navigate = useNavigate()
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
                    <label htmlFor="CtrlNo">Control No: </label>
                    <input required type="text" id="CtrlNo" placeholder="Num" />
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
                        <div class="BRAND_PRODUCT">
                            <div class="BrandName">
                                <h3>Brand Name</h3>
                                <input required type="text" id="BrandName" />
                            </div>
                            <div class="ProductCode">
                                <h3>Product Code</h3>
                                <input required type="text" id="BrandName" maxlength="7" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2>PRODUCTS PRODUCED FOR DOMESTIC MARKET ONLY AS OF PREVIOUS YEAR: </h2>
                        <div class="BRAND_PRODUCT">
                            <div class="BrandName">
                                <h2>Brand Name</h2>
                            </div>
                            <div class="ProductCode">
                                <h3>Product Code</h3>
                                <input required type="text" id="BrandName" maxlength="7" placeholder='Product Code' />
                            </div>
                        </div>
                    </div>

                    <span>
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
