1.
const student = {
  name: "Feyruz",
  surname: "Mikayilli",
  age: 18,
  ixtisas: "Programming",
  kurs: 2,

  tam_ad() {
    return `${this.name} ${this.surname}`;
  },

  mezun_ili() {
    const hazirkiil = new Date().getFullYear();
    const qalanKursIli = 4 - this.kurs
    return hazirkiil + qalanKursIli;
  }
};

console.log(student.tam_ad());     
console.log(student.mezun_ili());   
////////////////////////////////////////////////
2.
const məhsullar = [
  { ad: "Laptop", qiymət: 1200, kateqoriya: "elektronika", mövcuddur: true },
  { ad: "Telefon", qiymət: 800, kateqoriya: "elektronika", mövcuddur: false },
  { ad: "Masa", qiymət: 300, kateqoriya: "mebel", mövcuddur: true },
  { ad: "Kitab", qiymət: 25, kateqoriya: "təhsil", mövcuddur: true },
  { ad: "Kompüter", qiymət: 1500, kateqoriya: "elektronika", mövcuddur: true }
];


const movcudMehsullar = məhsullar.filter(m => m.mövcuddur);
console.log("Movcud mehsullar:", movcudMehsullar);

const ucuzMehsullar = məhsullar.filter(m => m.qiymət < 500)
console.log("Qiymeti 500-den az mehsullar:", ucuzMehsullar);


const elektronika = məhsullar.filter(m => m.kateqoriya === "elektronika");
console.log("Elektronika mehsullari:", elektronika);


const enBahali = məhsullar.reduce((max, m) => (m.qiymət > max.qiymət ? m : max));
console.log("En bahali mehsul:", enBahali);


const kateqoriyaSay = {};
məhsullar.forEach(m => {
  if (kateqoriyaSay[m.kateqoriya]) {
    kateqoriyaSay[m.kateqoriya]++
  } else {
    kateqoriyaSay[m.kateqoriya] = 1
  }
});
console.log("Kateqoriya uzre say:", kateqoriyaSay);
/////////////////////////////////////////////////////
3.
const hesab1 = {
  ID: "AZ123456",
  sahib_ad: "Əli Məmmədov",
  balans: 0,
  emeliyyat_tarixi: [],

  emanet(mebleg) {
    this.balans += mebleg;
    this.emeliyyat_tarixi.push(`Emanet: +${mebleg} AZN`)
  },

  cixaris(mebleg) {
    if (mebleg <= this.balans) {
      this.balans -= mebleg;
      this.emeliyyat_tarixi.push(`Cixaris: -${mebleg} AZN`);
    } else {
      this.emeliyyat_tarixi.push(`Cixaris ugursuz: kifayet qeder balans yoxdur`);
    }
  },

  transfer(diger_hesab, mebleg) {
    if (mebleg <= this.balans) {
      this.balans -= mebleg;
      diger_hesab.balans += mebleg;
      this.emeliyyat_tarixi.push(`Transfer: -${mebleg} AZN → ${diger_hesab.sahib_ad}`);
      diger_hesab.emeliyyat_tarixi.push(`Transfer: +${mebleg} AZN ← ${this.sahib_ad}`);
    } 
    else {
      this.emeliyyat_tarixi.push(`Transfer ugursuz: kifayet qeder balans yoxdur`);
    }
  },

  get hesab_melumati() {
    return {
      ID: this.ID,
      sahib_ad: this.sahib_ad,
      balans: this.balans,
      emeliyyat_tarixi: this.emeliyyat_tarixi
    };
  }
};

const hesab2 = {
  ID: "AZ654321",
  sahib_ad: "Aysel Hüseynova",
  balans: 0,
  emeliyyat_tarixi: [],

  emanet(mebleg) {
    this.balans += mebleg;
    this.emeliyyat_tarixi.push(`Emanet: +${mebleg} AZN`);
  },

  cixaris(mebleg) {
    if (mebleg <= this.balans) {
      this.balans -= mebleg;
      this.emeliyyat_tarixi.push(`Cixaris: -${mebleg} AZN`);
    } 
    else {
      this.emeliyyat_tarixi.push(`Cixaris ugursuz: kifayet qeder balans yoxdur`);
    }
  },

  transfer(diger_hesab, mebleg) {
    if (mebleg <= this.balans) {
      this.balans -= mebleg;
      diger_hesab.balans += mebleg;
      this.emeliyyat_tarixi.push(`Transfer: -${mebleg} AZN → ${diger_hesab.sahib_ad}`);
     diger_hesab.əməliyyat_tarixi.push(`Transfer: +${mebleg} AZN ← ${this.sahib_ad}`);
    } 
    else {
      this.emeliyyat_tarixi.push(`Transfer ugursuz: kifaywt qeder balans yoxdur`);
    }
  },

  get hesab_məlumati() {
    return {
      ID: this.ID,
      sahib_ad: this.sahib_ad,
      balans: this.balans,
      emeliyyat_tarixi: this.emeliyyat_tarixi
    };
  }
};

