import Link from "next/link"
import BankTabItem from "./BankTabItem"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import BankInfo from "./BankInfo"
import TransactionsTable from "./TransactionsTable"
import { Pagination } from "./Pagination"

const RecentTransactions = ({ accounts, transactions = [], appwriteItemId, page = 1 }: RecentTransactionsProps) => {
    const rowsPerPage = 10;
    const totalPage = Math.ceil(transactions.length / rowsPerPage);

    const indexOfLastTransaction = page * rowsPerPage;
    const indexOfFirstTransaction = indexOfLastTransaction - rowsPerPage;
    const currentTransactions = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction)

  return (
    <section className="recent-transactions">
        <header className=" flex items-center justify-between">
            <h2 className="recent-transactions-label">
                Recent transactions
            </h2>
            <Link href={`/transaction-history/?id=${appwriteItemId}`} className="view-all-btn">
                View all
            </Link>
        </header>
        <Tabs defaultValue={appwriteItemId} className="w-full">
            <TabsList className="recent-transaction-tablist">
                {accounts.map((account: Account) => (
                    <TabsTrigger key={account.id} value={account.appwriteItemId}>
                        <BankTabItem 
                            account={account}
                            key={account.id}
                            appwriteItemId={appwriteItemId}
                        />
                    </TabsTrigger>
                ))}
            </TabsList>
            {accounts.map((account: Account) => (
                <TabsContent
                    value={account.appwriteItemId}
                    key={account.id}
                    className="space-y-4"
                >
                    <BankInfo 
                        account={account}
                        appwriteItemId={appwriteItemId} 
                        type={"full"}  /> 
                    <TransactionsTable 
                        transactions={currentTransactions}
                    />
                    {totalPage > 1 && (
                        <div className="my-4 w-full">
                            <Pagination page={page} totalPages={totalPage} />
                        </div>
                    )}
                </TabsContent>
            ))}
        </Tabs>
    </section>
  )
}

export default RecentTransactions