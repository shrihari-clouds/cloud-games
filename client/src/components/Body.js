import React from "react";
import coverPhoto from "../static-files/cover-photo.png";
import DeviceCarousel from "./Device-carousel";
import MultiItemCarousel from "./Multiple-carousel";

const JioGamesTemplate = () => {
    return (
        <section
            style={{
                backgroundPosition: "center",
                backgroundColor: "#090e0b",
            }}
        >
            <div
                style={{
                    backgroundImage: `url(${coverPhoto})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "100vh",
                    color: "white",
                    textAlign: "center",
                }}
            >
                <div
                    className="d-flex flex-column justify-content-center align-items-center"
                    style={{ height: "calc(100vh - 56px)" }}
                >
                    <h1 className="fw-bold mb-3">Hundreds of games.</h1>
                    <h1 className="fw-bold mb-3">One incredible platform.</h1>
                    <h1 className="fw-bold">Welcome to JioGames.</h1>
                </div>
            </div >
            <div style={{ minHeight: '20vh', marginTop: '30px', color: 'white', textAlign: 'center' }}>
                <h4>A true 360<sup>o</sup> gaming experiance.</h4>
            </div>
            <div>
                <h1 style={{ fontSize: '4rem', color: 'white' }}>All play and no work.</h1>
                <h1 style={{ fontSize: '4rem', color: 'white' }}>Across your favourite devices.</h1>
            </div>
            <DeviceCarousel />
            <div style={{ marginTop: '130px', marginBottom: '20px', color: 'white', textAlign: 'center' }}>
                <h1 style={{ fontSize: '4rem', color: 'white' }}>Those who love gaming, love us.</h1>
            </div>
            <div className="my-5">
                <MultiItemCarousel />
            </div>
        </section>
    );
};

export default JioGamesTemplate;
