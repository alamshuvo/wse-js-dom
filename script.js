//Through loop we can show our data 
//variable declare kore class name dore seta console.log kore dekhte para
//Dom use kore kono element ba deta style kora 
//Dom use kore kono orginal data k fix kora 
//innerText dyea bitorer likha change kora jai 
//Using dom we can create new element without raw html
//getElementByTagName()
//getElementById()
//getElementByClassName()

const blogtitle=document.getElementsByTagName("h3");
//making new element
const li=document.createElement('li');
li.innerText='Blog-6';
//set or assign new element
const ul =document.getElementById('blog-list');
//assign
ul.appendChild(li);



//making artical 

const newArtical=document.createElement('artical');
newArtical.classList.add('blogArtical');
const h3=document.createElement('h3');
h3.innerText='My costom new blog heading';
const p =document.createElement('p');
p.innerText='amet consectetur adipisicing elit. Quae, sint odio quisquam accusamus natus voluptates iusto nihil sit dignissimos commodi fuga nulla atque magni dolorum molestiae iure asperiores, dolores fugit eum enim? Dolorum corporis nulla hic vero molestias commodi iste modi, exercitationem, accusantium fugiat itaque ab consequuntur minus reiciendis. Temporibus error non alias necessitatibus vero sed rerum quis quod ';
newArtical.appendChild(h3);
newArtical.appendChild(p);
const ourBlogs=document.getElementById('our-blogs');
ourBlogs.appendChild(newArtical)
newArtical.innerHTML=`
<h3>Welcome to our templeating blog element</h3>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, sint odio quisquam accusamus natus voluptates iusto nihil sit dignissimos commodi fuga nulla atque magni dolorum molestiae iure asperiores, dolores fugit eum enim? Dolorum corporis nulla hic vero molestias commodi iste modi, exercitationem, accusantium fugiat itaque ab consequuntur minus reiciendis. Temporibus error non alias necessitatibus vero sed rerum quis quod molestias, minus </p>
`;
const blogs=document.getElementsByClassName('blogArtical');
for(const blogArtical of blogs){
    console.log(blogArtical);
    blogArtical.style.padding='10px 5px';
    blogArtical.style.border='5px solid salmon';
    blogArtical.style.width='100%';
    
    
}
