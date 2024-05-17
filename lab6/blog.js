"use strict";

const MAX_LENGTH = 200;

const blogs = [
  {title: 'HTML Semantic Tags',
   date: new Date(2022, 7, 31),
   content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta cupiditate sint ullam fugiat fugit magni, aliquam quae voluptate, quo eos minima numquam repellendus rerum ipsa ea est. Maxime, dicta delectus eum a minus iure optio eveniet culpa, ipsum iste repellendus laudantium eos deserunt commodi animi distinctio ex hic? At amet dolore nemo accusamus nisi quae, ratione nam. Totam harum expedita temporibus dolore unde sed id debitis suscipit odio voluptates doloremque rem nobis aperiam quasi assumenda doloribus ad vero repellat, alias adipisci tenetur aspernatur vel. Culpa inventore architecto aspernatur dolor natus labore.'},
  {title: 'CSS Selectors',
  date: new Date(2022, 8, 9),
  content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dolore? Eveniet numquam quam qui quae laboriosam maxime deleniti aperiam quasi culpa veniam, voluptatibus molestias soluta error ratione assumenda sunt. Sapiente doloribus, nulla a tempora assumenda nostrum est enim corporis fugit quasi ipsam eveniet distinctio impedit dolorum eum dolor. Distinctio, reiciendis!'},

  {title: 'Cascading',
  date: new Date(2022, 8, 12),
  content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum architecto provident exercitationem modi inventore obcaecati, fuga, fugiat vero quo iusto vitae minima perspiciatis dolorum incidunt ea dolorem laboriosam illo. Cupiditate est enim aut magni, doloribus animi, fuga inventore eveniet quaerat similique voluptate debitis ad possimus totam repellendus harum voluptatem sit adipisci velit quisquam praesentium sed corporis temporibus facere! Labore architecto deleniti deserunt voluptates velit, maxime ea nisi placeat, eius in reiciendis, saepe alias quidem dignissimos debitis quos tenetur natus. '}
]

blogs.forEach(blog=>{
  addEntry(blog);
});


function addEntry(blog) {

  const blogContainer = document.createElement('article');
  blogContainer.classList.add('post');

  const blogHeader = document.createElement('h3');
  blogHeader.classList.add('blog-header');
  blogHeader.textContent = blog.title;
  blogContainer.append(blogHeader);

  const blogDate = document.createElement('p');
  blogDate.textContent = blog.date.toLocaleDateString();
  blogContainer.append(blogDate);

  const blogContent = document.createElement('p');
  blogContainer.append(blogContent);

  if (blog.content.length > MAX_LENGTH) {
    blogContent.textContent = blog.content.substring(0, MAX_LENGTH);

    const span_dots = document.createElement("span");
    span_dots.textContent = "...";
    blogContent.append(span_dots);

    const span_hidden_content = document.createElement("span");
    span_hidden_content.textContent = blog.content.substring(MAX_LENGTH);
    span_hidden_content.classList.add("hide");
    blogContent.append(span_hidden_content);

    const read_more_btn = document.createElement("button");
    read_more_btn.textContent = "Read More";
    read_more_btn.classList.add("more-less-btn");
    blogContainer.append(read_more_btn);

    read_more_btn.addEventListener("click", () => {
      span_dots.classList.toggle("hide");
      span_hidden_content.classList.toggle("hide");
      if (span_dots.classList.contains("hide")) {
        read_more_btn.textContent = "Read Less";
      }
      else {
        read_more_btn.textContent = "Read More";
      }
    });
  }
  else {
    blogContent.textContent = blog.content;
  }
  
  const removeBtn = document.createElement('button');
  removeBtn.textContent = '[x]';
  removeBtn.classList.add('delete-btn');

  blogHeader.append(removeBtn);

  document.querySelector('.posts').append(blogContainer);
}

const new_btn = document.querySelector(".new-btn");
const new_section = document.querySelector(".new-section");

new_btn.addEventListener("click", () => {
  new_section.classList.toggle("hide");
});

const posts = document.querySelector(".posts");
posts.addEventListener("click", (event) => {
  if(event.target.classList.contains("delete-btn")) {
    const post_element = event.target.closest(".post");
    const post_title = post_element.querySelector(".blog-header").textContent.split("[x]")[0].trim();

    const index = blogs.findIndex(blog => blog.title === post_title);
    if (index !== -1) {
      blogs.splice(index, 1);
    }

    post_element.remove();
  }
});

const submit_button = document.querySelector("#submit-btn");
const new_form = document.querySelector(".new-form");
const title_input = document.querySelector("#title");
const content_input = document.querySelector("#content");

submit_button.addEventListener("click", (event) => {
  event.preventDefault();

  if(new_form.reportValidity()) {
    const title = title_input.value;
    const content = content_input.value;

    title_input.value = "";
    content_input.value = "";

    const date = new Date();
    const blog = {title, content, date};

    blogs.push(blog);
    addEntry(blog);
  }
});