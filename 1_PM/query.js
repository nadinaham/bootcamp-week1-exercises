const database = {
  users: [
    {
      id: 0,
      firstName: 'Alice',
      favPet: 'cat',
      state: 'NY',
      collegeId: 2,
    },
    {
      id: 1,
      firstName: 'Bob',
      favPet: 'cat',
      state: 'MA',
      collegeId: 0,
    },
    {
      id: 2,
      firstName: 'Charles',
      favPet: 'dog',
      state: 'NY',
      collegeId: 0,
    },
    {
      id: 3,
      firstName: 'Daniela',
      favPet: 'dog',
      state: 'CT',
      collegeId: 1,
    },
    {
      id: 4,
      firstName: 'Edward',
      favPet: 'cat',
      state: 'CT',
      collegeId: 1,
    },
    {
      id: 5,
      firstName: 'Fatima',
      favPet: 'dog',
      state: 'NJ',
      collegeId: 0,
    },
  ],
  friends: [
    {
      id1: 0,
      id2: 2,
    },
    {
      id1: 1,
      id2: 0,
    },
    {
      id1: 2,
      id2: 3,
    },
    {
      id1: 2,
      id2: 1,
    },
    {
      id1: 3,
      id2: 4,
    },
    {
      id1: 2,
      id2: 4,
    },
    {
      id1: 0,
      id2: 5,
    },
  ],
  college: [
    {
      id: 0,
      name: 'Harvard',
      state: 'MA',
      color: 'crimson',
    },
    {
      id: 1,
      name: 'Yale',
      state: 'CT',
      color: 'blue',
    },
    {
      id: 2,
      name: 'Columbia',
      state: 'NY',
      color: 'light blue',
    },
  ],
}

/* using the js object and array methods, query the database defined above.
Assume that the data in the database is dynamic and changes every day so
dont hard code solutions. */

// Implement the function usersByPet to return a list of user objects filtered by cat or dog.
const usersByPet = pet => {

// Using deconstruction seemed to be the shortest (and least painful ; - ;)
   let {
      users
   } = database

// console.log(users) - works, yipee!

   cat = users.filter(user => user.favPet === 'cat')
   dog = users.filter(user => user.favPet === 'dog')

// seems like only cat or dog are options, not sure how uniform inputs requesting them are
     if (pet.toLowerCase() === 'cat') {
        return cat; 
      } else if (pet.toLowerCase() === 'dog') {
         return dog;
      }
}

console.log(usersByPet('dog'))
console.log(usersByPet('cat'))

// Implement the function collegeLookup to return the name and color of a user's college.
const collegeLookup = user => {

  let {
    users,
    college
 } = database

 userInfo = users.filter (entry => entry.firstName === user)
 collegeInfo = college.filter (entry => entry.id === userInfo[0].collegeId)

 return [collegeInfo[0].name, collegeInfo[0].color]
}

console.log(collegeLookup('Charles'))
console.log(collegeLookup('Daniela'))

// define oppositesAttract as a list of friend objects whose favorite pets are different.

// helper deconstruction to pull each object category for later calling
let {
    users,
    friends,
    college
 } = database

const oppositesAttract = [friends.filter(entry => users[entry.id1].favPet !== users[entry.id2].favPet)]
console.log(oppositesAttract)

// define local as a list of users who live in the same state as they go to school.
const local = [users.filter(entry => entry.state === college[entry.collegeId].state)]
console.log(local)

// define collegeFriends as a list of friend objects that go to the same college
const collegeFriends = [friends.filter(entry => college[users[entry.id1].collegeId].name === college[users[entry.id2].collegeId].name)]
console.log(collegeFriends)
