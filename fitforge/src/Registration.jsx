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
            name: name,
            email: email,
            password: pwd
        });
    };

    return (
        <div className="registration-container">
            <form className="registration-box" onSubmit={handleSubmit}>
                <h3>CREATE ACCOUNT</h3>

                <input type="text"
                    value={name}
                    placeholder="ENTER YOUR NAME"
                    onChange={(e) => setname(e.target.value)}
                    required />

                <input type="email"
                    value={email}
                    placeholder="ENTER YOUR EMAIL"
                    onChange={(e) => setemail(e.target.value)}
                    required />

                <input type="password"
                    value={pwd}
                    placeholder="ENTER YOUR PASSWORD"
                    onChange={(e) => setpwd(e.target.value)}
                    required />

                <input type="password"
                    value={confirmpwd}
                    placeholder="CONFIRM PASSWORD"
                    onChange={(e) => setconfirmpwd(e.target.value)}
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