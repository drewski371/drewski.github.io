const skills = document.querySelectorAll('.skill')
let activeIndex = 0

skills[skills.length - 1].classList.add('previous')
skills[0].classList.add('active')
skills[1].classList.add('next')

function moveNext() {
    if (activeIndex === (skills.length - 1)) {
        activeIndex = 0
    } else {
        activeIndex++
    }

    moveToIndex(activeIndex)
}

function movePrevious() {
    if (activeIndex === 0) {
        activeIndex = skills.length - 1
    } else {
        activeIndex--
    }

    moveToIndex(activeIndex)
}

function moveToIndex(i) {
    // Update the "old" adjacent slides with "new" ones
    let newPrevious = i - 1
    let newNext = i + 1
    let oldPrevious = i - 2
    let oldNext = i + 2
    const totalSkills = skills.length
    // Test if carousel has more than three items
    if ((totalSkills - 1) > 3) {
        // Checks and updates if the new slides are out of bounds
        if (newPrevious <= 0) {
            oldPrevious = (totalSkills - 1);
        } else if (newNext >= (totalSkills - 1)) {
            oldNext = 0;
        }
        // Checks and updates if slide is at the beginning/end
        if (i === 0) {
            newPrevious = totalSkills - 1
            oldPrevious = totalSkills - 2
            oldNext = i + 1
        } else if (i === (totalSkills - 1)) {
            newPrevious = i - 1
            newNext = 0
            oldNext = 1
        }
        // Now we've worked out where we are and where we're going, 
        // by adding/removing classes we'll trigger the transitions.
        // Reset old next/prev elements to default classes
        skills[oldPrevious].className = 'skill'
        skills[oldNext].className = 'skill'
        // Add new classes
        skills[newPrevious].classList.add('skill', 'previous')
        skills[i].classList.add('skill', 'active')
        skills[newNext].classList.add('skill', 'next')
    }
}

// setInterval(() => {
//     moveNext()
// }, 3000)

setTimeout(() => {
    moveNext()
}, 3000);