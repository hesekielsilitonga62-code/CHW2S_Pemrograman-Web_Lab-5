
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


// jam dan tanggal
(() => {
	const dateList = document.getElementById('date-list');
	const timeList = document.getElementById('time-list');
	if (!dateList || !timeList) return; // bukan halaman JamDanTanggal

	const dateLabel = document.getElementById('date-label');

	const MOVIE = 'Love 911';
	const DAYS = 7;
	const TIMES = ['10:00', '13:00', '16:00', '19:00'];
	const NEXT_PAGE = 'Pembayaran.html'; // ganti ke halaman pilih seat jika sudah ada

	// kartu tanggal
	const DATE_BASE = 'flex h-[100px] w-[100px] flex-col items-center justify-center rounded-lg border-0 leading-tight transition';
	const DATE_IDLE = 'cursor-pointer bg-red text-white/50 hover:text-white';
	const DATE_ACTIVE = 'cursor-pointer bg-yellow text-black';
	const DATE_OFF = 'cursor-not-allowed bg-red/40 text-white/20';

	// tombol jam
	const TIME_BASE = 'h-[38px] w-[100px] rounded-lg border text-[22px] font-light transition';
	const TIME_IDLE = 'cursor-pointer border-black/60 bg-black/60 text-white hover:border-yellow';
	const TIME_OFF = 'cursor-not-allowed border-black/30 bg-transparent text-black/30';

	const fmt = (opt) => new Intl.DateTimeFormat('en-US', opt);
	const fMonth = fmt({ month: 'short' });
	const fWeekday = fmt({ weekday: 'short' });
	const fWeekdayLong = fmt({ weekday: 'long' });
	const fMonthLong = fmt({ month: 'long' });
	const longDate = (d) => `${fWeekdayLong.format(d)}, ${d.getDate()} ${fMonthLong.format(d)} ${d.getFullYear()}`;
	const toKey = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

	const now = new Date();
	const dates = Array.from({ length: DAYS }, (_, i) => new Date(now.getFullYear(), now.getMonth(), now.getDate() + i));

	// jam yang sudah lewat tidak bisa dipilih
	const isPast = (date, time) => {
		const [h, m] = time.split(':').map(Number);
		return new Date(date.getFullYear(), date.getMonth(), date.getDate(), h, m) <= now;
	};
	const hasSlot = (date) => TIMES.some((t) => !isPast(date, t));

	let selectedDate = dates.find(hasSlot) || null;

	const el = (tag, className, text) => {
		const node = document.createElement(tag);
		node.className = className;
		if (text) node.textContent = text;
		return node;
	};

	const render = () => {
		dateList.replaceChildren(...dates.map((d) => {
			const off = !hasSlot(d);
			const active = d === selectedDate;
			const btn = el('button', `${DATE_BASE} ${off ? DATE_OFF : active ? DATE_ACTIVE : DATE_IDLE}`);
			btn.type = 'button';
			btn.disabled = off;
			btn.setAttribute('aria-pressed', String(active));
			btn.append(
				el('span', 'text-[19px] font-light', fMonth.format(d)),
				el('span', 'text-[32px] font-bold', String(d.getDate())),
				el('span', 'text-[19px] font-light', fWeekday.format(d)),
			);
			btn.addEventListener('click', () => {
				selectedDate = d;
				render();
			});
			return btn;
		}));

		dateLabel.textContent = selectedDate ? longDate(selectedDate) : '';

		timeList.replaceChildren(...TIMES.map((t) => {
			const off = !selectedDate || isPast(selectedDate, t);
			const btn = el('button', `${TIME_BASE} ${off ? TIME_OFF : TIME_IDLE}`, t);
			btn.type = 'button';
			btn.disabled = off;
			btn.addEventListener('click', () => {
				// disimpan supaya bisa dibaca halaman berikutnya (seat / pembayaran)
				sessionStorage.setItem('tiketan_jadwal', JSON.stringify({
					movie: MOVIE,
					date: toKey(selectedDate),
					time: t,
				}));
				window.location.href = NEXT_PAGE;
			});
			return btn;
		}));
	};

	render();
})();
