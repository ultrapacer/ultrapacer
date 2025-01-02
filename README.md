<img src="https://public.ultrapacer.com/logo.svg" alt="image" width="100" height="auto">

# using ultraPacer

Go to [https://ultrapacer.com](https://ultrapacer.com)

# using @ultrapacer/core:

0. Import modules:

```
import {Course, Plan, Track} from '@ultrapacer/core'
```

1. Create a new track:

```
const track = new Track(trackData)
```

2. Create a new course:

```
const course = new Course(track, courseData)
```

3. Create a new plan:

```
const plan = new Plan(course, planData)
```

4. See computed pacing:

```
console.log(plan.stats)
console.log(plan.splits)
```

# Documentation

[Docs site](https://ultrapacer.github.io/core)

# Repository

[Github site](https://github.com/ultrapacer/core)

# No License / Copyright

The source code herin is copyright to ULTRAPACER, LLC.
This code may be forked, downloaded, and/or modified for the purposes of
contributing to this project only. There is no license for any other use or
distribution.
