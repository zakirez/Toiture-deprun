document.documentElement.classList.add('js');document.addEventListener('DOMContentLoaded',()=>{document.body.classList.add('js-ready');const nodes=[...document.querySelectorAll('.fade-up')];const reveal=e=>e.classList.add('is-visible');if(!('IntersectionObserver'in window)){nodes.forEach(reveal)}else{const obs=new IntersectionObserver(entries=>entries.forEach(x=>{if(x.isIntersecting){reveal(x.target);obs.unobserve(x.target)}}),{threshold:.08,rootMargin:'0px 0px 30px 0px'});nodes.forEach(n=>{if(n.getBoundingClientRect().top<innerHeight)reveal(n);else obs.observe(n)})}const toggle=document.querySelector('.nav-toggle'),nav=document.querySelector('.nav-links');toggle?.addEventListener('click',()=>{const o=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(o))});document.querySelectorAll('form[data-mail]').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();const fd=new FormData(form);const fields=[...fd].map(([k,v])=>k+': '+v).join('\n');location.href='mailto:Toiture.deprun@gmail.com?subject='+encodeURIComponent('Demande de devis - Deprun Couvreur')+'&body='+encodeURIComponent(fields)}))});

/* Effet machine à écrire pour les titres H1 des bannières. */
document.addEventListener('DOMContentLoaded', () => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('.hero h1').forEach(heading => {
    if (reduced) return;
    const html = heading.innerHTML;
    const plain = html.replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]*>/g, '');
    const lines = plain.split('\n');
    const fullText = lines.join(' ');
    heading.setAttribute('aria-label', fullText);
    const height = Math.ceil(heading.getBoundingClientRect().height);
    heading.style.minHeight = height + 'px';
    heading.classList.add('typing-active', 'is-visible');
    heading.innerHTML = '<span class="typing-output" aria-hidden="true"></span><span class="typing-caret" aria-hidden="true"></span>';
    const output = heading.querySelector('.typing-output');
    let position = 0;
    const chars = Array.from(lines.join('\n'));
    const draw = () => {
      if (position >= chars.length) {
        heading.classList.add('typing-finished');
        return;
      }
      position++;
      output.textContent = chars.slice(0, position).join('');
      window.setTimeout(draw, 40);
    };
    window.setTimeout(draw, 160);
  });
});
