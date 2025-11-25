<script>
  const menuBtn = document.querySelector('.mobile-menu-button');
  const navLinks = document.querySelector('.nav-links');

  menuBtn.addEventListener('click', () => {
    navLinks.style.display =
      navLinks.style.display === 'flex' ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.backgroundColor = '#fff';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '4rem';
    navLinks.style.right = '1rem';
    navLinks.style.padding = '1rem';
    navLinks.style.borderRadius = '0.5rem';
    navLinks.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
  });
</script>
