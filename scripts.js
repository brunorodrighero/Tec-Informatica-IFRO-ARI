// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function(e) {
	  e.preventDefault();
	  document.querySelector(this.getAttribute('href')).scrollIntoView({
		behavior: 'smooth'
	  });
	});
  });
  
  // Toggle hamburger menu on mobile
  document.getElementById('nav-toggle').addEventListener('click', function() {
	const navMenu = document.getElementById('nav-menu');
	navMenu.classList.toggle('hidden');
  });
  
  // Form submission with redirect
  document.getElementById('contact-form').addEventListener('submit', function(e) {
	e.preventDefault();
	const form = this;
	const formData = new FormData(form);
	const email = formData.get('email');
  
	// Basic email validation
	if (!email.includes('@')) {
	  alert('Por favor, insira um email válido.');
	  return;
	}
  
	// Send form data to Formspree
	fetch('https://formspree.io/f/movdjroa', {
	  method: 'POST',
	  body: formData,
	  headers: {
		'Accept': 'application/json'
	  }
	})
	.then(response => {
	  if (response.ok) {
		alert('Mensagem enviada com sucesso! Redirecionando para a página do curso.');
		setTimeout(() => {
		  window.location.href = 'https://portal.ifro.edu.br/ariquemes/cursos/1987-tecnico-em-informatica';
		}, 1000);
	  } else {
		alert('Erro ao enviar a mensagem. Tente novamente.');
	  }
	})
	.catch(error => {
	  console.error('Erro ao enviar formulário:', error);
	  alert('Erro ao enviar a mensagem. Verifique sua conexão.');
	});
  });
  
  // Load dynamic content from data.json
  fetch('data.json')
	.then(response => response.json())
	.then(data => {
	  // Populate Disciplines Carousel
	  const disciplinesCarousel = document.getElementById('disciplines-carousel');
	  data.disciplines.forEach(discipline => {
		const item = document.createElement('div');
		item.className = 'carousel-item w-80 mx-2 hover-scale';
		item.innerHTML = `
		  <div class="bg-white p-4 rounded-lg shadow">
			<h3 class="text-lg font-semibold">${discipline.name}</h3>
			<p>${discipline.description} (${discipline.hours}h)</p>
		  </div>
		`;
		disciplinesCarousel.appendChild(item);
	  });
  
	  // Populate Projects Carousel
	  const projectsCarousel = document.getElementById('projects-carousel');
	  data.projects.forEach(project => {
		const item = document.createElement('div');
		item.className = 'carousel-item w-80 mx-2 hover-scale';
		item.innerHTML = `
		  <div class="bg-white p-4 rounded-lg shadow">
			<h3 class="text-lg font-semibold">${project.name}</h3>
			<p>${project.description}</p>
			<a href="${project.github}" class="text-green-600 hover:underline" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
		  </div>
		`;
		projectsCarousel.appendChild(item);
	  });
  
	  // Populate Testimonials
	  const testimonialsGrid = document.getElementById('testimonials-grid');
	  data.testimonials.forEach(testimonial => {
		const item = document.createElement('div');
		item.className = 'bg-white p-6 rounded-lg shadow hover-scale';
		item.innerHTML = `
		  <p class="italic">"${testimonial.quote}"</p>
		  <p class="mt-4 font-semibold">${testimonial.author}</p>
		`;
		testimonialsGrid.appendChild(item);
	  });
  
	  // Populate Events Table
	  const eventsTable = document.getElementById('events-table');
	  data.events.forEach(event => {
		const row = document.createElement('tr');
		row.innerHTML = `
		  <td class="p-2 border">${event.name}</td>
		  <td class="p-2 border">${event.date}</td>
		  <td class="p-2 border">${event.description}</td>
		`;
		eventsTable.appendChild(row);
	  });
	})
	.catch(error => console.error('Erro ao carregar data.json:', error));