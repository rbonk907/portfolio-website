import styles from '../styles/FormSuccess.module.css';

const FormSuccess = () => {
    return (
        <div className={styles.formSuccess}>
            <h3>THANK YOU</h3>
            <p>
                I&apos;ll reach out to you as soon as possible 
                <span className={styles.emoji}>👍</span>
            </p>
        </div>
    )
}

export default FormSuccess;