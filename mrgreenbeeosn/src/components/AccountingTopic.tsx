import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';
import ExternalLink from '@/components/ExternalLink';
import { useState } from "react";

export default function AccountingTopic(): React.JSX.Element {
  const [selected, setSelected] = useState(false);
  return (

    <div className="topic-container">

      {/* =============================
        1. Accounting Terms
      ============================= */}

      <div  className="flex-topic">

        {/* Accounting */}
        <NavLink to="/accounting"
          className={`link-rounded ${selected ? 'selected' : ''}`}
          style={({ isActive }) => ({
            background: isActive ? 'var(--accent-color-50)' : '',
          })}
          // onMouseEnter={(e) => {
          //   if (!e.currentTarget.classList.contains('active')) {
          //     e.currentTarget.style.background = 'var(--accent-color-50)';
          //   }
          // }}
          // onMouseLeave={(e) => {
          //   if (!e.currentTarget.classList.contains('active')) {
          //     e.currentTarget.style.background = 'var(--tertiary-color)';
          //   }
          // }}
        >
          <mark className="highlight-tertiary-padding-2-4">Accounting</mark>
        </NavLink>

        {/* Tax */}
        <NavLink to="/tax"
          className={`link-rounded ${selected ? 'selected' : ''}`}
          style={({ isActive }) => ({
            background: isActive ? 'var(--accent-color-50)' : '',
          })}
          // onMouseEnter={(e) => {
          //   if (!e.currentTarget.classList.contains('active')) {
          //     e.currentTarget.style.background = 'var(--accent-color-50)';
          //   }
          // }}
          // onMouseLeave={(e) => {
          //   if (!e.currentTarget.classList.contains('active')) {
          //     e.currentTarget.style.background = 'var(--tertiary-color)';
          //   }
          // }}
        >
          <mark className="highlight-tertiary-padding-2-4">Tax</mark>
        </NavLink>

        {/* Finance */}
        <NavLink to="/finance"
          className={`link-rounded ${selected ? 'selected' : ''}`}
          style={({ isActive }) => ({
            background: isActive ? 'var(--accent-color-50)' : '',
          })}
          // onMouseEnter={(e) => {
          //   if (!e.currentTarget.classList.contains('active')) {
          //     e.currentTarget.style.background = 'var(--accent-color-50)';
          //   }
          // }}
          // onMouseLeave={(e) => {
          //   if (!e.currentTarget.classList.contains('active')) {
          //     e.currentTarget.style.background = 'var(--tertiary-color)';
          //   }
          // }}
        >
          <mark className="highlight-tertiary-padding-2-4">Finance</mark>
        </NavLink>

        {/* Law */}
        <NavLink to="/law"
          className={`link-rounded ${selected ? 'selected' : ''}`}
          style={({ isActive }) => ({
            background: isActive ? 'var(--accent-color-50)' : '',
          })}
          // onMouseEnter={(e) => {
          //   if (!e.currentTarget.classList.contains('active')) {
          //     e.currentTarget.style.background = 'var(--accent-color-50)';
          //   }
          // }}
          // onMouseLeave={(e) => {
          //   if (!e.currentTarget.classList.contains('active')) {
          //     e.currentTarget.style.background = 'var(--tertiary-color)';
          //   }
          // }}
        >
          <mark className="highlight-tertiary-padding-2-4">Law</mark>
        </NavLink>

        {/* Business */}
        <NavLink to="/business"
          className={`link-rounded ${selected ? 'selected' : ''}`}
          style={({ isActive }) => ({
            background: isActive ? 'var(--accent-color-50)' : '',
          })}
          // onMouseEnter={(e) => {
          //   if (!e.currentTarget.classList.contains('active')) {
          //     e.currentTarget.style.background = 'var(--accent-color-50)';
          //   }
          // }}
          // onMouseLeave={(e) => {
          //   if (!e.currentTarget.classList.contains('active')) {
          //     e.currentTarget.style.background = 'var(--tertiary-color)';
          //   }
          // }}
        >
          <mark className="highlight-tertiary-padding-2-4">Business</mark>
        </NavLink>

        {/* Insurance */}
        <NavLink to="/insurance"
          className={`link-rounded ${selected ? 'selected' : ''}`}
          style={({ isActive }) => ({
            background: isActive ? 'var(--accent-color-50)' : '',
          })}
          // onMouseEnter={(e) => {
          //   if (!e.currentTarget.classList.contains('active')) {
          //     e.currentTarget.style.background = 'var(--accent-color-50)';
          //   }
          // }}
          // onMouseLeave={(e) => {
          //   if (!e.currentTarget.classList.contains('active')) {
          //     e.currentTarget.style.background = 'var(--tertiary-color)';
          //   }
          // }}
        >
          <mark className="highlight-tertiary-padding-2-4">Insurance</mark>
        </NavLink>

			</div>

    </div>
    
  );
}