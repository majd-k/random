document.getElementById('changeButton').addEventListener('click', function () {
    const heading = document.getElementById('greeting');
    if (heading.textContent === 'Hello world') {
        heading.textContent = 'You clicked the button!';
    } else {
        heading.textContent = 'Hello world';
    }
});
