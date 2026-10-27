// Data film (dipakai halaman JamDanTanggal & Pembayaran)
// Data producer, director, author, cast, dan synopsis dirangkum dari sumber publik (IMDb, Wikipedia, situs resmi/media); silakan koreksi bila perlu.
const MOVIES = {
	love911: {
		title: 'Love 911', poster: 'assets/Love 911.png', rating: '4.9',
		genre: 'Comedy, Romance',
		producer: 'Baek Sun-hee, Son Seung-jin',
		director: 'Jeong Gi-hun',
		author: 'Jeong Gi-hun, Park Sang-min',
		cast: 'Go Soo, Han Hyo-Joo',
		synopsis: "A firefighter who lost his wife in a tragic accident and a doctor who is facing a lawsuit over a medical malpractice attempt to heal each other's emotional wounds as they work together in life-threatening emergency situations.",
	},
	jujutsukaisen0: {
		title: 'Jujutsu Kaisen 0', poster: 'assets/Jujutsu kaisen 0.png', rating: '4.4',
		genre: 'Action, Dark Fantasy',
		producer: "Hiroaki Matsutani, Makoto Kimura, Toshihiro Maeda",
		director: "Sunghoo Park",
		author: "Gege Akutami (manga), Hiroshi Seko (screenplay)",
		cast: "Megumi Ogata, Kana Hanazawa, Yuichi Nakamura",
		synopsis: "Yuta Okkotsu is a nervous high school student haunted by his childhood friend Rika, who has become a powerful Curse. Satoru Gojo, a teacher at Jujutsu High, convinces him to enroll at the school for young exorcists, where Yuta must learn to face the Curse that follows him.",
	},
	devilwearsprada: {
		title: 'The Devil Wears Prada', poster: 'assets/Devil wears prada.png', rating: '4.6',
		genre: 'Comedy, Drama',
		producer: "Wendy Finerman",
		director: "David Frankel",
		author: "Aline Brosh McKenna (screenplay), Lauren Weisberger (characters)",
		cast: "Meryl Streep, Anne Hathaway, Emily Blunt, Stanley Tucci",
		synopsis: "Almost twenty years after the original film, Miranda Priestly returns to a fashion and publishing world reshaped by the decline of print media. This time she goes head to head with Emily Charlton, her former assistant turned rival executive, as both fight over influence and advertising revenue.",
	},
	avengers: {
		title: 'Avengers : End Game', poster: 'assets/Avangers.png', rating: '4.9',
		genre: 'Sci-Fi, Superhero',
		producer: "Kevin Feige",
		director: "Anthony Russo, Joe Russo",
		author: "Christopher Markus, Stephen McFeely",
		cast: "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson",
		synopsis: "After the devastation caused by Thanos, the surviving Avengers and their allies come together once more. With a plan built around time travel, they set out to undo the damage and restore the universe, whatever the cost.",
	},
	kuasagelap: {
		title: 'Kuasa Gelap', poster: 'assets/kuasa gelap 1.png', rating: '4.7',
		genre: 'Horror, Mystery',
		producer: "Robert Ronny, Arvin Sutedja, Pandu Birantoro",
		director: "Bobby Prasetyo",
		author: "Robert Ronny, Andri Cahyadi",
		cast: "Lukman Sardi, Jerome Kurnia, Astrid Tiar, Lea Ciarachel, Freya JKT48",
		synopsis: "After a summoning ritual goes wrong, two girls become possessed, and their families turn to Father Rendra, a veteran exorcist. He needs help from Father Thomas, a young priest struggling with doubts about his faith, and together they face a possession far more serious than it first appears.",
	},
	sore: {
		title: 'Sore : Istri Dari Masa Depan', poster: 'assets/Sore.png', rating: '4.4',
		genre: 'Drama, Sci-Fi',
		producer: "Suryana Paramita",
		director: "Yandy Laurens",
		author: "Yandy Laurens",
		cast: "Dion Wiyoko, Sheila Dara Aisha, Goran Bogdan",
		synopsis: "Jonathan, a photographer who neglects his own health, has his routine upended when a mysterious woman named Sore appears and claims to be his wife from the future. She has one mission: to change his habits and way of life before it is too late.",
	},
	mencuriradensaleh: {
		title: 'Mencuri Raden Saleh', poster: 'assets/mencuri raden saleh.png', rating: '4.6',
		genre: 'Action, Crime, Heist',
		producer: "Cristian Imanuell",
		director: "Angga Dwimas Sasongko",
		author: "Angga Dwimas Sasongko, Husein M. Atmodjo",
		cast: "Iqbaal Ramadhan, Angga Yunanda, Rachel Amanda, Umay Shahab, Aghniny Haque, Ari Irham",
		synopsis: "A group of young friends assemble a team to steal a famous painting by the maestro Raden Saleh from the State Palace. Their plan involves forgery, hacking and manipulation, but along the way friendship, love and family are put at risk.",
	},
	agaklaen: {
		title: 'Agak Laen : Menyala Pantiku', poster: 'assets/agak laen.png', rating: '4.9',
		genre: 'Comedy, Mystery',
		producer: "Dipa Andika, Ernest Prakasa",
		director: "Muhadkly Acho",
		author: "Muhadkly Acho",
		cast: "Boris Bokir, Indra Jegel, Oki Rengga, Bene Dion",
		synopsis: "After repeatedly failing their missions, four detectives are given one last chance: go undercover in a nursing home to find the fugitive wanted for the murder of the mayor's child.",
	},
};
const getMovie = (id) => MOVIES[id] || null; // null = id tidak dikenal

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

