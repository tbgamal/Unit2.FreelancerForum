let newFreelancer = {}

function freelancerRandomizer () {
  let nameList = ["Jane","Lilian","Alisa","Noemi","Keshawn","Andres","Messiah","Maia","Shiloh","Hazel", "Pierre","Lizbeth"]
  
  let occupationList = ["Graphic Designer","Web Design","Software Developer","Copywriting","Translator","Virtual Assistant","Social media","Video editing","Web developer","Accountant", "Photographer","Project manager"]
  
  newFreelancer = {
    name: nameList[Math.floor(Math.random() * nameList.length)],
    occupation: occupationList[Math.floor(Math.random() * occupationList.length)],
    price: Math.floor(Math.random() * 100),
  }

  return (newFreelancer)
}

function addFreelancer () {
  return newFreelancer.push(freelancer.Randomizer)
}



let freelancerModel = {
  Name: "Alice",
  Occupation: "Teacher",
  Price: 30,
}

let freelancer = [
  {
    name: "Alice",
    occupation: "Writer",
    price: 30,
  },
  {
    name: "Bob",
    occupation: "Teacher",
    price: 50,
  },
  {
    name: "Carol",
    occupation: "Programmer",
    price: 70,
  },
  // setInterval(() => {
    // freelancerRandomizer()
  // }, 1000) 
]

setInterval(() => {
  freelancer.push(freelancerRandomizer())
}, 5000)

console.log(freelancer.length)
// freelancer.push(freelancerRandomizer())


// function addFreelancer() {
//   freelancer.push(newFreelancer)
//   return freelancer
// }

/*
  Goal of this function:
    Take the candy list, and for each candy object,
    I want to make a div like this:
      <div>
        <h1>name of freelancer</h1>
        <h3> Occupation: ""</h3>
        <h3> Price: $$ </h3>
      </div>
    
      and add them to the candy-bag div on the main html page
*/

function renderFreelancer() {
  let freelancerList = document.getElementById("freelancer-list")
  // setInterval(() => {
  //   addFreelancer()
  // }, 100)

  for (let i = 0 ; i < freelancer.length ; i++) {
    let currentFreelancer = freelancer[i]

    let freelancerTr = document.createElement("tr")

    freelancerTr.className = "freelancer-profile"

    freelancerTr.innerHTML = `<td>${currentFreelancer.name}</td>
                              <td>${currentFreelancer.occupation}</td>
                              <td>$ ${currentFreelancer.price}</td>`
    
    freelancerList.appendChild(freelancerTr)
  }
}

renderFreelancer()

// setInterval(() => {
//   addFreelancer()
// }, 100)