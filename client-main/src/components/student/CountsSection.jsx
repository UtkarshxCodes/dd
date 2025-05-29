import React from 'react';
import CountUp from 'react-countup';
import { assets } from '../../assets/assets';

export default function CountsSection() {
  return (
    <div
      className="relative w-screen h-[80vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${assets.counts})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Content */}
      <div className="relative grid grid-cols-2 md:grid-cols-3 gap-8 text-center text-white w-4/5">
        {/* Item 1 */}
        <div className="border border-white p-6">
          <h2 className="text-5xl font-extrabold">
            <CountUp start={0} end={2000} duration={3} />+
          </h2>
          <p className="text-xl mt-2 font-semibold">Learners trained</p>
        </div>

        {/* Item 2 */}
        <div className="border border-white p-6">
          <h2 className="text-5xl font-extrabold">
            <CountUp start={0} end={5} duration={2} />+
          </h2>
          <p className="text-xl mt-2 font-semibold">Countries reached</p>
        </div>

        {/* Item 3 */}
        <div className="border border-white p-6">
          <h2 className="text-5xl font-extrabold">
            <CountUp start={0} end={60} duration={2.5} />+
          </h2>
          <p className="text-xl mt-2 font-semibold">Hiring partners</p>
        </div>

        {/* Item 4 */}
        <div className="border border-white p-6">
          <h2 className="text-5xl font-extrabold">
            <CountUp start={0} end={8500} duration={4} />+
          </h2>
          <p className="text-xl mt-2 font-semibold">Training hours delivered</p>
        </div>

        {/* Item 5 */}
        <div className="border border-white p-6">
          <h2 className="text-5xl font-extrabold">
            <CountUp start={0} end={50} duration={2.5} />+
          </h2>
          <p className="text-xl mt-2 font-semibold">Expert instructors</p>
        </div>

        {/* Item 6 */}
        <div className="border border-white p-6">
          <h2 className="text-5xl font-extrabold">
            <CountUp start={0} end={1200} duration={3.5} />+
          </h2>
          <p className="text-xl mt-2 font-semibold">Job offers facilitated</p>
        </div>
      </div>
    </div>
  );
}