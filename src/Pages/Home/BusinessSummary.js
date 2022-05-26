import React from 'react';
import clients from '../../assets/icons/clients.png';
import reviews from '../../assets/icons/reviews.png';
import revenues from '../../assets/icons/revenues.png';
import clocks from '../../assets/icons/clock.svg';
import SummaryContain from './SummaryContain';

const BusinessSummary = () => {
    const summaries = [
        {
            img: clients,
            number: "100+",
            desc: "Happy Clients"
        },
        {
            img: reviews,
            number: "33k+",
            desc: "Reviews"
        },
        {
            img: revenues,
            number: "120M+",
            desc: "Annual Revenues"
        },
    ]
    return (
        <section className="my-20">
            <div className="text-center my-5">
                <h4 className="text-3xl text-[#06396C] font-bold uppercase">Millions Business trust us</h4>
                <h2 className="text-2xl my-2">We are here for understanding users expectations</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    summaries.map(summary => <SummaryContain
                        key={summary._id}
                        summary={summary}
                    ></SummaryContain>)
                }
            </div>
        </section>



    );
};

export default BusinessSummary;