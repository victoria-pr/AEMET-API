import { useState, useEffect } from "react";

const Prediction =() => {
    const [predictions, setPredictions] = useState([]);
    const api_key = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ2aWN0b3JpYXBlcm9qYXNAZ21haWwuY29tIiwianRpIjoiMjg3YTY0NWMtOTQ0Ni00M2VhLWJiNDUtZjY2ZDRhZDlhM2U5IiwiaXNzIjoiQUVNRVQiLCJpYXQiOjE2ODM1MzU3MzMsInVzZXJJZCI6IjI4N2E2NDVjLTk0NDYtNDNlYS1iYjQ1LWY2NmQ0YWQ5YTNlOSIsInJvbGUiOiIifQ.64_OV5ZZfr2kRP0W5OgscQbGEKGIKym4fkcXodoMweU"
    useEffect(() => {
    fetch (`https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/horaria/48004?api_key=${api_key}`) 
    .then((response) => response.json())
    .then((data) => {
    fetch (data.datos)
    .then((response) => response.json())
    .then((data) => getPredictions(data))
    })
    .catch((error) => console.log(error));
    }, []);

const getPredictions = (data) => {
    const newPredictions = data[0].prediccion.dia
    setPredictions(newPredictions)
    console.log(newPredictions)
}
    return (
        <div className="prediction">
            <h1>Predicción próximos 3 días</h1>
            {predictions.map((prediction, index) => (
                <article key={index}>
                    <h2>Fecha: {prediction.fecha}</h2>
                    <h2>Amanecer: {prediction.orto}</h2>
                    <h2>Atardecer: {prediction.ocaso}</h2>
                </article>
            ))}
        </div>
    );
}

export default Prediction;
