'use client';

import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useTheme } from 'next-themes';

// --- ICONS ---
const GitHubIcon = () => <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="20" width="20"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>;
const FileBracesIcon = () => <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="24" width="24"><path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20ZM9.41 16.41L10.83 15L9.41 13.59L10.12 12.88L12.24 15L10.12 17.12L9.41 16.41ZM14.59 16.41L13.88 17.12L11.76 15L13.88 12.88L14.59 13.59L13.17 15L14.59 16.41Z"></path></svg>;
const UserIcon = () => <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="20" width="20"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"></path></svg>;
const MenuIcon = () => <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="24" width="24"><path d="M4 6h16M4 12h16M4 18h16"></path></svg>;
const CloseIcon = () => <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="24" width="24"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>;
const HeadsetIcon = () => <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="24" width="24"><path d="M12 1a9 9 0 0 0-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h4v1h-7v2h6c1.66 0 3-1.34 3-3V10a9 9 0 0 0-9-9z"></path></svg>;
const SunIcon = () => <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="20" width="20"><path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 .5.5zM8 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 .5 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707z"></path></svg>;
const MoonIcon = () => <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="20" width="20"><path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path></svg>;

const CoreNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Reverted to the classic UserIcon
  const actions = [
    { id: 'login', href: '/user/login', icon: <UserIcon />, label: 'Creator Login' },
    { id: 'admin', href: '/admin/login', icon: <GitHubIcon />, label: 'Admin Login' },
    { id: 'support', href: '/support', icon: <HeadsetIcon />, label: 'Contact Support' },
    { id: 'docs', href: '/docs', icon: <FileBracesIcon />, label: 'Read Documentation' },
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
          <Link
            key={action.id}
            href={action.href}
            passHref
            legacyBehavior>
            <a
              className="button action-button"
              id={action.id}
              aria-label={action.label}>
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
  
  /* Staggered spring animation for opening - NEW ORDER */
  .is-open #login { transition-delay: 0.0s; transform: translate(-50%, calc(-50% - 310px)) scale(1); }        /* 1st - Top */
  .is-open #admin { transition-delay: 0.05s; transform: translate(-50%, calc(-50% - 250px)) scale(1); }       /* 2nd */
  .is-open #support { transition-delay: 0.1s; transform: translate(-50%, calc(-50% - 190px)) scale(1); }     /* 3rd */
  .is-open #docs { transition-delay: 0.15s; transform: translate(-50%, calc(-50% - 130px)) scale(1); }        /* 4th */
  .is-open #theme-toggle { transition-delay: 0.2s; transform: translate(-50%, calc(-50% - 70px)) scale(1); } /* 5th - Bottom */


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

export default CoreNav;
