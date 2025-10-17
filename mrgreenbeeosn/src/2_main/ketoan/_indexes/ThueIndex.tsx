import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import KeToanTopic from '@/components/KeToanTopic';

export default function ThueIndex(): React.JSX.Element {
  return (<>
     
  <main className="image image1 content">

    {/* =============================
          Kế Toán Topic
    ============================= */}

      <KeToanTopic />

    {/* =============================
        2. Thuật ngữ Thuế
    ============================= */}

    <h3 className="margin-y-50 text-center" id="thuat-ngu-thue">Thuật ngữ Thuế</h3>

    <div className="flex-container">

      <div className="sub-box">

        <ul className="list-border1">
      
          <li><Link to="/thue/thue-vat-la-gi?">Thuế VAT</Link></li>
          
          <li><Link to="/thue/thue-tncn-la-gi?">Thuế TNCN</Link></li>

          <li><Link to="/thue/thue-tndn-la-gi?">Thuế TNDN</Link></li>

          <li><Link to="/thue/thue-tai-san-la-gi?">Thuế tài sản</Link></li>

          <li><Link to="/thue/thue-quan-la-gi?">Thuế quan</Link></li>

        </ul>

      </div>

    </div>
    
  </main>

  </>);
}