import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';
import ExternalLink from '@/components/icon/ExternalLink';
import { useState } from "react";

export default function ADELER(): React.JSX.Element {
  return (

    // <div className="topic-container">

    // <div className="margin-y-50 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

    <div className="margin-y-50 text-border1 padding-10 highlight-238-padding-4-8">

      {/* =============================
        ADELER
      ============================= */}

      <p className="margin-top-20 text-center">
      
        <span className="highlight-255-padding-0-4 text-border">
          <strong>+ - Assets • Liabilities - +</strong>
        </span>

      </p>

      <p className="text-center">
      
        <span className="highlight-255-padding-0-4 text-border">
          <strong>+ - Dividend • Equity - +</strong>
        </span>

      </p>

      <p className="text-center">
      
        <span className="highlight-255-padding-0-4 text-border">
          <strong>+ - Expenses • Revenue - +</strong>
        </span>

      </p>

    </div>
    
  );
}