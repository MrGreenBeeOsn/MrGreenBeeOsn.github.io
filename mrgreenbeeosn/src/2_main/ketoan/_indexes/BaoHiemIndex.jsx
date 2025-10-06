import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import KeToanTopic from '/src/components/KeToanTopic';

export default function BaoHiemIndex() {
  return (<>
     
  <main className="image image1 content">

    {/* =============================
          Kế Toán Topic
    ============================= */}
    
      <KeToanTopic />
    
    {/* =============================
          6. Thuật ngữ Bảo hiểm
    ============================= */}

    <h3 className="margin-y-50 text-center text-center" id="thuat-ngu-bao-hiem">Thuật ngữ Bảo hiểm</h3>

    <div className="flex-container">

      <div className="sub-box">

        <ul className="list-border1">
      
          <li><Link to="/bao-hiem/bao-hiem-xa-hoi-la-gi?">Bảo hiểm xã hội</Link></li>
          
          <li><Link to="/bao-hiem/bao-hiem-y-te-la-gi?">Bảo hiểm y tế</Link></li>

          <li><Link to="/bao-hiem/bao-hiem-that-nghiep-la-gi?">Bảo hiểm thất nghiệp</Link></li>

        </ul>

      </div>

    </div>
    
  </main>

  </>);
}