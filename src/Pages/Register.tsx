import React from "react";
import { Container } from "react-bootstrap";
import CustomNavbar from "../Components/CustomNavbar";
import { LocationData } from "../Types";

class Register extends React.Component {
    formSubmit(event: any) {
        event.preventDefault();

        const values: LocationData = {
            name: event.target?.eventName?.value,
            host: event.target?.hostName?.value,
            startDate: event.target?.startDate?.value,
            endDate: event.target?.endDate?.value,
            description: event.target?.description?.value,
            website: event.target?.website?.value,
            imageLocation: event.target?.image?.value,
            coords: [event.target?.latitutde?.value, event.target.longitude.value],
            email: event.target?.email?.value,
            phone: event.target?.phone?.value
        };
    }

    render() {
        return (
            <div className="pageContainer">
                <CustomNavbar page="login" sticky={false}></CustomNavbar>

                <Container className="loginContainer">
                    <form className="registerDiv" onSubmit={this.formSubmit}>
                        <h2>Register</h2>

                        <div className="inputGroup">
                            <label htmlFor="hostName">Host Name: </label>
                            <input id="hostName" name="hostName" className="form-control" placeholder="Host Name" type="text" autoComplete="off" required />
                        </div>

                        <div className="inputGroup">
                            <label htmlFor="eventName">Event Name: </label>
                            <input id="eventName" name="eventName" className="form-control" placeholder="Event Name" type="text" autoComplete="off" required />
                        </div>

                        <div className="inputGroup">
                            <label htmlFor="startDate">Start Date/Time: </label>
                            <input id="startDate" name="startDate" className="form-control" placeholder="Start Date" type="datetime-local" autoComplete="off" required />
                        </div>

                        <div className="inputGroup">
                            <label htmlFor="endDate">End Date/Time: </label>
                            <input id="endDate" name="endDate" className="form-control" placeholder="End Date" type="datetime-local" autoComplete="off" required />
                        </div>

                        <div className="inputGroup">
                            <label htmlFor="description">Event Description: </label>
                            <input id="description" name="description" className="form-control" placeholder="Event Description" type="text" autoComplete="off" required />
                        </div>

                        <div className="inputGroup">
                            <label htmlFor="latitude">Event Location (Latitude): </label>
                            <input id="latitude" name="latitude" className="form-control" placeholder="Event Description" type="number" autoComplete="off" required />
                        </div>

                        <div className="inputGroup">
                            <label htmlFor="longitude">Event Location (Longitude): </label>
                            <input id="longitude" name="longitude" className="form-control" placeholder="Event Description" type="number" autoComplete="off" required />
                        </div>

                        <div className="inputGroup">
                            <label htmlFor="image">Image Location (URL): </label>
                            <input id="image" name="image" className="form-control" placeholder="Image Location (URL)" type="url" accept="image/png, image/jpeg, image/jpg" autoComplete="off" required />
                        </div>

                        <div className="inputGroup">
                            <label htmlFor="website">Website: </label>
                            <input id="website" name="website" className="form-control" placeholder="Website" type="url" autoComplete="off" required />
                        </div>

                        <div className="inputGroup">
                            <label htmlFor="email">Email Address: </label>
                            <input id="email" name="email" className="form-control" placeholder="Email (will be displayed)" type="email" autoComplete="off" required />
                        </div>

                        <div className="inputGroup">
                            <label htmlFor="phone">Phone Number: </label>
                            <input id="phone" name="phone" className="form-control" placeholder="Phone Number (will be displayed). Format: 112-345-6789" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" autoComplete="off" required />
                        </div>

                        <button className="btn btn-primary">Submit</button>
                    </form>
                </Container>
            </div>
        );
    }
}

export default Register;