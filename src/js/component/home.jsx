import React, { useEffect, useState } from "react";

const Home = () => {
	const [name, setName] = useState("");
	const [age, setAge] = useState(0);
	const [result, setResult] = useState(false)

    function validateSubmission() {
        if (name == "") {
            alert("a Name is needed to predict age!")
        }
        else {
			setResult(true);
            fetchAge();
        }
    }
    function fetchAge() {
        fetch("https://api.agify.io/?name=" + name) 
		.then(response => response.json())
        .then(data => {
            setName(data.name);
            setAge(data.age)
        })
    }

	useEffect(() => {
		fetchAge();
	}, [])
	return (
		<>
			<h1 className="title">Age Predictor App</h1>
			<h2>Enter a name and I will predict the age: </h2>
            <input
                type="text"
                onChange={event => setName(event.target.value)}
                value={name}
            ></input>
			<button onClick={validateSubmission}>Predict Age</button>
			<button onClick={() => setResult(false)}>clear</button>
			<h2 className={result ? "predicted-age-visible" : "predicted-age-hidden"}>{name} is {age} years old.</h2>
		</>
	);
};

export default Home;
