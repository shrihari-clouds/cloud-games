import React, { useState, useEffect } from 'react';
import { Carousel, Card, Stack, Button } from 'react-bootstrap';
import axios from 'axios';

const DynamicCarousel = () => {
    const [reviews, setReviews] = useState([
        { id: 1, name: "abc", comment: 'loream if sum iughyuashguihsaduihfihsauifhuiashifhiashfuihasiuhffuihsaiufhuiahsiufhiauhifuhasuih', commentFrom: 'github' },
        { id: 2, name: "def", comment: 'loream if sum iughyuashguihsaduihfihsauifhuiashifhiashfuihasiuhffuihsaiufhuiahsiufhiauhifuhasuih', commentFrom: 'google' },
        { id: 3, name: "ghi", comment: 'loream if sum iughyuashguihsaduihfihsauifhuiashifhiashfuihasiuhffuihsaiufhuiahsiufhiauhifuhasuih', commentFrom: 'linkdin' },
        { id: 4, name: "jkl", comment: 'loream if sum iughyuashguihsaduihfihsauifhuiashifhiashfuihasiuhffuihsaiufhuiahsiufhiauhifuhasuih', commentFrom: 'xyz' },
        { id: 5, name: "mno", comment: 'loream if sum iughyuashguihsaduihfihsauifhuiashifhiashfuihasiuhffuihsaiufhuiahsiufhiauhifuhasuih', commentFrom: 'hhh' },
        { id: 6, name: "pqr", comment: 'loream if sum iughyuashguihsaduihfihsauifhuiashifhiashfuihasiuhffuihsaiufhuiahsiufhiauhifuhasuih', commentFrom: 'stu' },
        { id: 7, name: "vwx", comment: 'loream if sum iughyuashguihsaduihfihsauifhuiashifhiashfuihasiuhffuihsaiufhuiahsiufhiauhifuhasuih', commentFrom: 'yza' },
        { id: 8, name: "mno", comment: 'loream if sum iughyuashguihsaduihfihsauifhuiashifhiashfuihasiuhffuihsaiufhuiahsiufhiauhifuhasuih', commentFrom: 'iii' },
    ]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/feedback');
                // console.log(response);
                setReviews(response.data);
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        };

        fetchReviews();
    }, []);

    return (<div>
        <div className="container-fluid">
            <Carousel style={{ height: 500 }}>
                {reviews.map((review, index) => (
                    <Carousel.Item style={{ height: 500, backgroundColor: "black", color: "white" }}>
                        <Stack
                            direction="horizontal"
                            className="h-100 justify-content-center bg-dark"
                            gap={3}
                        >
                            <Card style={{ width: "35rem", backgroundColor: "#090e0b", color: "white", justifyContent: "start" }}>
                                <Card.Body>
                                    <Card.Text style={{ textAlign: "start" }}>
                                        {reviews[index].comment}
                                    </Card.Text>
                                    <Card.Title>{reviews[index].name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{reviews[index].commentFrom}</Card.Subtitle>
                                </Card.Body>
                            </Card>

                            <Card style={{ width: "35rem", backgroundColor: "#090e0b", color: "white", justifyContent: "start" }}>
                                <Card.Body>
                                    <Card.Text style={{ textAlign: "start" }}>
                                        {reviews[index + 1 < reviews.length ? index + 1 : 0].comment}
                                    </Card.Text>
                                    <Card.Title>{reviews[index + 1 < reviews.length ? index + 1 : 0].name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{reviews[index + 1 < reviews.length ? index + 1 : 0].commentFrom}</Card.Subtitle>
                                </Card.Body>
                            </Card>
                        </Stack>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    </div>

    );
};

export default DynamicCarousel;
