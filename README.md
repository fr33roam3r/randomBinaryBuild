# randomBinaryBuild
A manual, pseudorandom number generator based on time.

It basically revolves around this one-liner, which turns a captured nanosecond into either a 0 or 1:
```JavaScript
new Date().getMilliseconds() % 2
```

All you have to do is enter in the number range for which you want the random number to be generated, and click the `add` button until you finally generate a result!

Why
-
The reason being for it having to be done manually is that randomness revolves around the speed of time. However, the computer is also fast at detecting nanoseconds, leading to a consistent stream of 0s or 1s before switching to the latter. Even if we tried making a random delay, that would have to rely on another method related to speed, and it would cause this circle of logic to be repeated. Since humans are not as fast and as precise as a machine, they make the perfect candidate to be a seed for randomness. This is why the process has been made to be manual.

Also, even if there was an algorithm with (near) perfect secrecy, one could predict what must come next *once the data of question is converted into binary*. This is because the total of 1s & 0s would have to eventually make a 1:1 ratio ([see example](https://qrng.anu.edu.au/)). Compare this to the guarantee of no perfect 50%/50% chance ever occuring, and you may comprehend the premise of this project.
