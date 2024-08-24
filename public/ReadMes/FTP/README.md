## Algorithm:

I followed the implementation approach suggested in project requirements page. It worked really well in developing and debugging the program due to it being made into a class. For this program there wasn't necessarily an algorithm I developed. Instead, I created a class which contained numerous individual functions to help connect to the server, send a message, and close the server. I also included functions for argument parsing and error handling which were also useful for debugging errors.

## Development & Testing Strategy:

I followed the following strategy to methodically build & incrementally test my program:
1. Wrote code to connect to socket and close the socket
2. Tested functions for connection and closing socket
3. Created a class for the FTP server and created methods for each command
4. Tested the class/methods to ensure it was working effectively
5. Added error handling where necessary
6. Tested again under every scenario to ensure that both the error handling and class were working as expected

## Challenges Faced:

I faced a couple of challenges in this coding process:
1. urlparsing code - I had to write a separate program and test how the parser works. Documentation for extracting username, password and port were not clear. However, the example from the project requirements page helped a lot
2. The other challenge was with getting the data channel to work correctly. Took couple of tries to get it right (had mistakes in interpreting the 227 return code)

## Lessons Learned:

This project gave me experience with the following that will be very helpful for future projects as well.
1. How to open sockets and send/receive data using the data channel
2. Exception handling and processing socket errors and type errors
3. Urlparse functions