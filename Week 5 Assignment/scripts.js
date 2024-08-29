document.addEventListener('DOMContentLoaded', function() {
  // Grab all links in the nav window
  const links = document.querySelectorAll('.nav-window a');
  
  // Add click event listener to each link
  links.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default anchor behavior

      // Get the page from the data-page attribute
      const page = this.getAttribute('data-page');
      
      // Call the function to load content
      loadContent(page);
    });
  });
});

// Function to load the appropriate content
function loadContent(page) {
  const contentDiv = document.getElementById('content');

  if (page === 'home') {
    contentDiv.innerHTML = `
      <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gurpreet Bhatti Real Estate - Home</title>
</head>

<body>
    <header>
        Gurpreet Bhatti Real Estate
    </header>

    <div class="hero">
        <div>
            <h1>Where Vision Meets Realty</h1>
            <p>Turning Your Real Estate Dreams Into Reality</p>
        </div>
    </div>

    <div class="container">
        <div>
            <h2 class="section-title">Why Choose Me?</h2>
            <p class="section-content">Are you ready to turn your real estate dreams into reality? Whether you're stepping into the world of property ownership for the first time, seeking high-margin commercial investments, or looking to sell your prized asset, you've come to the right place.</p>
        </div>

        <div>
            <h2 class="section-title">My Unique Approach</h2>
            <p class="section-content"><span class="highlight">Military Precision:</span> I apply the discipline and strategic thinking honed in my military career to every real estate transaction, ensuring no detail is overlooked.</p>
            <p class="section-content"><span class="highlight">Engineering Expertise:</span> With degrees in mechanical and structural engineering, I understand the intricacies of property from the ground up, offering insights that go beyond the surface.</p>
            <p class="section-content"><span class="highlight">Proven Track Record:</span> From smoke shops to gas stations, warehouses to residential properties, my business acumen has been proven across diverse markets.</p>
            <p class="section-content"><span class="highlight">Personalized Approach:</span> Your goals are unique, and so is my approach. I tailor strategies to fit your specific needs, ensuring you get the best possible outcome.</p>
        </div>
    </div>

     <footer>
        <p>&copy; 2024 Gurpreet Bhatti. All Rights Reserved.</p>
    </footer>
</body>

</html>

    `;
  } else if (page === 'about') {
    contentDiv.innerHTML = `
       <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Me - Portfolio</title>
    <meta name="description" content="Learn more about gurpreet bhatti, background, skills, and interests.">
    <meta name="keywords" content="about, background, skills, interests, portfolio">
    <meta name="author" content="gurpreet bhatti">
    <style>
        body {
            font-family: 'Helvetica Neue', sans-serif;
            margin: 0;
            padding: 0;
            color: #333;
            background-color: #f4f4f4;
            line-height: 1.6;
        }

        header {
            background-color: #007BFF;
            padding: 10px 0;
        }

        main {
            max-width: 1000px;
            margin: 50px auto;
            padding: 20px;
            background-color: white;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
        }

        h1 {
            color: #007BFF;
            text-align: center;
            margin-bottom: 40px;
            font-size: 2.5em;
        }

        p {
            font-size: 1.2em;
            line-height: 1.8;
            text-align: justify;
            color: #555;
        }



            main {

                justify-content: center; /* Center horizontally */
                align-items: center; /* Center vertically */
            }

           
    </style>
</head>

<body>


    <main>
        <section aria-label="About Me">
            <h1>About Me</h1>
            <p>
                I’m Gurpreet Bhatti, and my passion lies in helping clients achieve their goals using both my military
                and engineering perspective. After retiring from the military and earning degrees in mechanical and
                structural engineering, I embarked on an exciting journey in real estate.
            </p>
            <p>
                My experience started long before my real estate journey while running successful retail businesses,
                including smoke shops, gas stations, and warehouses. After gaining a deep understanding of the market and
                a sharp eye for high-margin investments, I realized I could help others achieve their investment goals by
                becoming their realtor.
            </p>
            <p>
                Whether it’s residential or commercial (gas stations, strip plazas, hotels/motels, or
                commercial/residential lands), I specialize in evaluating opportunities, analyzing cap rates, and
                ensuring optimal returns. Negotiation is my forte—I always strive for the best financial outcomes for my
                clients.
            </p>
            <p>
                Beyond my professional life, I’m an outdoor enthusiast. Whether it’s camping, hunting, fishing, boating,
                running, or cycling, nature fuels my spirit. In summer, you’ll find me camping with my family and friends;
                in the winter, I’m carving slopes on my snowboard.
            </p>
            <p>
                Whether we share the same personal passions or they differ, it would be my pleasure to serve you in
                achieving your real estate goals. Whether you’re a first-time buyer, seasoned investor, or selling your
                property, I’m here with expert guidance and personalized solutions.
            </p>
            <p style="text-align: center; font-weight: bold; font-size: 1.3em;">
                Turning Dreams into Realty: Your Partner in Real Estate Excellence.
            </p>
        </section>
    </main>
     <footer>
        <p>&copy; 2024 Gurpreet Bhatti. All Rights Reserved.</p>
    </footer>
</body>

</html>

    `;
  } else if (page === 'contact') {
    contentDiv.innerHTML = `
    
      <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Me</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            color: #333;
        }

        main {
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
            background-color: #fff;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
        }

        h1 {
            text-align: center;
            margin-bottom: 40px;
            color: #007BFF;
        }

        form {
            display: flex;
            flex-direction: column;
        }

        form div {
            margin-bottom: 15px;
        }

        label {
            margin-bottom: 5px;
            font-weight: bold;
        }

        input[type="text"],
        input[type="email"],
        textarea {
            width: 100%;
            padding: 10px;
            margin-top: 5px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 16px;
            background-color: #f9f9f9;
            box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        textarea {
            resize: vertical;
        }

        input[type="radio"] {
            margin-right: 10px;
        }

        button[type="submit"] {
            padding: 12px 20px;
            border: none;
            background-color: #007BFF;
            color: white;
            font-size: 18px;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        button[type="submit"]:hover {
            background-color: #0056b3;
        }

        @media (max-width: 600px) {
            main {
              justify-content: center; /* Center horizontally */
              align-items: center; /* Center vertically */
            }

            h1 {
                font-size: 24px;
            }

    </style>
</head>

<body>

    <main>
        <section aria-label="Contact Me">
            <h1>Contact Me</h1>
            <form action="submit_contact_info" method="post">
                <div>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required>
                </div>
                <div>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div>
                    <label>Would you like us to contact you back?</label>
                    <div>
                        <input type="radio" id="contact_yes" name="contact_back" value="yes">
                        <label for="contact_yes">Yes</label>
                    </div>
                    <div>
                        <input type="radio" id="contact_no" name="contact_back" value="no">
                        <label for="contact_no">No</label>
                    </div>
                </div>
                <div>
                    <label for="message">Your Message:</label>
                    <textarea id="message" name="message" rows="4" required></textarea>
                </div>
                <div>
                    <button type="submit">Send Message</button>
                </div>
            </form>
        </section>
    </main>
     <footer>
        <p>&copy; 2024 Gurpreet Bhatti. All Rights Reserved.</p>
    </footer>



</body>

</html>
    `;
  } else if (page === 'project') {
    contentDiv.innerHTML = `
     <main>
        <section aria-label="My Projects">
            <h1>My Projects</h1>
            <p>Coming Soon!!! Coming Soon!!! Coming Soon!!! Coming Soon!!!</p>
            <!-- Project details go here -->
        </section>
    </main>
     
    `;
  }
}





