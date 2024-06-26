"use client"

import { formatAmount } from '@/lib/utils'
import AnimatedCounter from './AnimatedCounter'
import DoughnutChart from './DoughnutChart'

const TotalBalance = ({ accounts = [], totalBanks, totalCurrentBalance }: TotalBalanceBoxProps) => {
    return (
        <section className='total-balance'>
            <div className="total-balance-chart">
                <DoughnutChart accounts={accounts} /> 
            </div>
            <div className=" flex flex-col gap-6">
                <h2 className="header-2">
                    Bank Accounts: {totalBanks}
                </h2>
                <div className=" flex flex-col gap-2">
                    <p className="total-balance-label">
                        Total Current Balance
                    </p>
                    <div className="total-balance-label">
                        <AnimatedCounter amount={totalCurrentBalance}/>
                        {formatAmount(totalCurrentBalance)}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TotalBalance