const request = new XMLHttpRequest();
const url = 'https://jsonplaceholder.typicode.com/posts124';

request.open('GET', url);

request.onload = function () {
    if (this.status >= 200 && this.status < 300) {
        const posts = JSON.parse(this.responseText);
        console.log(posts);
    } else if (this.status === 404) {
        alert('The url was not Found');
    } else {
        alert('Unknown error occured');
    }
};

request.send();