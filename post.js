const request = new XMLHttpRequest();
const url = 'https://jsonplaceholder.typicode.com/posts';

request.open('POST', url);
request.setRequestHeader('Content-Type', 'application/json');

const post = {
    "userId": 1,
    "title": "Post Title",
    "body": "Post Body"
};

request.onload = function () {
    if (this.status >= 200 && this.status < 300) {
        const post = JSON.parse(this.responseText);
        console.log(post);
    } else if (this.status === 404) {
        alert('The url was not Found');
    } else {
        alert('Unknown error occured');
    }
};

request.send(JSON.stringify(post));