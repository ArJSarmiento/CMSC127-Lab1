import styles from './form.module.scss'
import { useNavigate } from 'react-router-dom'
import styles1 from './form1.module.scss'

function Form1() {
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!event.target.checkValidity()) {
            alert('Please fill out all required fields.');
            return;
        }
        navigate("/form-1a");
    };

    return (
        <form className={`${styles.form} ${styles1.form}`} onSubmit={handleSubmit}>
            <section className={styles.board_member_header}>
                <div className={styles.header_info}>
                    <h1>The Board of Trustees</h1>
                    <div>Company A</div>
                    <div>Company A Complex</div>
                    <div>Company A Address</div>
                </div>

                <input required type='date' />
            </section>

            <section>
                <h2>Gentlemen:</h2>
                <div>We would like to apply for membership at Company A Export Federation as a:</div>
                <input required type="text" />
                <span>Regular Member</span>
            </section>

            <section>
                <h2>
                    Qualifications:
                </h2>
                <ol>
                    <li>Registered exporter of goods and/or services</li>
                    <li>In operation for at least one year.</li>
                    <li>Sponsored by any member of the Board of Trustees</li>
                    <li>No serious derogatory information about them supplied by reliable sources.</li>
                </ol>
                <input required type="text" />
                <span>Associate Member</span>
            </section>

            <section>
                <h2>
                    Qualifications:
                </h2>
                <ol>
                    <li>
                        Companies other than direct exporters that contribute to Philippine exports such as:
                        <ol>
                            <li>Banks h. Producers of packing materials</li>
                            <li>Shipping Companies i. Foreign BUyers</li>
                            <li>Airline companies j. Printers</li>
                            <li>Insurance companies k. Hotels</li>
                            <li>Chamber of commerce/trade associations I. Trading companies</li>
                            <li>Trucking/freight companies</li>
                            <li>
                                Brokers/forwarders(please specify)
                                <input required type="text" />
                            </li>
                        </ol>
                    </li>
                    <li>Registered in the Philippines</li>
                    <li>In operation for at least one year</li>
                    <li>Sponsored by any member of the Board of Trustees</li>
                    <li>No serious derogatory information about them supplied by reliable sources.</li>
                </ol>
                <input required type="text" />
                <span>Provisional Member</span>
            </section>

            <section>
                We understand that an annual membership fee of P2,000 and a one-time entrance fee of P700.00 is payable on the date of approval of application.
                <br />
                Enclosed are out accomplished company and product forms. (Applicants for Associate Membership do not need to submit product profile forms.)
                <br />
                *Applicants who have been in operation for less than one  (1) year, but who otherwise qualify as regular members, shall be admitted as provisional members.
                <br />
                Sponsored by: Very truly yours,
                <br />
                <input required type="text" placeholder='Trustee' />
                <h3>Signature</h3>
                <input required type='file' />
            </section>

            <footer>
                <button type="submit" className={styles.nextBtn}>
                    Next
                </button>
            </footer>
        </form>
    )
}

export default Form1