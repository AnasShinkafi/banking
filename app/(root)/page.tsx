import RightSidebar from "@/components/RightSidebar";
import HeaderBox from "@/components/ui/HeaderBox";
import TotalBalance from "@/components/ui/TotalBalance";
import { getLoggedInUser } from "@/lib/actions/user.actions";

export default async function Home() {
  const loggedIn = await getLoggedInUser();
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn.name || "Guest"}
            subtext="Access and manage your account and transactions efficiently"
          />
          <TotalBalance 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
        RecentTransactions
      </div>
      <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 123.50}, ]}
      />
    </section>
  );
}
