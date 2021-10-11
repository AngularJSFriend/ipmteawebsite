import React, { useState } from 'react'

const RegistrationComp = () => {

    const [userData, setuserData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        address: "",
        message: ""
    });

    let name, value;
    const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setuserData({ ...userData, [name]: value });
    };
    const submitData = async (event) => {
        event.preventDefault();
        const { firstName, lastName, phone, email, address, message } = userData;

        if (firstName && lastName && phone && email && address && message) {
            const res = fetch(
                "https://ipmteafirebasecont-default-rtdb.firebaseio.com/userDataRecords.json",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        firstName,
                        lastName,
                        phone,
                        email,
                        address,
                        message,
                    }),
                }

            );

            if (res) {
                setuserData({
                    firstName: "",
                    lastName: "",
                    phone: "",
                    email: "",
                    address: "",
                    message: "",
                });
                alert("Data Stored");
            } else {
                alert("plz fill the data");
            }
        } else {
            alert("plz fill the data");
        }

    }





    return (
        <>
            <section id="home-sec">
                <div class="overlay text-center">
                    <h1>Registration</h1><br />
                    <hr class="hr-set" />

                    <p>Registration</p>
                </div>

            </section>


            <section className="contactus-section">
                <div className="container">

                    {/* right side contact form  */}
                    <div className="contact-rightside col-12 col-lg-10">
                        <form method="POST">
                            <div className="row">
                                <div className="col-12 col-lg-6 contact-input-feild">
                                    <input
                                        type="text"
                                        name="firstName"
                                        id=""
                                        className="form-control"
                                        placeholder="First Name"
                                        value={userData.firstName}
                                        onChange={postUserData}
                                    />
                                </div>
                                <div className="col-12 col-lg-6 contact-input-feild">
                                    <input
                                        type="text"
                                        name="lastName"
                                        id=""
                                        className="form-control"
                                        placeholder="Last Name"
                                        value={userData.lastName}
                                        onChange={postUserData}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-lg-6 contact-input-feild">
                                    <input
                                        type="text"
                                        name="phone"
                                        id=""
                                        className="form-control"
                                        placeholder="Phone Number "
                                        value={userData.phone}
                                        onChange={postUserData}
                                    />
                                </div>
                                <div className="col-12 col-lg-6 contact-input-feild">
                                    <input
                                        type="email"
                                        name="email"
                                        id=""
                                        className="form-control"
                                        placeholder="Email ID"
                                        value={userData.email}
                                        onChange={postUserData}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 contact-input-feild">
                                    <input
                                        type="text"
                                        name="country"
                                        id=""
                                        className="form-control"
                                        placeholder="Add Country"
                                        value={userData.address}
                                        onChange={postUserData}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12 ">
                                    <input
                                        type="textarea"
                                        rows={3}
                                        cols={5}
                                        name="message"
                                        id=""
                                        className="form-control"
                                        placeholder="Enter Your Message"
                                        value={userData.message}
                                        onChange={postUserData}
                                        required
                                    />
                                </div>
                            </div>
                            <div class="form-check form-checkbox-style">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckChecked"
                                />
                                <label
                                    class="form-check-label"
                                    className="main-hero-para">
                                    I agree that the CEPM/i2P2M may contact me at the
                                    email address or phone number above
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-style w-100"
                                onClick={submitData}>
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default RegistrationComp
