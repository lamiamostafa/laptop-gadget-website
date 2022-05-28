import React from 'react';

const Portfolio = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row">
                <div class="avatar placeholder">
                    <div class="bg-neutral-focus text-neutral-content rounded-full w-40">
                        <span class="text-3xl">Lamia</span>
                    </div>
                </div>
                <div className="text-center mx-auto">
                    <h1 className="text-5xl font-bold text-[#06396C] ">Lamia Mostafa</h1>
                    <p className=" underline underline-offset-1 font-bold mx-2 text-[#06396C]  ">Email:lamiamostafa791@gmail.com</p>
                    <p className="  text-[#06396C] ">B.Sc in Computer Science and Engineering,8th Semester, IIUC</p>
                    <p className=" text-[#06396C] "><span className="font-bold">List Of technologies</span>  <br></br>HTML5,CSS3,Bootstrap5,Tailwind,Javascript,React,MongoDb,Express JS</p>
                    <p className="text-[#06396C] font-bold ">
                        3 best projects:<br></br>
                        <a className=" underline underline-offset-1 font-bold mx-2" href="https://warehouse-management-web-a8f05.web.app/">Grocery Shop</a>
                        <a className=" underline underline-offset-1 font-bold mx-2" href="https://independent-service-prov-781cb.web.app/">Doctors website</a>
                        <a className="underline underline-offset-1 font-bold mx-2" href="https://bespoke-otter-15ab52.netlify.app/review">Product Analysis</a>
                    </p>


                </div>
            </div>
        </div>
    );
};

export default Portfolio;