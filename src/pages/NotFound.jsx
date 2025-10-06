import React from 'react';
import { Link } from 'react-router';

export const NotFound = () => {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    }}>
      <style>{`
        @keyframes glassFade {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes iconBounce {
          0% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0); }
        }
      `}</style>
      <div style={{
        background: 'rgba(255,255,255,0.7)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.12)',
        backdropFilter: 'blur(8px)',
        borderRadius: '24px',
        padding: '48px 32px',
        minWidth: '320px',
        maxWidth: '90vw',
        textAlign: 'center',
        animation: 'glassFade 1s cubic-bezier(.4,0,.2,1)'
      }}>
        <div style={{marginBottom: '24px'}}>
          <svg width="64" height="64" viewBox="0 0 64 64" style={{animation: 'iconBounce 1.2s infinite'}}>
            <circle cx="32" cy="32" r="30" fill="#f8f9fa" stroke="#dee2e6" strokeWidth="2" />
            <text x="32" y="42" textAnchor="middle" fontSize="32" fill="#495057" fontWeight="700" fontFamily="inherit">404</text>
            <circle cx="32" cy="24" r="4" fill="#adb5bd" />
            <ellipse cx="32" cy="50" rx="12" ry="4" fill="#dee2e6" />
          </svg>
        </div>
        <h2 style={{
          fontSize: '2rem',
          fontWeight: '600',
          color: '#495057',
          margin: '0 0 12px',
        }}>
          Oops! Page Not Found
        </h2>
        <p style={{
          fontSize: '1rem',
          color: '#6c757d',
          margin: '0 0 32px',
          maxWidth: '320px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/" style={{
          display: 'inline-block',
          padding: '12px 32px',
          background: 'rgba(73,80,87,0.9)',
          color: '#fff',
          borderRadius: '8px',
          fontSize: '1rem',
          fontWeight: '500',
          textDecoration: 'none',
          boxShadow: '0 2px 8px rgba(73,80,87,0.08)',
          transition: 'background 0.2s',
        }}
        onMouseEnter={e => e.target.style.background = '#343a40'}
        onMouseLeave={e => e.target.style.background = 'rgba(73,80,87,0.9)'}>
          Go Home
        </Link>
      </div>
    </div>
  );
};
