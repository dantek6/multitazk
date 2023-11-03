//import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { useGroup } from '../context/groupContext';
import { Link } from 'react-router-dom';

const CardSlider = (props: any) => {
    const moveLeft = () => {
        let slider: any = document.getElementById("slider__container");
        slider.scrollLeft = slider.scrollLeft - 1100;
    }

    const moveRight = () => {
        let slider: any = document.getElementById("slider__container");
        slider.scrollLeft = slider.scrollLeft + 1100;
    }

    const { getGroups, groups } = useGroup();

    useEffect(() => {
        getGroups().then(() => {
            console.log('Groups loaded:', groups);
        });
    }, []);

    // console.log(group);

    return (
        <div className="slider">
            <FaChevronLeft size={40} className="slider-icon left" onClick={moveLeft} />
            <div id="slider__container" className="slider__container">
                {Array.isArray(groups) ? (
                    groups.map((groupData: any, index: number) => {
                        return (
                            <Link to={`/groups/${groupData._id}`} key={groupData._id}>
                                <div key={groupData._id} className="slider__container__card">
                                    <div className="slider__container__card-image">
                                        <img src={`svg/group${index % 4 + 1}.svg`} alt={groupData.name} />
                                    </div>
                                    <p className="slider__container__card-title">{groupData.name}</p>
                                    <p className="slider__container__card-description">{typeof(groupData._id)}</p>
                                </div>
                            </Link>
                        );
                    })
                ) : (
                    <p>No groups available</p>
                )}
            </div>
            <FaChevronRight size={40} className="slider-icon right" onClick={moveRight} />
        </div>
    )
}

export default CardSlider;