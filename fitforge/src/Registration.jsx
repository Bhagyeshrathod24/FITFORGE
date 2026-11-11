import "./Registration.css";
import { useState } from "react";

function Registration({ onLogin, onRegistration }) {

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [pwd, setpwd] = useState("");
    const [confirmpwd, setconfirmpwd] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (pwd !== confirmpwd) {
            alert("your password is mismatch");
            return;
        }
        onRegistration({
            name,
            email,
            pwd
        });
    };

    return (
        <div className="registration-container">
            <form className="registration-box" onSubmit={handleSubmit}>
                <h3>CREATE ACCOUNT</h3>

                <input type="text"
                    value={name}
                    placeholder="ENTER YOUR NAME"
                    onDurationChange={(e) => setname(e.target.value)}
                    required />

                <input type="email"
                    value={email}
                    placeholder="ENTER YOUR EMAIL"
                    onDurationChange={(e) => setemail(e.target.value)}
                    required />

                <input type="password"
                    value={pwd}
                    placeholder="ENTER YOUR PASSWORD"
                    onDurationChange={(e) => setpwd(e.target.value)}
                    required />

                <input type="password"
                    value={confirmpwd}
                    placeholder="CONFIRM PASSWORD"
                    onDurationChange={(e) => setconfirmpwd(e.target.value)}
                    required />

                <button type="submit">REGISTER</button>

                <p>
                    Already have an account ?
                    <span onClick={onLogin}> LOGIN </span>
                </p>


            </form>
        </div>
    );
}
export default Registration;