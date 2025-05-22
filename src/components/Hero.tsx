import Image from 'next/image';
import styles from './Hero.module.css';

const Hero = () => {
  const heroStyle = {
    backgroundImage: 'url(/images/slider.jpg)',
    height: '703px',
    backgroundPosition: 'right center',
  };

  return (
    <section
      className="w-full bg-cover bg-center relative"
      style={heroStyle}
    >
      <div className="container mx-auto h-full flex items-center px-6 relative z-10">
        <div className="flex flex-col space-y-8">
          <h1
            className={styles.heroTitle}
            dangerouslySetInnerHTML={{ __html: "Find Verified<br> Healthcare Providers<br> Across Africa" }}
          />

          {/* Search Bar */}
          <div className={styles.searchBar}>
            {/* Mobile View: Single Input */}
            <div className={styles.mobileInputContainer}>
              <input
                type="text"
                placeholder="Search by locations, Insurance"
                className={styles.mobileInput}
              />
              <Image
                src="/images/hero/search-icon-mobile.svg"
                alt="Search Icon"
                width={16}
                height={16}
                className={styles.mobileSearchIcon}
              />
            </div>

            {/* Desktop View: Multiple Inputs */}
            <div className={styles.desktopInputs}>
              {/* Doctors Conditions */}
              <div className={styles.inputContainer}>
                <Image
                  src="/images/search-icon.svg"
                  alt="Search Icon"
                  width={24}
                  height={24}
                  className={styles.icon}
                />
                <input
                  type="text"
                  placeholder="Doctors Conditions"
                  className={styles.input}
                />
              </div>

              <div className={styles.divider}></div>

              {/* Locations (Nairobi, Kenya) */}
              <div className={`${styles.inputContainer} ${styles.inputContainerNarrow}`}>
                <Image
                  src="/images/location-icon.svg"
                  alt="Location Icon"
                  width={24}
                  height={24}
                  className={styles.icon}
                />
                <input
                  type="text"
                  placeholder="Nairobi, Kenya"
                  className={styles.input}
                />
              </div>

              <div className={styles.divider}></div>

              {/* Insurance */}
              <div className={`${styles.inputContainer} ${styles.inputContainerNarrow}`}>
                <Image
                  src="/images/insurance-icon.svg"
                  alt="Insurance Icon"
                  width={24}
                  height={24}
                  className={styles.icon}
                />
                <input
                  type="text"
                  placeholder="Insurance"
                  className={styles.input}
                />
              </div>
            </div>

            <button className={styles.searchButton}>
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;