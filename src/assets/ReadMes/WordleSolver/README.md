## Algorithm:

The main algorithm used in this script is the guessing algorithm. To start, I pull the words from the text words list and choose a starting guessing word. In this case I chose 'crane', but the algorithm would work the same if I chose any other word. Using this word, I called one of my functions which would update the word list and next guess based on the marks from the current word. If the marks value is 2 (where the letter is correct and in the right position), I would eliminate any words that don't have that letter in the correct position. If the marks value is 1 (where the letter is in the word and in the wrong position), I would remove any words that had that letter in the same position as the current guess and remove any words that did not have that letter. If the number of marks is 0 (the letter is not in the word), I would remove any words that has that character. I would then choose the first word in the remaining word list. Since this algorithm contains two loops, the time complexity would be O(n^2).

## Development & Testing Strategy:

I followed the following strategy to methodically build & incrementally test my program:
In addition to the client program, I wrote my own simplified version of the server to test everything (except TLS connection). All my testing was against my own local server before testing with proj1.3700.network server.
1. Write code to open socket (both stream and TLS mode) and test it
2. Write code to parse command line arguments and test various configurations. Write and test initialization code
3. Write code to construct JSON messages to send to the server and receive messages back (initially implemented just hello, start, and bye messages. Added retry later on)
4. Implement code to send guess and process 'retry' server response (code to retrieve retry json message and retrieve the marks)
5. Implement logic to process retry - core functionality (i.e. updateWordList function) to process marks and cull down the word list. Next guess is simply the first element in the shortened array (chose the simplest strategy)
6. Add exception processing and cleanup code.

## Challenges Faced:

I faced a couple of challenges in this coding process:
1. Initially my socket.connect method failed. This forced me to add exception handling code. I was getting a typeerror (couldn't convert port to int). I fixed the code by explicitly casting the portnumber. Easier fix would have been to specify port as an integer in the argparser.
2. The other challenge was with the code to read json messages from the server. Since we don't know the size of the data being sent back, I initially wrote code that would call recv in a loop. My intent was to program defensively so that I could process arbitrarily large datasets. However, making a recv() call to the server after the server had returned all the data would cause the server to hang; I was expecting it to return a null data buffer instead. A simple fix to this would be to read the buffer and break out of the loop if there is a newline character at the end. If there is no newline, then call the server again. I chose to simply make the buffer larger (32KB) for now. Next project (project 2 - ftp) will require me to process large datasets, and I look forward to learning how best to accomplish this so that I can send and receive large files.

## Lessons Learned:

This project gave me experience with the following that will be very helpful for future projects as well.
1. How to open sockets and send/receive data in both stream and TLS modes
2. Exception handling and processing socket errors and type errors
3. Argument parsing using arg parser
4. Handling json data
5. Implementing server to test code