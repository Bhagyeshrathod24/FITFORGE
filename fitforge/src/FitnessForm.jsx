import "./FitnessForm.css";
import { useState } from "react";

function FitnessForm({ onBack, onSubmit }) {

    const questions = [
        {
            field: "gender",
            question: "Gender",
            options: ["Male", "Female"]
        },

        {
            field: "age",
            question: "What is your age?",
            options: ["under 18", "20 - 25", "26 - 35", "36 - 40", "40+"]
        },

        {
            field: "weight",
            question: "What is your weight?",
            type: "number"
        },

        {
            field: "targetweight",
            question: "What is your target weight ?",
            type: "number"
        },

        {
            field: "fitness_experience",
            question: "What is your Fitness Experience?",
            options: ["Beginner", "Intermediate", "Advance"]
        },

        {
            field: "body_type",
            question: "what is your body type ?",
            options: ["Skinny", "Fat", "Skinny Fat", "prefer not to say"]
        },
        {
            field: "fitnessgoal",
            question: "What is your fitness goal",
            options: ["Build Muscles", "Build Strength", "Loose weight", "Gain weight", "Improve flexibility", "Improve Endurance"]
        },

    ]
    const [CurrentQuestion, setCurrentQuestion] = useState(0);
    const [answer, setCurrentAnswer] = useState({});
    const handleAnswer = (event) => {
        const field = questions[CurrentQuestion].field;
        setCurrentAnswer({ ...answer, [field]: event.target.value });
    };

    const handleNext = () => {

        const field = questions[CurrentQuestion].field;

        if (!answer[field]) {
            alert("Please enter or select an answer");
            return;
        }
        if (CurrentQuestion < questions.length - 1) {
            setCurrentQuestion(CurrentQuestion + 1);
        }
        else {
            console.log("All answers", answer);
            console.log("Calling onSubmit now");
            onSubmit(answer);
        }
    }
    const handleBack = () => {
        if (CurrentQuestion > 0) {
            setCurrentQuestion(CurrentQuestion - 1);
        }
        else {
            onBack();
        }
    }

    return (
        <div className="fitness-page">

            <div className="fitness-box">
                <h1>FITFORGE FITNESS ASSESSMENT</h1>

                <h2>{questions[CurrentQuestion].question}</h2>

                {
                    questions[CurrentQuestion].type === "number" ?
                        (
                            <input type="number"
                                placeholder="enter your answer"
                                value={answer[questions[CurrentQuestion].field] || ""}
                                onChange={handleAnswer}
                                min="1"
                                step="0.1" />
                        ) : (
                            <select value={answer[questions[CurrentQuestion].field] || ""}
                                onChange={handleAnswer}>
                                <option value="">Select your answer</option>
                                {
                                    questions[CurrentQuestion].options.map((option) => (
                                        <option key={option} value={option}>{option}</option>
                                    ))}
                            </select>
                        )
                }
                <div className="fitness-buttons">
                    <button onClick={handleBack}>Back</button>
                    <button onClick={handleNext}>{CurrentQuestion === questions.length - 1 ? "Submit" : "Next"}</button>
                </div>
            </div>
        </div>
    )

}
export default FitnessForm;