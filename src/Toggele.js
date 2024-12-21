import React from 'react'

export default function Toggele() {

    
		const menu_toggle = document.querySelector('.menu-toggle');
		const sidebar = document.querySelector('.sidebar');

		menu_toggle.addEventListener('click', () => {
			menu_toggle.classList.toggle('is-active');
			sidebar.classList.toggle('is-active');
		});
	
  return (
    <div>Toggele</div>
  )
}
