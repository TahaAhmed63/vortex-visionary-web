
/**
 * Animation utility functions for enhancing UI animations
 */

// Function to add intersection observer for fade-in animations
export const initSectionAnimations = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.15 }
  );

  const sections = document.querySelectorAll('.section-fade-in');
  sections.forEach((section) => {
    observer.observe(section);
  });

  return observer;
};

// Function to initialize smooth scrolling for anchor links
export const initSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    });
  });
};

// Function to add parallax effect to an element
export const addParallaxEffect = (
  element: HTMLElement, 
  speed: number = 0.2
) => {
  const handleScroll = () => {
    const scrollY = window.scrollY;
    element.style.transform = `translateY(${scrollY * speed}px)`;
  };

  window.addEventListener('scroll', handleScroll);
  
  // Return a cleanup function to remove the event listener
  return () => window.removeEventListener('scroll', handleScroll);
};

// Function to animate a counter from 0 to target value
export const animateCounter = (
  element: HTMLElement, 
  target: number, 
  duration: number = 2000
) => {
  let startTime: number | null = null;
  const startValue = 0;

  const step = (timestamp: number) => {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    const value = Math.floor(progress * (target - startValue) + startValue);
    element.textContent = value.toString();

    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      element.textContent = target.toString();
    }
  };

  window.requestAnimationFrame(step);
};
