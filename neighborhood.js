recommend = document.querySelector('button');

const places = ["Fiesta O'le", "Swim for golf balls","Talk to a rubber duck","Take the day off","Do a blink 182","Tell someone to get off someone else's lawn acting like it's yours","summon a nice demon","Visit the fire station and ask if you can get into their truck"]

const returnRecommend = (event) => {
    event.preventDefault()
    const random = places[Math.floor(Math.random() * places.length)];
    alert(random)
}

recommend.addEventListener('click', returnRecommend)