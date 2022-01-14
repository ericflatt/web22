import React from "react"
import "../App.scss"
import me from "../images/me.png"

// import $ from "jquery"

class About extends React.Component {
    textNone() {
        document.getElementsByClassName("App").style.display = "none";
      }

  componentDidMount() {
      
      // Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
//   text.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}
  }



  render() {
    return (
  <div>
<button className="about" id="myBtn">About</button>

{/* <!-- The Modal --> */}
<div id="myModal" className="modal">

  {/* <!-- Modal content --> */}
  <div className="modal-content">
    <span className="close">&times;</span>
    <div className="about-content">
    <img className="about-image" src={me} alt="me" />

              <h1 className="about-text">
                Hi I'm{" "}
                <span className="">
                  Eric{" "}
                  
                </span>
                , lover of all workplace comedies, cartoons, coffee, traveling
                and music (not in any particular order). Currently I am a UI/UX designer on the Funko digital experience team as well as an aspiring moderator of the Bob's Burger's subreddit. Before that I was a creative tech
                intern at{" "}
                <a
                  className="about-link"
                  target="blank"
                  href="https://blackmath.com"
                >
                  Black Math
                </a>{" "}
                collaborating on front-end web development and UI/UX design
                based projects. I have previously interned with{" "}
                <a
                  className="about-link"
                  target="blank"
                  href="https://bobblehaus.com"
                >
                  Bobblehaus
                </a>
                ,{" "}
                <a
                  className="about-link"
                  target="blank"
                  href="https://icims.com"
                >
                  iCIMS
                </a>{" "}
                & worked freelance with Vera Roca.<br></br><br></br> I was first drawn to UX
                because of my curiosity with ever evolving technologies and
                exploring creative ways in which we can use them. I set up a
                raspberry pi to post daily {" "}
                <a
                  className="about-link"
                  target="blank"
                  href="https://twitter.com/erics_plants"
                >
                  twitter
                </a>{" "}
                updates on the well being of my plants & had the idea to
                create a collaborative Spotify queue, you can see{" "}
                <a
                  className="about-link"
                  target="blank"
                  href="https://spotify-collab.glitch.me/"
                >
                  here
                </a>,{" "}
                that I finished just weeks before Spotify launched their own.
               
                <br></br>
                <br></br>
                Take a look at my{" "}
                <a
                  className="about-link"
                  target="blank"
                  href="https://drive.google.com/file/d/1ZPtiem5AWq6CiN_ZOgtOhkO6WfoVNuGb/view?usp=sharing"
                >
                  Resume
                </a>{" "}
                and feel free to contact me {" "}
                <a
                  className="about-link"
                  target="blank"
                  href="mailto:eflatt18@gmail.com"
                >
                  eflatt18@gmail.com
                </a>
                .<br></br>
                <br></br>
                Thanks for stopping by 🙂
   
              </h1>
            </div>
  </div>

</div>

  </div>
    )
  }
}

export default About