hesab1.emanet(1000);
hesab1.cixaris(200);
hesab1.transfer(hesab2, 300);

console.log(hesab1.hesab_melumati);
console.log(hesab2.hesab_məlumati);
///////////////////////////////////////////
4.
const library = {
  books: [],

  addBook(title, author, year, isbn) {
    const book = { title, author, year, isbn };
    this.books.push(book);
  },

  searchBooks(query) {
    return this.books.filter(book =>
      book.title.toLowerCase().includes(query.toLowerCase()) ||
      book.author.toLowerCase().includes(query.toLowerCase())
    );
  },

  filterByAuthor(author) {
    return this.books.filter(book => book.author === author);
  },

  filterByYearRange(minYear, maxYear) {
    return this.books.filter(book => book.year >= minYear && book.year <= maxYear);
  },

}

library.addBook("1984", "George Orwell", 1949, "ISBN001");
library.addBook("Koroglu", "Folk Literature", 1800, "ISBN002");
library.addBook("Arshin Mal Alan", "Uzeyir Hajibeyov", 1913, "ISBN003");

console.log("Search for 'George':", library.searchBooks("George"));
console.log("Filter by author 'Folk Literature':", library.filterByAuthor("Folk Literature"));
console.log("Books between 1800 and 1950:", library.filterByYearRange(1800, 1950));
///////////////////////////////////////////////////
5.
const alis_veris = {
    mehsullar: [{ad: "Apple Iphone", qiymet: 1000, miqdar: 1, vergi_faizi: 18},
        {ad: "Samsung TV", qiymet: 800, miqdar: 2, vergi_faizi: 18},
        {ad: "Kitab", qiymet: 20, miqdar: 3, vergi_faizi: 0}
    ],

    cemHesabla(){
        let cem = 0
        this.mehsullar.forEach(m => {cem += m.qiymet * m.miqdar})
        return cem
    },

    vergiHesabla(){
        let vergi = 0
        this.mehsullar.forEach(m => {vergi += (m.qiymet*m.miqdar)*(m.vergi_faizi / 100)})
        return vergi
    },

    umumiQiymet(){
        return this.cemHesabla() + this.vergiHesabla()
    },

    addMehsul(yeni_mehsul){
        const movcud = this.mehsullar.find(m => m.ad === yeni_mehsul.ad)
        if(movcud){
            movcud.miqdar += yeni_mehsul.miqdar
        }
        else{
            this.mehsullar.push(yeni_mehsul)
        }
    },

    deleteMehsul(mehsul_adi){
        this.mehsullar.filter(m=> m.ad != mehsul_adi)
    },

    filterSebet(){
        this.mehsullar=[]
    }

}
////////////////////////////////////////////////////////
6.
const users = {
    "user1": {ad: "Ali", yas: 25, seher: "Baki", maas: 1500},
    "user2": {ad: "Leyla", yas: 30, seher: "Gence", maas: 1800},
    "user3": {ad: "Resad", yas: 28, seher: "Baki", maas: 2000},
    "user4": {ad: "Nigar", yas: 35, seher: "Sumqayit", maas: 2200},
};

const userArr = Object.values(users)
console.log(userArr)

const group = {}
userArr.forEach(user => {
    if(!group[user.seher])
        {
            group[user.seher]=[]
        }
    group[user.seher].push(user)
})

console.log(group);


const ortaMaas = userArr.reduce(
    (toplam , user) => toplam + user.maas , 0) / userArr.length
console.log("Orta Maas: ", ortaMaas)

const enYuksekMaasIsci = userArr.reduce((max , user) => {
    return user.maas > max.maas ? user : max
},
userArr[0])

console.log("En yuksek maasli isci: ", enYuksekMaasIsci)



const gencUsers = userArr.filter(user => user.yas < 30)
console.log("30 yasdan kicik userler: ", gencUsers);


const yuksekMaasAlan = userArr.filter(user => user.maas > 1800).map(user => user.ad)
console.log(("Maasi 1800 den boyuk olan userlerin adlari: ", yuksekMaasAlan));
//////////////////////////////////////////////



