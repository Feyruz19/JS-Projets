//1.
// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
        
//         if (!response.ok) {
//             throw new Error('Network response was not ok')
//         }
//         const users = await response.json()
        
//         console.log(users)
//     } catch (error) {
//         console.error('Fetch error:', error)
//     }
// }
////////////////////////////////////////////////////////
//2.
// async function getUserPosts() {
//     try {
//         const userResponse = await fetch('https://jsonplaceholder.typicode.com/users/1');
        
//         if (!userResponse.ok) {
//             throw new Error('Network response was not ok')
//         }
        
//         const user = await userResponse.json()
//         console.log('User:', user.name)
        
//         const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
        
//         if (!postsResponse.ok) {
//             throw new Error('Network response was not ok')
//         }
        
//         const posts = await postsResponse.json();
        
//         console.log('Yazi basliqlari:')
//         posts.forEach(post => console.log(post.title))
//     } catch (error) {
//         console.error('Error:', error)
//     }
// }
////////////////////////////////////////////////////////
// 3.
// async function compareCountries() {
//     try {
//         const countries = ['azerbaijan', 'turkey', 'georgia'];

//         const results = await Promise.all(countries.map(country => 
//             fetch(`https://restcountries.com/v3.1/name/${country}`)
//                 .then(response => response.json())
//                 .then(data => data[0])
//         ));

//         results.forEach(country => {
//             console.log(`${country.name.common} - Paytaxt: ${country.capital[0]}, Ehali: ${country.population}`)
//         });

//         const mostPopulated = results.reduce((max, country) => 
//             country.population > max.population ? country : max
//         )

//         console.log(`En boyuk ehali: ${mostPopulated.name.common} (${mostPopulated.population})`)
//     } catch (error) {
//         console.error('Error:', error)
//     }
// }

////////////////////////////////////////////////////////
// 4.
// async function fetchWithRetry(url, maxRetries = 3) {
//     for (let attempt = 1; attempt <= maxRetries; attempt++) {
//         try {
//             const response = await fetch(url)
//             if (!response.ok) {
//                 throw new Error(`HTTP Error: ${response.status}`)
//             }
//             return await response.json()
//         } catch (error) {
//             console.log(`Cehd ${attempt} ugursuz: ${error.message}`)
//             if (attempt === maxRetries) {
//                 throw error;
//             }
//             await new Promise(resolve => setTimeout(resolve, 1000))
//         }
//     }
// }

// async function fetchMultipleUsers() {
//     const userIds = [1, 2, 999, 3, 888, 4]; 

//     for (const id of userIds) {
//         try {
//             const user = await fetchWithRetry(`https://jsonplaceholder.typicode.com/users/${id}`)
//             console.log(`✅ User ${id}: ${user.name}`)
//         } catch (error) {
//             console.log(`❌ User ${id}: Tapilmadi`)
//         }
//     }
// }
// fetchMultipleUsers();
////////////////////////////////////////////////////////////////////