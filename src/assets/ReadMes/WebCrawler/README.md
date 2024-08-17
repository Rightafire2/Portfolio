
Submitted by: 
    Amogh Bharadwaj and Cameron Mitchell

High level approach and challenges faced:
Incremental development:
1.	Open the socket, send GET command and parse the headers
Since I had already written code to establish TLS connection in project 1, I could reuse that code in this implementation. I wrote code to extract the session id and csrf token from the response headers.

2.	Added support for POST command
This took a while to get working. In my initial implementation, I was sending session id and csrf token. That didn’t work. Then I used the developer tools on my browser to really understand all the fields that were being sent by fakebook. I learned few things: 
- I had to send csrfmiddlewaretoken and the next tokens
- I had to set the Referer field correctly. 
Once I fixed these issues, POST command worked correctly

3.	Before implementing the crawler, I wanted to test basic things that I was going to use in the crawler:
    Finding Links: wrote and tested the pattern strings needed to extract the links
    Finding secret flags: wrote and tested the pattern strings needed to find the flags in a page
    I wrote a separate test program (retester) to test these functions (and also csrfmiddlewaretoken and next used in POST message)
    Restricting URLs to valid domain (is_url_valid_to_crawl method) -- this was one of the key functions I had to develop after observing that I was losing session context when I crawled pages outside the domain. 
    
4.	With the basic infrastructure out of the way, I implemented recursive version of the crawler. To ensure I could debug easily, I limited the number of pages to be crawled to a small number (25) to start with. This allowed me to develop incrementally and find & fix defects. As an example, my initial implementation was reusing sockets between calls and as a result, recv buffers were in inconsistent state. So, I changed code in GET and POST methods to open and close sockets with each command. I also updated request headers in GET and POST commands to explictly set Connection: close attribute. 

5. When I ran the recursive algorithm on the site with page limit set to 5000, I ran into a major issue: My code reached maximum recursion depth in python (RecursionError: maximum recursion depth exceeded while calling a Python object). I realized I had to switch my approach from recursion to an iterative algorithm.

6. I rewrote the crawler code to use an iterative algorithm. The changes needed were minimal and the code is much more readable. This also forced me to extensivly document each step and also collect performance metrics that I could use to debug.

7. The iterative crawler was too slow. When I submitted to Autograder, it took over 1800 seconds and the submission was rejected. I had to update my program to use multi-threading. Luckily, the code changes were minimal - I restructured the code by adding a method to get a page from the server, retrieve all the links and search for the flags. I then used this method in my updated crawler; I used ThreadPoolExecutor to execute commands in parallel.

Testing strategy:
1. I started out by testing the login code. My initial implementation had just the login method that retrieved the first page using GET method (sendGETCommand) and the POST method (sendPOSTCommand)
2. I then tested core components (regex patterns, url filtering, etc.) in a separate test application
3. Crawler code was tested by limiting the pages crawled initially to a small number and then slow expanding. Helped me identify issues with the way I was handling 503 errors, issues with recursion and issues with not restricting crawling domain properly
4. Final set of tests were on the full run (had print statements with each page being craweled). Finally, I commented out all the print statements

