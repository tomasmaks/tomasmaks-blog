var navigation = document.getElementById("header-navigation").getAttribute("data-name");

var indexActive = ""
var aboutActive = ""
var blogPostActive = ""

switch(navigation) {
    case "index":
      indexActive = "active"
      break;
    case "about":
      aboutActive = "active"
      break;
    case "blog-post":
      blogPostActive = "active"
      break
    default:
      // code block
}

// <li class="nav-item ` + blogPostActive + `">
//     <a class="nav-link" href="blog-post.html"><i class="fas fa-bookmark fa-fw mr-2"></i>Blog Post</a>
// </li>

/* <li class="nav-item ` + indexActive + `">
    <a class="nav-link" href="index.html"><i class="fas fa-home fa-fw mr-2"></i>Blog Home <span class="sr-only">(current)</span></a>
</li>



<li class="nav-item ` + aboutActive + `">
    <a class="nav-link" href="about.html"><i class="fas fa-user fa-fw mr-2"></i>About Me</a>
</li> */

document.write(`

<ul class="navbar-nav flex-column text-left">



</ul>

`);