'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

const Header: React.FC = () => {
  // State for dropdown visibility (desktop)
  const [isCountriesOpen, setIsCountriesOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  // State for mobile menu drawer and submenus
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProductOpen, setIsMobileProductOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false);

  // Refs for dropdown containers (desktop)
  const countriesRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);
  const solutionsRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);

  // Ref for mobile menu content (to detect outside clicks)
  const mobileMenuContentRef = useRef<HTMLDivElement>(null);

  const router = useRouter();

  // Close desktop dropdowns on outside click
  useEffect(() => {
    const handleClickOutsideDesktop = (event: MouseEvent) => {
      if (
        countriesRef.current &&
        !countriesRef.current.contains(event.target as Node) &&
        productRef.current &&
        !productRef.current.contains(event.target as Node) &&
        solutionsRef.current &&
        !solutionsRef.current.contains(event.target as Node) &&
        resourcesRef.current &&
        !resourcesRef.current.contains(event.target as Node)
      ) {
        setIsCountriesOpen(false);
        setIsProductOpen(false);
        setIsSolutionsOpen(false);
        setIsResourcesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutsideDesktop);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideDesktop);
    };
  }, []);

  // Close mobile drawer on outside click and redirect to homepage
  useEffect(() => {
    const handleClickOutsideMobile = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        mobileMenuContentRef.current &&
        !mobileMenuContentRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
        setIsMobileProductOpen(false);
        setIsMobileSolutionsOpen(false);
        setIsMobileResourcesOpen(false);
        router.push('/'); // Redirect to homepage
      }
    };

    document.addEventListener('mousedown', handleClickOutsideMobile);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideMobile);
    };
  }, [isMobileMenuOpen, router]);

  // Handler to close the drawer (used by the close button)
  const handleCloseDrawer = () => {
    setIsMobileMenuOpen(false);
    setIsMobileProductOpen(false);
    setIsMobileSolutionsOpen(false);
    setIsMobileResourcesOpen(false);
  };

  return (
    <header className="header py-4">
      <div className="header-container">
        {/* Left Section: Logo + Countries (Desktop) / Logo (Mobile) */}
        <div className="header-left">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="Tymira Health Logo"
              width={124} // Mobile-first
              height={40}
              className="flex-shrink-0 logo"
            />
          </Link>

          {/* Countries Dropdown (Desktop Only) */}
          <div ref={countriesRef} className="countries-dropdown hidden md:block">
            <button
              onClick={() => setIsCountriesOpen(!isCountriesOpen)}
              className="countries-button"
            >
              <Image
                src="/images/header/kenya.svg"
                alt="Kenya Flag"
                width={24}
                height={24}
                className="flex-shrink-0 aspect-[1/1]"
              />
              <span className="country-text">Kenya</span>
              <Image
                src="/images/header/drop-down.svg"
                alt="Dropdown Icon"
                width={24}
                height={24}
              />
            </button>
            {isCountriesOpen && (
              <div className="countries-dropdown-menu">
                <Link href="#" passHref>
                  <button className="country-item">
                    <Image
                      src="/images/header/uganda.svg"
                      alt="Uganda Flag"
                      width={24}
                      height={24}
                      className="flex-shrink-0 aspect-[1/1]"
                    />
                    <span className="country-text">Uganda</span>
                  </button>
                </Link>
                <Link href="#" passHref>
                  <button className="country-item">
                    <Image
                      src="/images/header/tanzania.svg"
                      alt="Tanzania Flag"
                      width={24}
                      height={24}
                      className="flex-shrink-0 aspect-[1/1]"
                    />
                    <span className="country-text">Tanzania</span>
                  </button>
                </Link>
                <Link href="#" passHref>
                  <button className="country-item">
                    <Image
                      src="/images/header/rwanda.svg"
                      alt="Rwanda Flag"
                      width={24}
                      height={24}
                      className="flex-shrink-0 aspect-[1/1]"
                    />
                    <span className="country-text">Rwanda</span>
                  </button>
                </Link>
                <Link href="#" passHref>
                  <button className="country-item">
                    <Image
                      src="/images/header/nigeria.svg"
                      alt="Nigeria Flag"
                      width={24}
                      height={24}
                      className="flex-shrink-0 aspect-[1/1]"
                    />
                    <span className="country-text">Nigeria</span>
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Right Section: Country Flag and Menu Icon (Mobile) / Menu and Buttons (Desktop) */}
        <div className="header-right">
          {/* Mobile: Country Flag and Menu Icon */}
          <div className="flex items-center gap-4 md:hidden">
            {/* Country Flag (Mobile) */}
            <div className="country-flag-mobile">
              <Image
                src="/images/header/kenya.svg"
                alt="Kenya Flag"
                width={17.143}
                height={17.143}
                className="flex-shrink-0 aspect-[1/1]"
              />
            </div>

            {/* Menu Icon (Mobile) */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="menu-icon-mobile"
            >
              <Image
                src="/images/header/mobile-menu.svg"
                alt="Menu Icon"
                width={37.393}
                height={24} // Adjust height based on aspect ratio
                className="flex-shrink-0"
              />
            </button>
          </div>

          {/* Desktop: Menu and Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {/* Desktop Menu */}
            <nav className="header-nav">
              <div ref={productRef} className="menu-item">
                <button
                  onClick={() => setIsProductOpen(!isProductOpen)}
                  className="menu-button"
                >
                  <span className="menu-text">Product</span>
                  <Image
                    src="/images/header/drop-down.svg"
                    alt="Dropdown Icon"
                    width={24}
                    height={24}
                  />
                </button>
                {isProductOpen && (
                  <div className="menu-dropdown">
                    <Link href="#" passHref legacyBehavior>
                      <a className="menu-dropdown-item">Feature 1</a>
                    </Link>
                    <Link href="#" passHref legacyBehavior>
                      <a className="menu-dropdown-item">Feature 2</a>
                    </Link>
                    <Link href="#" passHref legacyBehavior>
                      <a className="menu-dropdown-item">Feature 3</a>
                    </Link>
                  </div>
                )}
              </div>

              <div ref={solutionsRef} className="menu-item">
                <button
                  onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                  className="menu-button"
                >
                  <span className="menu-text">Solutions</span>
                  <Image
                    src="/images/header/drop-down.svg"
                    alt="Dropdown Icon"
                    width={24}
                    height={24}
                  />
                </button>
                {isSolutionsOpen && (
                  <div className="menu-dropdown">
                    <Link href="#" passHref legacyBehavior>
                      <a className="menu-dropdown-item">Solution 1</a>
                    </Link>
                    <Link href="#" passHref legacyBehavior>
                      <a className="menu-dropdown-item">Solution 2</a>
                    </Link>
                  </div>
                )}
              </div>

              <div ref={resourcesRef} className="menu-item">
                <button
                  onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                  className="menu-button"
                >
                  <span className="menu-text">Resources</span>
                  <Image
                    src="/images/header/drop-down.svg"
                    alt="Dropdown Icon"
                    width={24}
                    height={24}
                  />
                </button>
                {isResourcesOpen && (
                  <div className="menu-dropdown">
                    <Link href="#" passHref legacyBehavior>
                      <a className="menu-dropdown-item">Guide 1</a>
                    </Link>
                    <Link href="#" passHref legacyBehavior>
                      <a className="menu-dropdown-item">Guide 2</a>
                    </Link>
                    <Link href="#" passHref legacyBehavior>
                      <a className="menu-dropdown-item">Guide 3</a>
                    </Link>
                  </div>
                )}
              </div>
            </nav>

            {/* Desktop Buttons */}
            <div className="flex items-center gap-4">
              <Link href="#" passHref>
                <button className="login-button">
                  <span className="login-text">Log In</span>
                </button>
              </Link>
              <Link href="#" passHref>
                <button className="try-button">
                  <span className="try-text">Try for 1 month</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className={`mobile-menu-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-content" ref={mobileMenuContentRef}>
            {/* Close Button */}
            <button className="mobile-menu-close-button" onClick={handleCloseDrawer}>
              <Image
                src="/images/header/close.svg"
                alt="Close Icon"
                width={20}
                height={20}
                className="close-icon"
              />
            </button>

            {/* Menu Items */}
            <div className="mobile-menu-items">
              {/* Products */}
              <div className="mobile-menu-item">
                <div
                  className="mobile-menu-item-header"
                  onClick={() => setIsMobileProductOpen(!isMobileProductOpen)}
                >
                  <span className="mobile-menu-text">Products</span>
                  <Image
                    src="/images/header/drop-down.svg"
                    alt="Dropdown Icon"
                    width={24}
                    height={24}
                    className={isMobileProductOpen ? 'rotate-180' : ''}
                  />
                </div>
                {isMobileProductOpen && (
                  <div className="mobile-submenu">
                    <Link href="#" passHref legacyBehavior>
                      <a className="mobile-submenu-item">Feature 1</a>
                    </Link>
                    <Link href="#" passHref legacyBehavior>
                      <a className="mobile-submenu-item">Feature 2</a>
                    </Link>
                    <Link href="#" passHref legacyBehavior>
                      <a className="mobile-submenu-item">Feature 3</a>
                    </Link>
                  </div>
                )}
              </div>

              {/* Solutions */}
              <div className="mobile-menu-item">
                <div
                  className="mobile-menu-item-header"
                  onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)}
                >
                  <span className="mobile-menu-text">Solutions</span>
                  <Image
                    src="/images/header/drop-down.svg"
                    alt="Dropdown Icon"
                    width={24}
                    height={24}
                    className={isMobileSolutionsOpen ? 'rotate-180' : ''}
                  />
                </div>
                {isMobileSolutionsOpen && (
                  <div className="mobile-submenu">
                    <Link href="#" passHref legacyBehavior>
                      <a className="mobile-submenu-item">Solution 1</a>
                    </Link>
                    <Link href="#" passHref legacyBehavior>
                      <a className="mobile-submenu-item">Solution 2</a>
                    </Link>
                  </div>
                )}
              </div>

              {/* Resources */}
              <div className="mobile-menu-item">
                <div
                  className="mobile-menu-item-header"
                  onClick={() => setIsMobileResourcesOpen(!isMobileResourcesOpen)}
                >
                  <span className="mobile-menu-text">Resources</span>
                  <Image
                    src="/images/header/drop-down.svg"
                    alt="Dropdown Icon"
                    width={24}
                    height={24}
                    className={isMobileResourcesOpen ? 'rotate-180' : ''}
                  />
                </div>
                {isMobileResourcesOpen && (
                  <div className="mobile-submenu">
                    <Link href="#" passHref legacyBehavior>
                      <a className="mobile-submenu-item">Guide 1</a>
                    </Link>
                    <Link href="#" passHref legacyBehavior>
                      <a className="mobile-submenu-item">Guide 2</a>
                    </Link>
                    <Link href="#" passHref legacyBehavior>
                      <a className="mobile-submenu-item">Guide 3</a>
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Try for 1 Month Button */}
            <Link href="#" passHref>
              <button className="mobile-try-button">
                <span className="try-text">Try for 1 month</span>
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;