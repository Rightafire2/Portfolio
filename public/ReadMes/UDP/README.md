
Submitted by: 
    Amogh Bharadwaj and Cameron Mitchell

High level approach and challenges faced:
The implementation strategy on the website was very helpful in developing this solution. 
1. The starter code was enough to pass level 1 basic test. It only took couple of lines of code to get both level 1 tests to pass. This was especially useful as it gave me time to really understand the basics of what was expected. 
2. We then developed UDPPacket and UDPAck classes to help with encapsulating key functionality (sequence numbers, checksum). Getting this basic infrastructure right was key. 
3. We developed code for the receiver -- implemented handling of out of order packets, cumulative ack, duplicate packets,etc. Took us couple of iterations to get this right but it was relatively straight forward
4. Implementation of timeouts took a bit of time. Initially, I had code that mimicked the run script (i.e. I was checking for expiry of time in the while loop in the Sender program). Once I realized we could use the timeout parameter in select.select, our code became a lot simpler. In hindsight, we should have read the documentation for select.select earlier!
5. We got to level 5 tests with fixed window (of 4) relatively quickly.
6. We then modified code to incorporate sliding windows and congestion control implementation. This was the biggest challenge. Even our code was written exactly as specified in the psuedocode, multiple tests would fail consistently. Debugging was hard - I added lots of logging statements to really understand what was going on. Setting the cwnd and ssthresh values correctly (followed the psuedocode exactly!!!) didn't get us to pass all the tests. Still more left to be discovered / debugged


Good features:
1. Our UDPPacket and UDPAck classes are quite lean and efficient. Very low overhead added. Checksum algorithm is also good (although I can't take credit for it -- it is translation of C code in the textbook to Python)
2. Our Receiver code I believe is streamlined. It can be made even more efficient by using dictionary instead of the two lists I am maintaining (opportunity to consolidate)
3. We (probably mistakenly) embarked on a journey to stay true to the TCP RFC specs where possible. As a result, you will see code for both classic RTO calculation as well as Jacobson/Karels Algorithm that confirms to the spec. These are good features to have. We had other features in congestion control algorithm that matched the spec, but ended up deleting all that code as the tests were failing.
4. We read all the data from STDIN at once and cache the packets to be sent. I believe that code (in the run function of the sender) is clean and a good way to implement
5. We have implemented Karn's algorithm to deal with RTT Sample ambiguity (simple code - but hopefully useful)


Testing strategy:
1. Tested UDPPacket and UDPAck classes separately using a simple test rig. We borrowed the mangling function from the run script to test out packet and ack corruption and test our implementation of checksum function (psuedocode from the textbook was very helpful in implementing the checksum function)
2. Tested RTO code also in a separate test rig
3. Followed the implementation strategy outlined the project spec. Tested each case separately and used extensive logging (I have since cleaned up) to aid with debugging
4. When some of our test failed, we modified the run script to give more time to run the scripts. That pointed out specific issues (duplicate message transmissions, as an example) that we were able to rectify
