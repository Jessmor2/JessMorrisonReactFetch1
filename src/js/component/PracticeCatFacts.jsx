import React, { useEffect, useState } from "react";
import AgePredictor from "./agePredictor";

const Home = () => {
	
	const [catFact, setCatFact] = useState("");
	const [factLength, setFactLength] = useState(0)

	const loadCatFact = () => {
		fetch("https://catfact.ninja/fact") 
		.then(response => {
			if(response.ok) {
				console.log("The response is successful!")
				return response.json()
			}
			else {
				throw new Error(response.statusText)
			}
		})
		.then(data => {
			setCatFact(data.fact);
			setFactLength(data.length)
		})
		.catch(error => console.log("Uh oh, there was a problem: \n", error)); 
	}

	useEffect(() => {
		loadCatFact();
	}, [])
	return (
		<>
			<h1>Cat App</h1>
			<p className="cat-fact">{catFact}</p>
			<button onClick={loadCatFact}>Click for a Cat Fact</button>
		</>
	);
};


