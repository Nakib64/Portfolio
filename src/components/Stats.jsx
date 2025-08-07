"use client"

import CountUp from "react-countup";


const stats = [
    {
        num: 1,
        text: "Years of experience"
    },
    {
        num: 15,
        text: "Project Completed"
    },
    {
        num: 8,
        text: "Technology mastered"
    },
    {
        num: 180,
        text: "Code commit"
    }
]
const Stats = () => {
    return (
        <section className="container mx-auto px-4">
          
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6  items-center justify-center">
                    {
                        stats.map((item, index)=>{
                            return <div key={index} className="flex items-center justify-center md:justify-start">
                                <CountUp 
                                end={item.num}
                                duration={5}
                                delay={2}
                                className="text-4xl md:text-6xl font-extrabold"
                                />
                                <p className={`${item.text.length > 15 ? "max-w-[100px]": "max-w-[150px]"}`}>{item.text}</p>
                                
                            </div>
                        })
                    }
                </div>
          
        </section>
    );
};

export default Stats;