//import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const CardSlider = (props: any) => {
    const moveLeft =()=>{
        let slider:any = document.getElementById("slider__container");
        slider.scrollLeft = slider.scrollLeft - 1100;
    }

    const moveRight =()=>{
        let slider:any = document.getElementById("slider__container");
        slider.scrollLeft = slider.scrollLeft + 1100;
    }

    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    return (
        <div className="slider">
            <FaChevronLeft size={40} className="slider-icon left" onClick={moveLeft}/>
            <div id="slider__container" className="slider__container">
                {
                    cards.map((slide, index) => {
                        const bookIconNumber = Math.floor(Math.random() * 4) + 1;
                        const iconGroup: string = "svg/group"+ String(bookIconNumber) +".svg";
                        console.log(iconGroup)
                        return (
                            <div key={index} className="slider__container__card">
                                <div className="slider__container__card-image"><img src={iconGroup}/></div>
                                <p className="slider__container__card-title">{index}</p>
                                <p className="slider__container__card-description">Hola mundo</p>
                            </div>
                        )
                    })
                }
            </div>
            <FaChevronRight size={40} className="slider-icon right" onClick={moveRight}/>
        </div>
    )
}

export default CardSlider;