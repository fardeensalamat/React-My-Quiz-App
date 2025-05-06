import styles from '../styles/Introduction.module.css'

function Introduction({ onStart }) {
    return (

        <div className={styles.intro}>

                <div className="container">
                    <h1>Welcome to the Quiz App!</h1>

                    <p>
                        Here, you will be given 5 questions. 
                        There are no negative marks or time limitation, so try to answer all the questions.
                        Best of luck!
                    </p>

                    <div>
                        <button
                            type="button"
                            className="btn btn-success w-100"
                            onClick={onStart}
                        >
                            Start
                        </button>
                    </div>
                </div>
                
        </div>


    );
}

export default Introduction;
