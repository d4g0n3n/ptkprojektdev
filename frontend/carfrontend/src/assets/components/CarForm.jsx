import PropTypes from "prop-types";
import { useRef, useState } from "react";

function CarForm(props) {
    const {onSuccess}= props;
    const license_plate_numberRef= useRef(null);
    const brandRef= useRef(null);
    const modelRef= useRef(null);
    const daily_costRef= useRef(null);
    const url= "http://localhost:8000/api/cars";
    const[error, setError]= useState("");
    const handleSubmit= event => {
        event.preventDefault();
        onSuccess();
        createCar();
    };

    const createCar =async()=>{
        const car= {
            license_plate_number:license_plate_numberRef.current.value,
            brand:brandRef.current.value,
            model:modelRef.current.value,
            daily_cost:daily_costRef.current.value,
        };
        const response =await fetch(url, {
            method:"POST",
            body: JSON.stringify(car),
            headers:{
                "Content_Type" : "application/json",
                "Accept": "application/json",
            }
    });
        if (response.ok) {
            clearForm();
            onSuccess();  
        }else {
        const data= await response.json();
        setError(data.message);
        }
    };

    const clearForm=()=>{
        license_plate_numberRef.current.value="";
        brandRef.current.value="";
        modelRef.current.value="";
        daily_costRef.current.value="";
        setError("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Új autó felvétele</h2>
            {error !=""? (<div className="alert alert-danger" role="alert">{error}</div>):("")}
            <div className="mb-3">
                <label htmlFor="license_plate_number" className="form-label">Rendszám</label>
                <input type="number" id="license_plate_number" className="form-control"  ref={license_plate_numberRef}/>
            </div>
            <div className="mb-3">
                <label htmlFor="brand" className="form-label">Márka</label>
                <input type="text" id="brand" className="form-control"  ref={ brandRef}/>
            </div>
            <div className="mb-3">
                <label htmlFor="model" className="form-label">Model</label>
                <input type="text" id="model" className="form-control"  ref={modelRef}/>
            </div>
            <div className="mb-3">
                <label htmlFor="daily_cost" className="form-label">Napi díj</label>
                <input type="number" id="daily_cost" className="form-control"  ref={daily_costRef}/>
            </div>
            <button className="btn btn-primary" type="submit">Új autó</button>
        </form>    
    );  
}
CarForm.propTypes={
    onSuccess: PropTypes.func.isRequired
};
export default CarForm;