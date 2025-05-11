
      // Fade-in animation for products
      document.querySelectorAll('.product-card').forEach((card, i) => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(40px)';
        setTimeout(() => {
          card.style.transition = 'opacity 0.8s, transform 0.8s';
          card.style.opacity = 1;
          card.style.transform = 'translateY(0)';
        }, 200 + i * 200);
      });

      // Add to Cart button animation
      document.querySelectorAll('.cart-btn').forEach(btn => {
        btn.addEventListener('click', function() {
          btn.classList.add('clicked');
          setTimeout(() => btn.classList.remove('clicked'), 400);
          alert('Added to cart!');
        });
      });

      // Like button animation and toggle
      document.querySelectorAll('.like-btn').forEach(btn => {
        btn.addEventListener('click', function() {
          const icon = btn.querySelector('i');
          icon.classList.toggle('fa-solid');
          icon.classList.toggle('fa-regular');
          btn.classList.add('liked');
          setTimeout(() => btn.classList.remove('liked'), 400);
        });
      });
