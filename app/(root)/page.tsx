import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
  const loggedIn = {firstName : 'Aditya',lastName:'Parghi',email:'adityaparghi26@gmail.com'};

  return (
 <section className='home'> 
    <div className='home-content'>
      <header className='home-header'>
        <HeaderBox 
        type="greeting"
        title="Welcome"
        user={loggedIn ?.firstName || 'Guest'}
        subtext = "Access your account and transactions efficiently."
        />

        <TotalBalanceBox 
        accounts={[]}
        totalBanks={1}
        totalCurrentBalance={16545.50}
        />
      </header>REACENT TRANSACTIONS
    </div>
    <RightSidebar 
      user={loggedIn}
      transactions={[]}
      banks={[{currentBalance:1554.15},{currentBalance:9589.23}]}
     
      />
 </section>
  )
}

export default Home
