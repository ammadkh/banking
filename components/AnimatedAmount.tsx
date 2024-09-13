"use client";
import React from "react";
import CountUp from "react-countup";

function AnimatedAmount({ amount }: { amount: number }) {
  return (
    <div className="w-full">
      <CountUp
        end={amount}
        prefix="$"
        decimal=","
        duration={2.75}
        decimals={2}
      />
    </div>
  );
}

export default AnimatedAmount;
