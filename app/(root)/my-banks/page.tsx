import BankCard from "@/components/BankCard";
import Headerbox from "@/components/Headerbox";
import { getAccounts } from "@/lib/actions/bank.actions";
import { getLoggedInUser } from "@/lib/actions/user.action";
import React from "react";

export default async function MyBanks() {
  const loggedIn = await getLoggedInUser();

  const accounts = await getAccounts({
    userId: loggedIn?.$id,
  });
  console.log(accounts, "cc");
  return (
    <section className="flex">
      <div className="my-banks">
        <Headerbox
          title="My Banks Accounts"
          subtext="Effortlessly manage your banking activities"
        ></Headerbox>
        <div className="space-y-4">
          <h2 className="header-2">Your Cards</h2>
          <div className="flex flex-wrap gap-6">
            {accounts &&
              accounts.data.map((account: Account) => {
                return (
                  <BankCard
                    key={account.id}
                    account={account}
                    userName={loggedIn?.firstName}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}
