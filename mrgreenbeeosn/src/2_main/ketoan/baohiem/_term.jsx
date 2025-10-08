import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function () {
  return (<>

  <main className="image image2">
    
    <h4><HashLink smooth to="/bao-hiem#thuat-ngu-bao-hiem"><mark className="highlight-tertiary-padding-4-8">Bảo Hiểm</mark></HashLink></h4>
    
    <h2 className="margin-y-50 text-center">Bảo hiểm xã hội là gì?</h2>

    {/* Đây là nội dung của Thuật ngữ Bảo hiểm. */}

    

    {/* =============================
        ☘️ Hãy nghĩ thật đơn giản!
    ============================= */}

    <hr className="hr-short"/>

    <h3 className="margin-bottom-50 text-center">☘️ Hãy nghĩ thật đơn giản!</h3>

    

    <p className="margin-top-50 text-small"> · by 💎Gem ·</p>
    
  </main>

  </>);
}