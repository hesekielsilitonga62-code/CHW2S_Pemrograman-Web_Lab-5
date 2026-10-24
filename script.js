
// carousel
(() => {
	const carousel = document.getElementById('carousel');
	if (!carousel) return; // bukan halaman Beranda

	const carousel_buttons = document.querySelectorAll('[data-banner-button]');
	let active_index = 0;

	carousel.style.width = `${carousel.children.length}00vw`;

	carousel_buttons[0].addEventListener('click', () => {
		if (active_index == 0)
			return;

		active_index -= 1;

		carousel.style.transform = `translateX(${0 - active_index}00vw)`;
	});

	carousel_buttons[1].addEventListener('click', () => {
		if (active_index == carousel.children.length - 1)
			return;

		active_index += 1;

		carousel.style.transform = `translateX(${0 - active_index}00vw)`;
	});
})();


// pembayaran
(() => {
	const totalEl = document.getElementById('total');
	const form = document.getElementById('payment-form');
	if (!totalEl || !form) return; // bukan halaman Pembayaran

	const rupiah = (n) => 'Rp' + n.toLocaleString('id-ID');

	// Total = harga tiket x jumlah + biaya layanan x jumlah
	const qty = 1;
	const total = Number(totalEl.dataset.ticket) * qty + Number(totalEl.dataset.fee) * qty;
	totalEl.textContent = rupiah(total);

	// Tombol bayar (sementara masih demo, belum ada backend)
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const method = form.querySelector('input[name="payment"]:checked').value;
		alert(`Pembayaran ${rupiah(total)} via ${method} (demo, belum terhubung backend)`);
	});
})();
