document.addEventListener('DOMContentLoaded', function() {
    const postForm = document.getElementById('post-form');
    const postTitle = document.getElementById('post-title');
    const postContent = document.getElementById('post-content');
    const postList = document.getElementById('post-list');

    postForm.addEventListener('submit', function(e) {
        e.preventDefault();
        addPost(postTitle.value, postContent.value);
        postTitle.value = '';
        postContent.value = '';
    });

    function addPost(title, content) {
        const postDiv = document.createElement('div');
        postDiv.className = 'post';

        const postTitle = document.createElement('h3');
        postTitle.textContent = title;
        postDiv.appendChild(postTitle);

        const postContent = document.createElement('p');
        postContent.textContent = content;
        postDiv.appendChild(postContent);

        postList.appendChild(postDiv);
    }
});
