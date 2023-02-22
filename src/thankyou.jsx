import styles from './form.module.scss'
import { useNavigate } from 'react-router-dom'
function ThankYou() {
    const navigate = useNavigate()
    return ( 
        <div className={styles.thankyou}>
            <span>
                Thank you for submitting your product information!
            </span>
            <footer>
                <button onClick={() => navigate("/")} className={styles.centerBtn}>
                    Fill out another response
                </button>
            </footer>
        </div>
     );
}

export default ThankYou;