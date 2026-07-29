import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';
import ExternalLink from '@/components/icon/ExternalLink';
import { useState } from "react";

export default function VNDEALER(): React.JSX.Element {
  return (

    // <div className="topic-container">

    // <div className="margin-y-50 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

    <div className="margin-y-50 text-border1 padding-10 highlight-238-padding-4-8">

      {/* =============================
        VNDEALER
      ============================= */}

      <p className="margin-top-20 text-center">
      
        <span className="highlight-255-padding-0-4 text-border">
          <strong>🟩 The Accounting Equation</strong>
        </span>

      </p>

      <p className="margin-top-50 text-center">

          <p className="example-sentence text-center">
            
            <span className="pill sage">[Nợ][DEA]</span> &nbsp;
            <span className="pill sage">=</span>&nbsp;
            <span className="pill sage">[Có][LER]</span>
          </p>

        <div className="example">

          <p className="example-sentence text-center">
             <span className="sage">[Nợ][Dividends Expenses Assets]</span> &nbsp;
          </p>

          <p className="example-sentence text-center">
             <span className="sage">=</span>
          </p>

          <p className="example-sentence text-center">
             <span className="sage">[Có][Liabilities Equity Revenue]</span>
          </p>

        </div>


      </p>

    </div>
    
  );
}