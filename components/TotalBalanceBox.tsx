import React from "react";
import AnimatedAmount from "./AnimatedAmount";
import DoughnutChart from "./DoughnutChart";

function TotalBalanceBox({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
}: TotlaBalanceBoxProps) {
  return (
    <section className="total-balance">
      <div className="total-balance-chart">
        <DoughnutChart />
      </div>
      <div className="flex flex-col gap-6">
        <h2 className="header-2">Banks Accounts: {totalBanks} </h2>
        <div className="flex flex-col gap-2">
          <p className="total-balance-label">Total Current Balance</p>
          <div className="total-balance-amount flex-center gap-2">
            <AnimatedAmount amount={totalCurrentBalance} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TotalBalanceBox;
