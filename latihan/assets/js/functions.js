// variable
// let
let namaDepan = 'Afif';
let namaBelakang = 'Wijaya';
let namaLengkap = namaDepan + ' ' + namaBelakang;
let namaLengkap2 = `${namaDepan} ${namaBelakang}`;

// output //
// cara 1
// console.log(`nama lengkap  : ${namaLengkap}`);
// console.log(`nama lengkap2 : ${namaLengkap2}`);
// cara 2
// alert(`nama lengkap2 : ${namaLengkap2}`);
// cara 3
// document.write('tes dulu');

let score = 80;
let jumlahBarang = 100;
let total = score + jumlahBarang;
// console.log(`Total Penjumlahan dari ${score} + ${jumlahBarang} = ${total}`);

// const
const country = 'Indonesia';

// dataTypes

// Operator :
// Addition +,
// Subtraction -,
// Multiplication *,
// Division /,
// Remainder %,
// Exponentiation **.

// conditional

if (namaDepan == 'Afif') {
	// console.log(`selamat datang : ${namaDepan}`);
} else {
	// console.log('Maaf nama salah');
}

// looping
for (let i = 0; i <= 10; i++) {
	// console.log(`looping with for ${i}`);
}

let j = 0;
while (j <= 10) {
	// console.log(`looping with while ${j}`);
	j++;
}

let k = 0;
do {
	// console.log(`looping with do while ${k}`);
	k++;
} while (k <= 10);

// function
function greetingMessage() {
	if (namaLengkap) {
		console.log(`selamat datang ${namaLengkap}`);
	} else {
		console.log(`user tidak ada`);
	}
}
// greetingMessage();

function login(username, password) {
	if (username && password) {
		console.log(`Selamat Datang`);
		console.log(`Username : ${username}`);
		console.log(`Password : ${password}`);
	} else if (username || password) {
		console.log(`username atau password salah`);
	} else {
		console.log(`anda belum login`);
	}
}

// let username = 'afif';
// let password = 'wijaya';
// login(username, password);

// function operator
function luasSegitiga(alas, tinggi) {
	let luas = (alas * tinggi) / 2;
	return luas;
}

let alas = 10;
let tinggi = 5;

let luas = luasSegitiga(alas, tinggi);
// console.log(luas);

// struktur data
let dataMahasiswa1 = ['afif', 'wijaya', 'empires'];
console.log(dataMahasiswa1[0]);

let biodataMahasiswa = {
	namaDepan: ' Afif',
	namaBelakang: 'wijaya',
	tempatTinggal: 'Menggala',
};
console.log(biodataMahasiswa);

let dataMahasiswa = {
	npm: 15311601,
	biodata: {
		namaDepan: ' Afif',
		namaBelakang: 'wijaya',
		tempatTinggal: 'Menggala',
	},
	npm: 15311602,
	biodata: {
		namaDepan: 'Bob',
		namaBelakang: 'Marley',
		tempatTinggal: 'Jamaica',
	},
};

console.log(dataMahasiswa);
