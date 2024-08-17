
Submitted by: 
    Amogh Bharadwaj and Cameron Mitchell

High level approach and challenges faced:
This project has been quite challenging to get working. I started out by following the implementation approach recommended on the project website. I was hoping that as I complete each step, one of the tests would pass and I could incrementally develop the others. It hasn't quite worked out that way. I had to write a lot of code before even the milestone test cases could work. It has been a great learning experience. Here's the general approach I have taken.. not done yet, but making steady progress.

1. Started out by building a class to hold the key / value pairs (well 2 classes - a logentry to hold a single item, and the KVStore to hold log entries). I am currently on version 3 of these two classes trying to simplify so that it is performant. I have few consistency issues to resolve to get this fully working. State management especially while dealing with lossy networks has been quite challenging. 

2. Following the pattern I have used on all my prior projects, I have handlers for 3 possible states for each server (process_candidate_msgs, process_follower_msgs and process_leader_msgs). I am thinking of refactoring these and simplifying as there is quite a bit of repetitive code. In the next version I will most likely have handlers by message type (as opposed to states).

3. As suggested in the project documentation, the code is written in event-driven style using select(). However, I had to add a election second timer on followers. The need for this was revealed while testing the crash scenarios (2 - 4). I noticed I was not getting timeouts on the follower as it was getting bombarded with messages from the client (simulator). Relatively simple fix, but didn't anticipate the need for this. I am still thinking through if there is a way to avoid this. 

4. Candidate election process including the restriction in 5.4.1 was relatively easy to get working. Just had to follow the steps outlined in the spec.

5. Processing messages to the leader including sending out heartbeats required a bit of thinking and planning. As an example, I didn't anticipate the need to differentiate between 'committed' key-value pairs vs. kv pairs that were put in the leaders' store but not yet committed. I currently handle this by using a transient buffer that is maintained until the transaction is complete. It is not quite working in all cases, as the simuilator is throwing errors in some cases (i.e. it says the value returned is not correct). More debugging to do.. I anticipate the issues are more to do with the way I am handling AppendEntries commands in the follower. It has been extremely hard to debug.

6. Handling log entries on the follower (i.e. Append Entries) has been the most challenging to get right. I still have consistency issues / timing issues to work out in the code. Debugging the code has been very difficult as I can't rely on the simulator logs to determine where the problems are (logs are too large). I am carefully reviewing the code to see where the issues are... grepping for errors logged by the simulator has helped in some cases, but hasnt been straight forward. 

Testing strategy:
1. I tried constructing my own test json files with fewer requests to help with debugging. It was helpful in the initial implementation to identify issues. But, wasn't really helpful with lossy network tests
2. I added few log statements in code that was helpful in identifying and fixing consistency issues. This method helped me fix code to pass the crash and partition tests. 
3. I have been running individual tests and piping output to a text file. I then import the file into excel and look for errors, backtracking from those to identify the messages / state that is causing the issues. I have to think about how to simulate the lossy network at lower volumes with additional logging to help identify and fix the remaining issues. 


