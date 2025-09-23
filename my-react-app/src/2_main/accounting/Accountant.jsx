import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function Accountant() {
  return (<>

  <main className="image image2">
    
    <h4><HashLink smooth to="#accounting#accounting-terms"><mark className="highlight2">Accounting</mark></HashLink></h4>
    
    <h2 className="margin-y-50 text-center">What is an accountant?</h2>

    {/* This is the content of Accounting Term. */}

    <p>An <strong>accountant</strong> is a financial whiz who helps businesses and individuals keep track of their money. They're kind of like financial detectives or superheroes, making sure everything adds up and runs smoothly.</p>

    <p className="margin-top-20">Here's a breakdown of what <strong>accountants</strong> typically do:</p>

      <ul className="list-square">

        <li><strong>Money Tracker</strong>: <strong>Accountants</strong> record all the financial ins and outs of a business or person. This includes income (money coming in) from sales or salaries, and expenses (money going out) for rent, supplies, or groceries.</li>

        <li><strong>Report Card for Money</strong>: They create reports that summarize the financial health of a business or person. These reports are like report cards, showing how much money is coming in, where it's going, and if there's enough left over.</li>

        <li><strong>Tax Time Superhero</strong>: Many <strong>accountants</strong> help with taxes, which is money people pay to the government. They make sure the tax filings are accurate and complete, so you don't pay more than you owe.</li>

        <li><strong>Financial Advisor</strong>: Some <strong>accountants</strong> give advice on how to save money, invest wisely, or budget for big purchases. They help people make smart decisions about their financial future.</li>

      </ul>

    <p className="margin-top-20">There are different types of <strong>accountants</strong>, each with their own area of expertise. Some work for big companies, while others help individuals or small businesses.</p>

    <p>To become an <strong>accountant</strong>, most people get a bachelor's degree in accounting or a related field. They also need to be good with numbers, organized, and detail-oriented.</p>

    <p className="margin-top-20">In short, <strong>accountants</strong> are the behind-the-scenes heroes who help keep the financial world running smoothly!</p>

    {/* =============================
          ☘️ Think simply!
    ============================= */}

    <hr className="hr-short"/>
    
    <h3 className="margin-bottom-50 text-center">☘️ Think simply!</h3>

    <p>Imagine you have a piggy bank full of your savings. You put money in from your allowance or selling lemonade, and sometimes you take money out to buy toys or treats. An <strong>accountant</strong> is like a special helper for your piggy bank!</p>

    <p className="margin-top-20">Here's what they do:</p>

      <ul className="list-square">

        <li><strong>Counting your money</strong>: They help you keep track of how much money you have in your piggy bank, just like you might count your coins and bills sometimes.</li>
        
        <li><strong>Remembering where it goes</strong>: They write down where your money comes from (like allowance or lemonade sales) and where it goes (like buying toys or treats). It's like keeping a list so you don't forget!</li>

        <li><strong>Making reports</strong>: They take all that information and put it together in a way that's easy to understand, like a picture or a simple chart. This helps you see where your money is coming from and going to.</li>

        <li><strong>Helping you make choices</strong>: With all that information, they can help you decide if you have enough money for something you want or if you need to save up more. They're like your financial advisor, but for your piggy bank!</li>

      </ul>

      <h4 className="margin-y-50 text-center">Why are <strong>accountants</strong> important?</h4>

      <ul className="list-square">

        <li><strong>Knowing how much you have</strong>: It helps you understand how much money you can spend and how much you should save.</li>

        <li><strong>Making good choices</strong>: Knowing where your money goes helps you decide what to buy and how much to save for things you really want.</li>

        <li><strong>Learning valuable skills</strong>: Even though you're young, understanding how to take care of your money is important. <strong>Accountants</strong> can help you learn good habits early on!</li>

      </ul>

    <h4 className="margin-y-50 text-center">Remember:</h4>

    <p><strong>Accountants</strong> are like financial friends who help you keep track of your money, make smart choices, and reach your savings goals. They're like superheroes for your piggy bank!</p>

    <p className="margin-top-50 text-small">February 22, 2024 - by 💎Gem</p>
    
  </main>

  </>);
}