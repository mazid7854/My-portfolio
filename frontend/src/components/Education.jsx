import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { HiAcademicCap } from "react-icons/hi2";

const Education = () => {
  const events = [
    {
      id: 1,
      date: "2019-2021",
      title: "B-Tech (Computer Science Engineering)",
      location: "Uttar Pradesh, India",
      description:
        "I completed my bachelor degree in Computer Science Engineering from Monad University, N.H. 9, Delhi Hapur Road Village & Post Kastla, Kasmabad, Pilkhuwa, Uttar Pradesh 245304.",
    },

    {
      id: 2,
      date: "2014-2017",
      title: "Diploma in Engineering",
      location: "New Delhi, India",
      description:
        "I completed my diploma in Mechanical Production Engineering from G.B Pant Institute of Technology Okhla, New Delhi (BOARD OF TECHNICAL EDUCATION, DELHI).",
    },
    {
      id: 3,
      date: "2010",
      title: "Secondary school",
      location: "New Delhi, India",
      description:
        "I completed my Secondary school from R.K Sarvodaya Boys Senior Secondary School, Madanpur Khadar, New Delhi (CBSE BOARD).",
    },
  ];
  return (
    <div className="border-b border-[#915EFF] sm:border-neutral-900 pb-14 ">
      <h2 className="sm:my-20 my-10 text-center text-4xl">
        Educa<span className="text-[#915EFF]">tion</span>
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
            icon={<HiAcademicCap />}
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

export default Education;
