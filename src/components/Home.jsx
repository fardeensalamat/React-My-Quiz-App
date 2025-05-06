import { useState } from 'react';
import Header from './Header';
import Introduction from './Introduction';
import Questions from './Questions';
import Footer from './Footer';

function Home() {
    const [quizStarted, setQuizStarted] = useState(false);

    return (
        <>
            <Header />

            {!quizStarted ? (
                <Introduction onStart={() => setQuizStarted(true)} />
            ) : (
                <Questions />
            )}

            <Footer />
        </>
    );
}

export default Home;
