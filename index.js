let xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
xhr.send();



xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            let users = JSON.parse(xhr.responseText);
            users.forEach(function(user) {
                console.log(user.name);
            });
    
};
}};

/////////////////////////////////////



const container = document.getElementById('container');

fetch('https://jsonplaceholder.typicode.com/posts',
["GET"])

  .then(response => {

    if (!response.ok) {
      throw new Error('Что-то пошло не так, попробуйте позже!');
    }
    return response.json();
  })
  .then(data => {
    data.forEach(post => {
      let card = document.createElement('div');
      let title = document.createElement('h2');
      let body = document.createElement('p');
      
      title.textContent = post.title;
      body.textContent = post.body;
      
      card.style.border = '1px solid black';
      card.style.borderRadius = '5px';
      card.style.padding = '10px';
      card.style.marginBottom = '10px';
      
      card.appendChild(title);
      card.appendChild(body);

      container.appendChild(card);
    });
  })
  .catch(error => {

    container.textContent = error.message;
  });



