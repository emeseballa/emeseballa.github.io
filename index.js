console.log("hello world" + " " + (1+1));

async function getRepos() {
  try {
    const prodUrl = /https:\/\/emeseballa\.github\.io\//gi
    let obj
    let response
    // reduce load on github api during development
    if (window.location.href.match(prodUrl)) {
      response = await fetch('https://api.github.com/users/emeseballa')
      await response.json().then(data => (obj = data))
    } else {
      response = '{"public_repos": 3}'
      obj = JSON.parse(response)
    }
    const publicRepos = obj.public_repos
  
	console.log(publicRepos);
  } catch (e) {
    console.error(e)
  }
}

getRepos()



window.onload = function readTime() {
  const fullText = document.querySelector('body').innerText
  const wordsPerMinute = 265 // WPM - English
  const wordCount = fullText.split(/\s/g).length
  const minutes = wordCount / wordsPerMinute
  const readTime = Math.ceil(minutes)
  console.log(readTime + ' min read');
  document.getElementById('minute').innerText = readTime + ' min read';
  document.getElementById('minute').style.color = 'orange';
}


//function message() {
//	alert("Hello visitor!")
//}

// message()















