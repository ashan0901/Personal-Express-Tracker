import React from 'react'
import picture1 from './Assets/5.jpg'
import picture2 from './Assets/1.jpg'
import picture5 from './Assets/3.jpg'
import picture6 from './Assets/2.jpg'
import picture7 from './Assets/6.jpg'
import picture8 from './Assets/8.jpg'
import './Resources.css'

const Resources = () => {
  return (
    <div className='resources' >
        <h1>Hello!    Welcome to MoneyMate Resources</h1>
      <p className='para1'>Tips For You</p>

      <div className='first-des'>
      <div className='des-test'>
      <h2> Five Easy Ways to Take Control of Your Personal Finances</h2>
      <p> <b>Make a budget:</b> Write down all the things you spend money on each month, like rent, groceries, and bills. 
        Add up how much you spend to make sure it's not more than what you earn.<br/><br/>
        <b>Save for emergencies:</b> Put aside some money each month for unexpected costs, like car repairs. 
        Even if it's just a little bit, it can add up over time and give you peace of mind.<br/><br/>
        <b>Be honest about your situation:</b> If you're stressed about money, you might be in debt or spending more than you earn.
        Try to earn extra money if you can, maybe by doing freelance work online.
        Also, look for ways to spend less, like finding a cheaper place to live or cutting back on unnecessary expenses.<br/><br/>
        <b>Ask for help:</b> Don't be afraid to talk to someone about your financial problems. 
        There are people and services that can give you advice and support without judging you.<br/><br/>
        <b>Keep track of your progress: </b>Check your budget regularly and see how you're doing.
         Celebrate your achievements, like paying off debt, and give yourself small rewards along the way.
     </p>
     </div>
    <div className='image'>
    <img alt ="img" src={picture1}/>  
    <img alt ="img" src={picture2}/>

    </div>

    </div>

<br></br>
<br></br>

    <div className='second-des'>
    <div className='image'>
    <img alt ="img" src={picture5}/>  
    <img alt ="img" src={picture6}/>
    </div>

      <div className='des-test'>
      <h2> Some  Ways to Boost Your Income</h2>
      <p><b>Explore Side Hustles:</b> Whether it's selling stuff you don't need or driving for a rideshare service,
       side hustles can beef up your income without leaving your main job.<br/><br/>
        <b>Negotiate a Raise:</b> Show your worth to your boss by highlighting your contributions and researching your salary range. 
        Asking for a raise or promotion can significantly boost your income.<br/><br/>
        <b> Rent Out Space:</b> Got extra room at home? Renting it out can bring in extra cash. 
        Just make sure it's allowed if you're a renter.<br/><br/>
        <b>Consider Education:</b> Going back to school can open up new career opportunities and 
        potentially lead to higher earnings.<br/><br/>
        <b>Learn New Skills:</b>Embrace lifelong learning through online courses,reading,
         or practicing with friends. New skills can make you more valuable in the job market.<br/><br/>
         <b>Review Benefits:</b>Don't overlook your workplace benefits.
          Opting out of unused ones or taking advantage of perks like free gym memberships can increase 
          your take-home pay.
     </p>
     </div>
    </div>
 <br></br>
 <br></br>

    <div className='third-des'>
      <div className='des-test'>
      <h2>Tips for Retirement and Financial management</h2>
      <p> <b>Try living on your retirement income:</b> <br/>
      Before you retire, check if you'll have enough money. Here's how:<br/>
•	Figure out where your money will come from after you retire, 
    like Social Security or savings.<br/>
•	Estimate how much money you'll have in retirement.
    Use tools like NerdWallet's retirement calculator.<br/>
•	Try living on that estimated retirement income for a bit. 
    If it's tough, you might need to rethink your plans.

<br/><br/>
        <b>Plan your days in retirement:</b><br/>
Know what you'll do after you stop working.<br/>
•	Think about what you want to do in retirement, like hobbies or helping others.<br/>
•	Some people struggle when they only think about stopping work without planning what to do next. <br/>
•	Happier retirees have at least a few things planned, like staying involved in activities or spending time with family. <br/>
 <br/>
        <b>Get ready for health changes:</b> <br/>
 As we get older, health issues can come up.<br/>
•	Many older adults have disabilities. <br/>
•	You can prepare for health changes by knowing what Medicare covers and finding local programs that offer support. <br/>
<br/>
        <b>Keep using your skills:</b> <br/>
Retirement doesn't mean you stop working forever. <br/>
•	Lots of older adults still work or volunteer. <br/>
•	You've gained skills throughout your life, so think about how you can use them to help others or try new things. <br/>

     </p>
    </div>
    <div className='image'>
    <img alt ="img" src={picture7}/>  
    <img alt ="img" src={picture8}/>

    </div>

    </div> 






</div>

    
  )
}

export default Resources
