type Category {
    description
    id
    image
    name
    projects
}

type Address {
    country
    postalCode
    suburb
    town
}

type Project {
    categories
    comments
    completionDate
    creationDate
    description
    id
    likes
    location
    owner
    participants
    photos
    skillsNeeded
    stars
}

type Skill {
    description
    id
    name
    proficiency
    users
}

type User {
    description
    email
    id
    location
    projectsCoop
    projectsLiked
    projectsOwned
    projectsStared
    skill
    userName
}
