import "./Home.css";

function Home() {
    return (
        <div className="home-page">
            <nav className="navbar">
                <h1>FITFORGE</h1>

                <div className="nav-links">

                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#diet">Diet Plan</a>
                    <a href="#workout">Workout Plan</a>
                    <a href="#profile">Profile</a>
                    <a href="#pricing">Pricing</a>

                </div>

            </nav>

            <section className="hero-section" id="home">

                <h1>WELCOME TO FITFORGE</h1>
                <p>Start your fitness journey now , build crazzyyy physique with us and stay healthy...</p>
                <button>Explore Workout</button>

            </section>

            <section className="feature-section" id="about">
                <h2>WHY CHOOSE FITFORGE</h2>

                <div className="feacture-cards">
                    <div className="feature-card">
                        <h3>WORKOUT PLAN</h3>
                        <p>Explore your workout if u want to build strength do compound moment and if u want to increase your muscle mass do hypertrophy moment</p>
                    </div>
                    <div className="feature-card">
                        <h3>DIET PLAN</h3>
                        <p>Discover your balanced diet with balanced macros and guidance</p>
                    </div>
                    <div className="feature-card">
                        <h3>PREMIUM MEMBERSHIP</h3>
                        <p>Unlock your effective workout plan and proper diet plan with tracking macros</p>
                    </div>
                </div>
            </section>

            <section className="membership-section" id="pricing">
                <h2>CHOOSE YOUR PLAN</h2>
                <div className="membership-cardS">
                    <div className="membership-card">
                        <h3>FREE</h3>
                        <p>BASIC WORKOUT PLAN</p>
                        <p>BASIC DIET PLAN</p>
                        <p>FITNESS ARCHITECTURE</p>
                        <button>CURRENT PLAN</button>
                    </div>

                    <div className="membership-card">
                        <h3>PREMIUM USERS</h3>
                        <p>ADVANCE WORKOUT PLANS </p>
                        <p>PROPER GUIDANCE OF DIET </p>
                        <p>PROGRESS TRACK</p>
                        <button>UPGRADE</button>
                    </div>

                </div>
            </section>
        </div>
    )
}
export default Home;