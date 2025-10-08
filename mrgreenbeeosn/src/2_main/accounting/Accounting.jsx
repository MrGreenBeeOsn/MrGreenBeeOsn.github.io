import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function Accounting() {
  return (<>

  <main class="image image2">
      
    <h4><HashLink smooth to="/accounting#accounting-terms"><mark className="highlight-tertiary-padding-4-8">Accounting</mark></HashLink></h4>

    <h2 className="margin-y-50 text-center">What is accounting?</h2>

    {/* This is the content of Accounting Term. */}

    <p><strong>Accounting</strong> is the system of recording, classifying, summarizing, and analyzing financial transactions of a business or individual. It's like a special language that helps us understand the financial health of something, kind of like a checkup for your money.</p>

    <p className="margin-top-20">Here's a breakdown of what <strong>accounting</strong> involves:</p>

      <ul className="list-square">
        
        <li><strong>Tracking Money Flow</strong>: <strong>Accounting</strong> tracks all the money coming in (income) and going out (expenses) of a business or person. This includes things like sales made, money spent on rent or supplies, salaries paid, and bills received.</li>

        <li><strong>Financial Report Cards</strong>: Accountants use this financial information to create reports that summarize everything. These reports are like financial report cards that show how much money a business has, where it came from, and where it went.</li>

        <li><strong>Making Sense of Numbers</strong>: <strong>Accounting</strong> helps us understand what the numbers mean. By analyzing the financial reports, accountants can see if a business is making a profit (earning more money than it spends) or a loss (spending more than it earns).</li>

        <li><strong>Following the Rules</strong>: There are specific guidelines, called <strong>accounting</strong> principles, that accountants follow when recording and reporting financial information. This ensures that everyone understands the information the same way.</li>

      </ul>

    <h4 className="margin-y-50 text-center">Why is <strong>accounting</strong> important?</h4>
      
    <p className="margin-top-20">Here are a few reasons:</p>

      <ul className="list-square">

        <li><strong>Helps Businesses Make Decisions</strong>: By understanding their financial health, businesses can make smart decisions about things like hiring new employees, opening new stores, or developing new products.</li>

        <li><strong>Secures Funding</strong>: If a business wants to borrow money from a bank, they need to provide good financial statements created by an accountant.</li>

        <li><strong>Ensures You Pay the Right Taxes</strong>: Accountants can help individuals and businesses calculate and file their taxes accurately and on time.</li>

        <li><strong>Knowing how much you have</strong>: It helps you understand how much money you have saved up and how much you can spend.</li>

        <li><strong>Making good choices</strong>: Knowing where your money goes helps you make smart decisions about spending and saving.</li>

        <li><strong>Learning valuable skills</strong>: Even though you're young, learning the basics of <strong>accounting</strong> can be helpful for later in life, whether you're managing your allowance or saving up for something special.</li>

      </ul>

    <p className="margin-top-20"><strong>Accounting</strong> might seem complex, but it's an essential tool for understanding money matters. It's like having a secret decoder ring for the financial world!</p>

    {/* =============================
          ☘️ Think simply!
    ============================= */}

    <hr class="hr-short"/>

    <h3 className="margin-bottom-50 text-center">☘️ Think simply!</h3>
    
    <p>Imagine you have a piggy bank full of your savings. That money belongs to you, and it represents your ownership of those coins and bills. Now, imagine you use some of that money to buy a delicious ice cream cone. The ice cream cone is yours, but you might still owe some money to your friend who helped you buy it.</p>

    <p className="margin-top-20"><strong>Accounting</strong> is like keeping track of all the money in your piggy bank, including:</p>

      <ul className="list-square">

        <li><strong>Money you put in</strong>: This is your income, like the allowance you get from your parents or the money you earn from selling lemonade.</li>

        <li><strong>Money you take out</strong>: This is your expense, like the money you spend on the ice cream cone or other things you buy.</li>

        <li><strong>Money left over</strong>: This is your profit, which is the difference between your income and your expenses.</li>

      </ul> 

    <p className="margin-top-20">Here's how it works:</p>

      <ul className="list-square">

        <li><strong>Piggy bank</strong>: This represents your finances, like your savings or your lemonade stand's earnings.</li>

        <li><strong>You</strong>: You're the one responsible for managing your money.</li>

        <li><strong>Money you put in</strong>: Every time you get money, you add it to your piggy bank (or record it somewhere).</li>

        <li><strong>Money you take out</strong>: Every time you spend money, you take it out of your piggy bank (or record it).</li>

        <li><strong>Money left over</strong>: You can check how much money you have left by subtracting your expenses from your income.</li>

      </ul>

    <h4 className="margin-y-50 text-center">Remember:</h4>
    
    <p><strong>Accounting</strong> is like a game of keeping track! It helps you understand your finances and make good decisions about your money, just like you make good choices about what to buy with your savings.</p>
    
    <p className="margin-top-50 text-small">February 22, 2024 · by 💎Gem ·</p>

  </main>

  </>);
}