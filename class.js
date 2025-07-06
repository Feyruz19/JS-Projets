//1.
// class Kitab{
//     constructor(name , author , year){
//         this.name = name,
//         this.author = author,
//         this.year = year
//     }

//     Info(name , author , year){
//         return{
//             name: this.name,
//             author: this.author,
//             year: this.year
//         }
//     }
// }

// const kitab = new Kitab("Harry","Ali",1911)
// console.log(kitab.Info())

//2.
// class Student{
//     constructor(name,age){
//         this.name = name,
//         this.age = age,
//         this.qiymet = []
//     }

//     qiymetElaveEt(qiymet){
//         this.qiymet.push(qiymet)
//     }

//     ortaQiymet(){
//         if (this.qiymet.length === 0) {
//             return 0; 
//         }
//         const cem = this.qiymet.reduce((sum, val) => sum + val, 0);
//         return cem / this.qiymet.length;
//     }

// }
// const telebe1 = new Student("Ali", 17);
// telebe1.qiymetElaveEt(50);
// telebe1.qiymetElaveEt(25);
// telebe1.qiymetElaveEt(100);

// console.log(`${telebe1.name} telebenin orta qiymwti: ${telebe1.ortaQiymet()}`);

//3.
// class Math{
//     static kvadrat(num){
//         return num ** 2
//     }
    
//     static cem(arr) {
//         return arr.reduce((sum, val) => sum + val, 0);
//     }

//     static kok(num) {
//         return Math.sqrt(num);
//     }

// }

// console.log(Math.kvadrat(10));    
// console.log(Math.kok(25));      
// console.log(Math.cem([5, 3, 8, 11])); 
///////////////////////////////////////////////////////////////
//4.
// Əsas sinif - Heyvan
// class Heyvan {
//   constructor(ad, yas) {
//     this.ad = ad;
//     this.yas = yas;
//   }

//   sesCixar() {
//     console.log("Heyvan səslənir");
//   }
// }

// class Pisik extends Heyvan {
//   constructor(ad, yas) {
//     super(ad, yas); 
//   }

//   sesCixar() {
//     console.log("Hav hav!");
//   }
// }

// const heyvan1 = new Heyvan("At", 5);
// heyvan1.sesCixar(); 

// const toplan = new Pisik("Toplan", 3);
// toplan.sesCixar(); 
//////////////////////////////////////////////////////////
//5.
// class BankHesabi {
//   #balans
//   constructor() {
//     this.#balans = 0;
//   }

//   pulArtir(miqdar) {
//     if (miqdar > 0) {
//       this.#balans += miqdar;
//     } 
//     else {
//       console.log("Yalnis miqdar");
//     }
//   }

//   pulCixar(miqdar) {
//     if (miqdar > 0 && miqdar <= this.#balans) {
//       this.#balans -= miqdar;
//     } 
//     else {
//       console.log("Yetersiz vesait ve ya yalnis miqdar");
//     }
//   }

//   get balans() {
//     return this.#balans;
//   }
// }

// const hesab = new BankHesabi();
// hesab.pulArtir(100);
// console.log(hesab.balans);
// hesab.pulCixar(30);
// console.log(hesab.balans); 
// hesab.pulCixar(100); 
////////////////////////////////////////////////
