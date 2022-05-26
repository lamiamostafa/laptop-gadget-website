import React from 'react';
import like from '../../assets/icons/like.png';
import delivery from '../../assets/icons/delivery.png';
import designs from '../../assets/icons/designs.png';
import operating from '../../assets/icons/opearting.png';
import Mission from './Mission';
import { Link } from 'react-router-dom';


const OurMissions = () => {
    const missions = [
        {
            img: like,
            desc: "Experienced factory"
        },
        {
            img: delivery,
            desc: "Fast delivery"
        },
        {
            img: designs,
            desc: "Professionals Design"
        },
        {
            img: operating,
            desc: "Standerized Operating"
        }
    ]
    return (
        <section className="my-20 ">
            <div className="text-center my-5">
                <h4 className="text-3xl text-[#06396C] font-bold my-3 ">Mostafa Electronic Factory core Values</h4>
                <p className="text-xl my-3">We can produce more than 300000pcs of keyboards per month,We can produce more vaireties of Consumer Electronics，Laptop's battery，AC power bank and tool battery</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    missions.map(mission => <Mission
                        key={mission._id}
                        mission={mission}
                    ></Mission>)
                }


            </div>

        </section>
    );
};

export default OurMissions;