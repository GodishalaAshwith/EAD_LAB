const add = (a,b) => new Promise((resolve,reject) =>{
  if (a+b>10){
    resolve({message:"Great Value",sum:a+b})
  }else{
    resolve({message:"Too Low",sum:a+b})
  }
})

const mul = (x) => new Promise((resolve,reject) => {
  if(x>25){
    resolve(x*25)
  } else{
    reject("Too LOW !")
  }
})

add(6,20)
.then(result => mul(result.sum))
.then(result => console.log(result))
.catch(err => console.log(err))