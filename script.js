const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Parallax subtle on hero
const orb1 = document.querySelector('.orb-1');
const orb2 = document.querySelector('.orb-2');

document.addEventListener('mousemove', (event) => {
  const x = (event.clientX / window.innerWidth - 0.5) * 20;
  const y = (event.clientY / window.innerHeight - 0.5) * 20;

  if (orb1) {
    orb1.style.transform = `translate(${x}px, ${y}px)`;
  }
  if (orb2) {
    orb2.style.transform = `translate(${-x * 0.5}px, ${-y * 0.5}px)`;
  }
});
