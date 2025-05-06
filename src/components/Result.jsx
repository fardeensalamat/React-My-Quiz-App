import styles from '../styles/Result.module.css';

function Result({ score }) {
    const message_good = "Your Score is Good";
    const message_avg = "Your Score is Average";
    const message_bad = "Your Score is Poor";

    let message = '';
    let styleClass = '';

    if (score >= 4) {
        message = message_good;
        styleClass = styles.good;
    } else if (score === 3) {
        message = message_avg;
        styleClass = styles.average;
    } else {
        message = message_bad;
        styleClass = styles.bad;
    }

    const handleRetry = () => {
        window.location.reload();
    };

    return (
        <div className={styles.resultContainer}>
            <div className={`${styles.card} ${styleClass}`}>
                <h2>Score: {score}</h2>
                <p>Remarks: {message}</p>
                <button className="btn btn-primary mt-3" onClick={handleRetry}>
                    Retry
                </button>
            </div>
        </div>
    );
}

export default Result;
