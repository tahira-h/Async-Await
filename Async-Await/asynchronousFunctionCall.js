// Individual async project

async function getRandomNumber() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Math.random());
      }, 500);
    });
   }
   async function main() {
    const num = await getRandomNumber();
    console.log(num);
   }
   main();

// async function getRandomNumber() {
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve(([Math.random()]), 500))
//     });

//     let result = promise; //Math.random

//     alert(result);
// }

// getRandomNumber();