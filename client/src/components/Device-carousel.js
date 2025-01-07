import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import axios from 'axios';

const DeviceCarousel = () => {
  const [devices, setDevices] = useState([
    {
      id: 1, name: "JioPhone", highlight: "A world full of world-class games in your hand.", description: "Instant gaming at your fingertips. Hours of gaming entertainment pre-loaded on your JioPhone device. Access amazing games across various genres, at your fingertips.", refLink: {
        "text": "Get it on Google Play Store",
        "url": "https://play.google.com/store/apps/details?id=com.jio.jiogames&hl=en_IN&gl=US"
      }, "image": {},
    },
  ])

  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/devices');
        // console.log(response);
        setDevices(response.data);
      } catch (error) {
        console.error('Error fetching device list:', error);
      }
    };

    fetchDevices();
  }, []);

  return (
    <Carousel>
      {
        devices.map((device) => {
          return (
            <Carousel.Item key={device.id}>
              <div className="container my-5">
                <div className="card mb-3 border-0" style={{ maxWidth: "100%", backgroundColor: "#090e0b", color: "white" }}>
                  <div className="row g-0 align-items-center">
                    {/* Left Side: Image */}
                    <div className="col-md-4">
                      <img
                        src={device?.image?.mime ? `data:${device.image.mime};base64,${device.image.data}` : `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.wallpapersafari.com%2F52%2F4%2FcCgH1L.jpg&f=1&nofb=1&ipt=b422c95a433f88a75d3375d8b37c076bdb3c9b30fd1f3ec6c179f2f570c6f4dc&ipo=images`}
                        alt="Card Image"
                        className="img-fluid rounded-start"
                      />
                    </div>
                    {/* Right Side: Content */}
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{device.name}</h5>
                        <p className="card-text">
                          {device.description}
                        </p>
                        <button key={`${device.id}-primary`} className="btn btn-primary me-2" href={device.refLink.url}>{device.refLink.text}</button>
                        <button key={`${device.id}-secondary`} className="btn btn-outline-secondary">Know More</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>)
        })
      }
    </Carousel>
  );
};

export default DeviceCarousel;
