import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel'

function CarouselComponent() {
    const [itens, setItens] = useState([
        {
            img: "https://i.imgur.com/tZtWvvL.png",
            titulo: "",
        },
        {
            img: "https://i.imgur.com/ImeNjfB.png",
            titulo: "",

        },
        {
            img: "https://i.imgur.com/HIG6o6E.png",
            titulo: "",
        },
    ])
    return (
        <div>
            <Carousel >
                {
                    itens.map(item => (
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={item.img}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>{item.titulo}</h3>
                            </Carousel.Caption>

                        </Carousel.Item>
                    ))
                }


            </Carousel>
        </div>
    )
}

export default CarouselComponent;
