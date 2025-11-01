'use client';

import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useTheme } from 'next-themes';

// --- ICONS ---
const AdminIcon = () => <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="24" width="24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"></path></svg>;
const DocsIcon = () => <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="24" width="24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"></path></svg>;
const UserIcon = () => <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="20" width="20"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"></path></svg>;
const MenuIcon = () => <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="24" width="24"><path d="M4 6h16M4 12h16M4 18h16"></path></svg>;
const CloseIcon = () => <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="24" width="24"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>;

// --- NEW & UPDATED ICONS ---
const SupportAgentIcon = () => <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="24" width="24"><path d="M20 16.5c0-.28-.22-.5-.5-.5H18c-.28 0-.5.22-.5.5v2c0 .28.22.5.5.5h1.5v.5h-2c-.55 0-1-.45-1-1v-3.5c0-.55.45-1 1-1h2.5c.83 0 1.5.67 1.5 1.5v2c0 .83-.67 1.5-1.5 1.5H18v-1.5zM12 1C7.03 1 3 5.03 3 10v1.5c0 .83.67 1.5 1.5 1.5H6c.83 0 1.5-.67 1.5-1.5V10c0-2.76 2.24-5 5-5s5 2.24 5 5v1h-2v-1c0-1.65-1.35-3-3-3s-3 1.35-3 3v1.5c0 .83.67 1.5 1.5 1.5h1.12c.43.9.98 1.73 1.66 2.44.11.11.23.22.35.32.22.18.46.34.71.48V19c0 1.1-.9 2-2 2H6.5c-.83 0-1.5-.67-1.5-1.5V17H3v.5C3 19.43 4.57 21 6.5 21H12c2.21 0 4-1.79 4-4v-2.3c.53-.33 1-.74 1.4-1.2C18.19 12.55 19 11.36 19 10V4.5C19 2.57 17.43 1 15.5 1h-7C7.67 1 7 1.67 7 2.5V3H5V2.5C5 1.12 6.12 0 7.5 0h7C16.88 0 19 2.12 19 4.5V9c0 1.1-.9 2-2 2h-1V5h-2v6z"></path></svg>;
const SunIcon = () => <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="20" width="20"><path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 .5.5zM8 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 .5 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707z"></path></svg>;
const MoonIcon = () => <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="20" width="20"><path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path></svg>;

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const actions = [
    { id: 'login', href: '/admin/login', icon: <UserIcon />, label: 'Admin Login' },
    { id: 'admin', href: '/admin', icon: <AdminIcon />, label: 'Go to Admin Panel' },
    { id: 'docs', href: '/docs', icon: <DocsIcon />, label: 'Read Documentation' },
    { id: 'support', href: '/support', icon: <SupportAgentIcon />, label: 'Contact Support' },
  ];

  useEffect(() => {
    if (isOpen) {
      timerRef.current = setTimeout(() => setIsOpen(false), 5000);
    } else if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    return () => { if (timerRef.current) clearTimeout(timerRef.current) };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleThemeToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <StyledWrapper>
      <div className={`button-container ${isOpen ? 'is-open' : ''}`}>
        <button 
            className="button action-button" 
            id="theme-toggle"
            aria-label="Toggle Theme"
            onClick={handleThemeToggle}
        >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>

        {actions.map((action) => (
          <Link key={action.id} href={action.href} passHref legacyBehavior>
            <a 
              className="button action-button" 
              id={action.id} 
              aria-label={action.label}
            >
              {action.icon}
            </a>
          </Link>
        ))}

        <button className="button" id="main-fab" aria-label="Toggle quick actions menu" onClick={toggleMenu}>
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </StyledWrapper>
  );
};

const springAnimation = 'cubic-bezier(0.68, -0.55, 0.27, 1.55)';

const StyledWrapper = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 50;

  .button-container {
    position: relative;
    width: 60px;
    height: 60px;
  }

  .button {
    border: none;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    outline: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  #main-fab {
    background-color: #0d1117;
    color: #fff;
    height: 60px;
    width: 60px;
    z-index: 10;
    border: 2px solid #30363d;
    transition: transform 0.4s ${springAnimation}, background-color 0.3s ease, color 0.3s ease;
  }

  .action-button {
    background-color: #30363d;
    color: white;
    height: 50px;
    width: 50px;
    opacity: 0;
    visibility: hidden;
    transform: translate(-50%, -50%) scale(0.5);
    transition: all 0.4s ${springAnimation}, background-color 0.3s ease, color 0.3s ease;
    transition-delay: 0s; /* Default delay for closing */
  }

  /* --- Open State --- */
  .is-open #main-fab {
    transform: translate(-50%, -50%) rotate(90deg);
  }

  .is-open .action-button {
    opacity: 1;
    visibility: visible;
  }
  
  /* Staggered spring animation for opening */
  .is-open #support { transition-delay: 0.0s; transform: translate(-50%, calc(-50% - 310px)) scale(1); }
  .is-open #docs { transition-delay: 0.05s; transform: translate(-50%, calc(-50% - 250px)) scale(1); }
  .is-open #admin { transition-delay: 0.1s; transform: translate(-50%, calc(-50% - 190px)) scale(1); }
  .is-open #login { transition-delay: 0.15s; transform: translate(-50%, calc(-50% - 130px)) scale(1); }
  .is-open #theme-toggle { transition-delay: 0.2s; transform: translate(-50%, calc(-50% - 70px)) scale(1); }

  /* --- Dark Mode Contrast --- */
  html.dark & #main-fab,
  html.dark & .action-button {
    background-color: #CBD5E1; /* Light Gray */
    color: #0D1117; /* Dark Gray */
  }

  html.dark & #main-fab {
    border-color: #94A3B8;
  }
`;

export default FloatingActionButton;
