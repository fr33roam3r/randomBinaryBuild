# randomBinaryBuild
A manual, pseudorandom number generator based on time.

It basically revolves around this one-liner:
```JavaScript
new Date().getMilliseconds() % 2
```

Usage
- 
Enter in the number range for which you want the random number to be generated, and click the `add` button until you finally generate a result! The reason being for it having to be done manually is that randomness revolves around speed (in any circumstance). However, the computer is also fast at detecting nanoseconds, leading to a consistent stream of 1s or 0s before switching to the latter. Even if we tried making a random delay, that would have to rely on another method related to speed, and it would cause this circle of logic to be repeated. Since humans are not as fast and as precise as a machine, they make the perfect candidate to be a seed for randomness. This is why the process has been made to be manual.
