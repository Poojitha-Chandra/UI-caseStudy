# <h1>UI-caseStudy</h1>
Cool Frames is a leading entertainment company that want start online movie streaming service. As first phase of development, they want their customers to view the list of movies available and allow customers to add them to their wish list. 
# <h2>Use Cases</h2>
There will be two types of users whom will be using this application:
- Admin
- Customer

`Admin`    Responsible for managing the movies available in Movie Cruiser portal.

`Customer` Find Movies available in Movie Cruiser and adds them to the favorites. The customer also has the option to remove movies which were already added to the favorites.
# <h3>View Movie List</h3>
`Movie List Admin`Displays the list of all movies for Admin. Each movie will have option to edit a particular movie.

`Movie List Customer`Displays the list of movies for customer. Each movie will have option to add the specific movie to favorites.
# <h3>Edit Movie </h3>
`Edit Movie`Screen with form fields to edit the movie details. This page is arrived by clicking the Edit link in ***movie-list-admin.html***

`Edit Movie Status`Display the status of submission of edit movie form. This page is arrived after clicking save in ***edit-movie.html***
# <h3>Add to Favorites </h3>
`Movie List Customer (Add to Favorites success)`Customer can add a movie to Favorites by clicking *Add to Favorites* link in ***movie-list-customer.html***. On clicking this link a page similar to Movie List page is displayed with the message that the Movie has been added to the favorites successfully.

# <h3>View Favorites </h3>
`Favorites`Displays the list of movies added to the favorites. This screen is arrived based on the navigation link in the top of the screen from ***movie-list-customer.html***

`Favorites Empty`This page will be used when there are no movies in the favorites. The Movie List link in the message should point to ***movie-list-customer.html***

# <h3>Remove Movie from Favorites </h3>
`Remove Favorites `When Customer click *Delete* link in **favorites.html**, this page is displayed with the message that the movie had been removed from the Favorites successfully.