// Pemilihan Film
(() => {
	const btns = document.querySelectorAll('[data-movie-action]');

	for (const btn of btns)
	{
		btn.addEventListener('click', () => {
			const movie_id = btn.parentElement.parentElement.dataset.movieId;

			window.location.replace(`Seat.html?id=${ movie_id }`);
		});
	}
})();


// pembayaran
(() => {
	const totalEl = document.getElementById('total');
	const form = document.getElementById('payment-form');
	if (!totalEl || !form) return; // bukan halaman Pembayaran

	const params = new URLSearchParams(window.location.search);
	const rupiah = (n) => 'Rp' + n.toLocaleString('id-ID');


	const movie = getMovie(params.get('id')); // null = id tidak dikenal

	const posterEl = document.getElementById('poster');
	if (movie) {
		posterEl.src = movie.poster;
		posterEl.alt = movie.title;
		document.getElementById('movie-title').textContent = movie.title;
		// judul panjang dikecilkan supaya tidak terlalu memakan tempat
		if (movie.title.length > 20) document.getElementById('movie-title').style.fontSize = '40px';
		document.getElementById('movie-rating').textContent = movie.rating;
		document.title = `Pembayaran - ${movie.title}`;
	} else {
		posterEl.style.visibility = 'hidden';
		document.getElementById('movie-title').textContent = 'Film tidak ditemukan';
		document.getElementById('movie-rating').textContent = '-';
	}

	
	const dm = /^(\d{4})-(\d{2})-(\d{2})$/.exec(params.get('d') || '');
	const time = params.get('t') || '';
	let scheduleText = '-';
	if (dm) {
		const date = new Date(Number(dm[1]), Number(dm[2]) - 1, Number(dm[3]));
		const f = (opt) => new Intl.DateTimeFormat('en-US', opt).format(date);
		scheduleText = `${f({ weekday: 'long' })}, ${date.getDate()} ${f({ month: 'long' })} ${date.getFullYear()}`;
		if (/^\d{2}:\d{2}$/.test(time)) scheduleText += `, ${time}`;
	}
	document.getElementById('schedule').textContent = scheduleText;

	const SEAT_RE = /^[A-HJ-L](?:[1-9]|1[0-6])$/; // baris A-L tanpa I, nomor 1-16
	const seats = [...new Set(params.getAll('seat'))]
		.filter((seat) => SEAT_RE.test(seat))
		.slice(0, 10)
		.sort((a, b) => (a[0] === b[0] ? Number(a.slice(1)) - Number(b.slice(1)) : a[0] < b[0] ? -1 : 1));
	const qty = seats.length;


	const ticketPrice = Number(totalEl.dataset.ticket);
	const fee = Number(totalEl.dataset.fee);
	const feeCount = qty > 0 ? 1 : 0;
	const total = ticketPrice * qty + fee * feeCount;

	document.getElementById('ticket-label').textContent = `${qty} Tiket`;
	document.getElementById('seat-list').textContent = qty ? seats.join(', ') : 'Belum ada kursi';
	document.getElementById('ticket-price').textContent = `${rupiah(ticketPrice)} x ${qty}`;
	document.getElementById('fee-price').textContent = `${rupiah(fee)} x ${feeCount}`;
	totalEl.textContent = rupiah(total);

	// Tanpa kursi atau film tidak dikenal, pembayaran tidak boleh jalan
	const payButton = document.getElementById('pay-button');
	payButton.disabled = qty === 0 || !movie;

	// Tombol bayar 
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		if (qty === 0 || !movie) return;
		const method = form.querySelector('input[name="payment"]:checked').value;
		alert(`Pembayaran ${rupiah(total)} film ${movie.title}, ${qty} tiket (${seats.join(', ')}) via ${method}`);
	});
})();


