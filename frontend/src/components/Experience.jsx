import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { HiAcademicCap } from "react-icons/hi2";

const Experience = () => {
  const events = [
    {
      id: 1,
      date: "September 2022 - August 2024",
      title: "MERN Developer",
      location: "w3Origin, New Delhi, India",
      description:
        "I was responsible for developing, maintaining, and designing scalable web applications, integrating APIs, and working on front-end and back-end development using MongoDB, Express.js, React, and Node.js",
    },
  ];
  return (
    <div className="border-b border-[#915EFF] sm:border-neutral-900 pb-10 ">
      <h2 className="my-10 sm:my-20 text-center text-4xl">
        Experi<span className="text-[#915EFF]">ence</span>
      </h2>
      <VerticalTimeline
        lineColor={"radial-gradient(circle, #6366f1, #9f7aea, #f472b6)"}
      >
        {/* <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"></div>
      </div> */}
        {events.map((event) => (
          <VerticalTimelineElement
            key={event.id}
            date={event.date}
            iconStyle={{
              background: "#0c0908",
              color: "#fff",
            }}
            icon={<FaLaptopCode />}
            className={""}
          >
            <h3 className="text-xl font-bold text-black-200 mb-2">
              {event.title}
            </h3>
            <h4 className="text-lg font-semibold text-black-200 bg-slate-300 inline p-1 rounded-md px-2 ">
              {event.location}
            </h4>
            <p className="text-sm text-black-100">{event.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
