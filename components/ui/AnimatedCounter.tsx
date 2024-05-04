import React from 'react'
import CountUp from 'react-countup/build/CountUp'

const AnimatedCounter = ({ amount}: {amount: number}) => {
  return (
    <div className=' w-full'>
        $ <CountUp
            decimals={4}
            end={amount} 
            decimal=','
            prefix='$'
            />
    </div>
  )
}

export default AnimatedCounter