// jam dan tanggal
(() => {
	const dateList = document.getElementById('date-list');
	const timeList = document.getElementById('time-list');
	if (!dateList || !timeList) return; // bukan halaman JamDanTanggal

	const dateLabel = document.getElementById('date-label');

	// detail film berdasarkan ?id=... di URL
	const movie = getMovie(new URLSearchParams(window.location.search).get('id'));
	const setText = (id, value) => { document.getElementById(id).textContent = value; };
	const posterEl = document.getElementById('movie-poster');
	if (movie) {
		posterEl.src = movie.poster;
		posterEl.alt = movie.title;
		setText('movie-title', movie.title);
		// judul panjang dikecilkan supaya tidak terlalu memakan tempat
		if (movie.title.length > 20) document.getElementById('movie-title').style.fontSize = '40px';
		setText('movie-rating', movie.rating);
		setText('movie-genre', movie.genre);
		setText('movie-producer', movie.producer);
		setText('movie-director', movie.director);
		setText('movie-author', movie.author);
		setText('movie-cast', movie.cast);
		setText('movie-synopsis', movie.synopsis);
		document.title = `Pilih Jam dan Tanggal - ${movie.title}`;
	} else {
		posterEl.style.visibility = 'hidden';
		for (const id of ['movie-rating', 'movie-genre', 'movie-producer', 'movie-director', 'movie-author', 'movie-cast', 'movie-synopsis'])
			setText(id, '-');
		setText('movie-title', 'Film tidak ditemukan');
	}

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

	let selectedDate = movie ? (dates.find(hasSlot) || null) : null;

	const el = (tag, className, text) => {
		const node = document.createElement(tag);
		node.className = className;
		if (text) node.textContent = text;
		return node;
	};

	const render = () => {
		dateList.replaceChildren(...dates.map((d) => {
			const off = !movie || !hasSlot(d);
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
				// sessionStorage.setItem('tiketan_jadwal', JSON.stringify({
					// movie: MOVIE,
					// date: toKey(selectedDate),
					// time: t,
				// }));
				// window.location.href = NEXT_PAGE;
				
				const up = new URLSearchParams(window.location.search);
				let new_location = `Pembayaran.html?id=${up.get('id')}`;

				for (const seat of up.getAll('seat'))
				{
					new_location += `&seat=${seat}`;
				}
				
				new_location += `&t=${t}`;
				new_location += `&d=${toKey(selectedDate)}`;

				window.location.replace(new_location);
			});
			return btn;
		}));
	};

	render();
})();

// Seats
(() => {
	const ROWS = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L"];
	const SEATS_PER_ROW = 16;
	const MAX_SELECTION = 10;
	const selected = new Set();
	const seatsContainer = document.getElementById("seats");
	const countEl = document.getElementById("count");
	const chosenEl = document.getElementById("chosen");
	const confirmBtn = document.getElementById("confirm");
	const messageEl = document.getElementById("message");
	if (!seatsContainer) return; // bukan halaman Seat

	// 11 baris x 16 kursi (A-L tanpa I), dengan lorong tengah setelah kursi nomor 8; semua kursi dimulai dalam keadaan kosong.
	function renderSeats() {
		seatsContainer.innerHTML = "";
		ROWS.forEach(row => {
		const rowElement = document.createElement("div");
		rowElement.className = "seat-row";
		for (let number = 1; number <= SEATS_PER_ROW; number++) {
			// Sisipkan lorong kosong setelah kursi 8, bukan kursi ekstra.
			if (number === 9) {
			const aisle = document.createElement("div");
			aisle.className = "aisle";
			aisle.setAttribute("aria-hidden", "true");
			rowElement.appendChild(aisle);
			}
			const id = `${row}${number}`;
			const button = document.createElement("button");
			button.type = "button";
			button.className = "seat" + (selected.has(id) ? " selected" : "");
			button.textContent = id;
			button.setAttribute("aria-label", `Kursi ${id}${selected.has(id) ? ", dipilih" : ", kosong"}`);
			button.setAttribute("aria-pressed", String(selected.has(id)));
			button.addEventListener("click", () => toggleSeat(id));
			rowElement.appendChild(button);
		}
		seatsContainer.appendChild(rowElement);
		});
		updateSummary();
	}

	function toggleSeat(id) {
		messageEl.textContent = "";
		if (selected.has(id)) {
		selected.delete(id);
		} else if (selected.size < MAX_SELECTION) {
		selected.add(id);
		} else {
		messageEl.textContent = "Maksimal 10 kursi dapat dipilih.";
		return;
		}
		renderSeats();
	}

	function updateSummary() {
		const list = [...selected];
		countEl.textContent = list.length;
		chosenEl.textContent = list.length ? list.join(", ") : "Belum ada kursi yang dipilih.";
		confirmBtn.disabled = list.length === 0;
	}

	document.getElementById("reset").addEventListener("click", () => {
		selected.clear();
		messageEl.textContent = "";
		renderSeats();
	});

	confirmBtn.addEventListener("click", () => {
		//messageEl.textContent = `Pilihan tersimpan sementara: ${[...selected].join(", ")}.`;
		const up = new URLSearchParams(window.location.search);

		let pl = `JamDanTanggal.html?id=${up.get('id')}`;

		for (const _selected of selected)
		{
			pl += `&seat=${_selected}`;
		}

		window.location.replace(pl);
	});

	renderSeats();
})();