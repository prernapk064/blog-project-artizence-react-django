Blog frontend using react

Here I have created four endpoints -

/: The root endpoint of the application.it displays the main blog page along with sign-in and registers icons.

/register: The registration endpoint where users can register themselves.Here I am using the API http://127.0.0.1:8000/api/users/ to register users. After successful registration, the user is redirected to the login page.

/login: The login endpoint where users can provide their username and password to log in. It uses the backend API http://127.0.0.1:8000/api/token/ to generate a JWT token for authentication. 

/blog/:id: The blog endpoint that displays a particular blog. It fetches the data using the API http://127.0.0.1:8000/api/blogs/${id}/, where ${id} represents the unique identifier of the blog

first, when we hit the URL http://localhost:3000, it will show you the blog,signin, and register icon.

key feature - without sign-in and authentication we can not see the blog.



Users can register themselves by clicking on the register and providing the required details. It uses the /register endpoint and the API http://127.0.0.1:8000/api/users/.


After successful registration, users are redirected to the login page. Here, they need to provide their username and password. It uses the /login endpoint and the API http://127.0.0.1:8000/api/token/ to generate a JWT token for authentication.

Once a user logs in, their identity is verified using JWT authentication. The generated token is stored in the local storage, allowing the user to stay logged in even after refreshing the page or revisiting the website without logging in again. The token is automatically refreshed every four minutes to maintain the session.

If the user clicks logout then they have to login again.


The frontend continuously fetches blog data from the backend using the API http://127.0.0.1:8000/api/blogs/. This ensures that any changes made to the blog content (such as CRUD operations) are immediately reflected in the frontend.

Users can read a specific blog by clicking the "Read More" button. This action navigates them to the particular blog page, which retrieves the relevant data using the API http://127.0.0.1:8000/api/blogs/${id}/, where ${id} represents the unique identifier of the blog.
