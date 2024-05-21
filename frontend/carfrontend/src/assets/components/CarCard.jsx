import { PropTypes } from "prop-types";
import './CarForm';

function CarCard(props) {
    const { car } = props;
    const url = "http://localhost:8000/api/cars";
    const rent = async () => {
        const response = await fetch(url + "/" + car.id + "/rent", {
            method: "POST",
            headers: {
                "Accept": "application/json"
            }
        });
        if (response.ok) {
            alert("sikeres foglalás");
        } else {
            const date = await response.json();
            alert(date.message);
        }
    }

    return (
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="card">
                <div className="card-body">
                    <h2>{car.license_plate_number}</h2>
                    <p>Márka: {car.brand}</p>
                    <p>Model: {car.model}</p>
                    <p>Napi díj: {car.daily_cost} Ft</p>
                    <img className="img-fluid" src={"images/" + car.brand.toLowerCase() + "_" + car.model.toLowerCase() + ".png"} alt={car.brand + "_" + car.model} /> <br />
                    <button className="btn btn-success w-100" onClick={() => rent()}>Köcsönzés</button>
                </div>
            </div>
        </div>
    );
}
CarCard.propTypes = {
    car: PropTypes.object.isRequired
};
export default CarCard;