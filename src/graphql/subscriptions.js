/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAddress = /* GraphQL */ `
  subscription OnCreateAddress {
    onCreateAddress {
      country
      id
      postalCode
      suburb
      town
      user {
        address {
          country
          id
          postalCode
          suburb
          town
          createdAt
          updatedAt
        }
        description
        email
        id
        projectsCoop {
          nextToken
        }
        projectsLiked {
          nextToken
        }
        projectsOwned {
          nextToken
        }
        projectsStared {
          nextToken
        }
        skills {
          nextToken
        }
        userName
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAddress = /* GraphQL */ `
  subscription OnUpdateAddress {
    onUpdateAddress {
      country
      id
      postalCode
      suburb
      town
      user {
        address {
          country
          id
          postalCode
          suburb
          town
          createdAt
          updatedAt
        }
        description
        email
        id
        projectsCoop {
          nextToken
        }
        projectsLiked {
          nextToken
        }
        projectsOwned {
          nextToken
        }
        projectsStared {
          nextToken
        }
        skills {
          nextToken
        }
        userName
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAddress = /* GraphQL */ `
  subscription OnDeleteAddress {
    onDeleteAddress {
      country
      id
      postalCode
      suburb
      town
      user {
        address {
          country
          id
          postalCode
          suburb
          town
          createdAt
          updatedAt
        }
        description
        email
        id
        projectsCoop {
          nextToken
        }
        projectsLiked {
          nextToken
        }
        projectsOwned {
          nextToken
        }
        projectsStared {
          nextToken
        }
        skills {
          nextToken
        }
        userName
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
      description
      id
      image
      name
      projects {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
      description
      id
      image
      name
      projects {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
      description
      id
      image
      name
      projects {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCategoryProject = /* GraphQL */ `
  subscription OnCreateCategoryProject {
    onCreateCategoryProject {
      category {
        description
        id
        image
        name
        projects {
          nextToken
        }
        createdAt
        updatedAt
      }
      id
      project {
        categories {
          nextToken
        }
        comments {
          nextToken
        }
        completionDate
        creationDate
        description
        id
        likes {
          nextToken
        }
        location {
          country
          id
          postalCode
          suburb
          town
          createdAt
          updatedAt
        }
        owner {
          description
          email
          id
          userName
          createdAt
          updatedAt
        }
        participants {
          nextToken
        }
        photos
        skillsNeeded {
          nextToken
        }
        stars {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCategoryProject = /* GraphQL */ `
  subscription OnUpdateCategoryProject {
    onUpdateCategoryProject {
      category {
        description
        id
        image
        name
        projects {
          nextToken
        }
        createdAt
        updatedAt
      }
      id
      project {
        categories {
          nextToken
        }
        comments {
          nextToken
        }
        completionDate
        creationDate
        description
        id
        likes {
          nextToken
        }
        location {
          country
          id
          postalCode
          suburb
          town
          createdAt
          updatedAt
        }
        owner {
          description
          email
          id
          userName
          createdAt
          updatedAt
        }
        participants {
          nextToken
        }
        photos
        skillsNeeded {
          nextToken
        }
        stars {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCategoryProject = /* GraphQL */ `
  subscription OnDeleteCategoryProject {
    onDeleteCategoryProject {
      category {
        description
        id
        image
        name
        projects {
          nextToken
        }
        createdAt
        updatedAt
      }
      id
      project {
        categories {
          nextToken
        }
        comments {
          nextToken
        }
        completionDate
        creationDate
        description
        id
        likes {
          nextToken
        }
        location {
          country
          id
          postalCode
          suburb
          town
          createdAt
          updatedAt
        }
        owner {
          description
          email
          id
          userName
          createdAt
          updatedAt
        }
        participants {
          nextToken
        }
        photos
        skillsNeeded {
          nextToken
        }
        stars {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateProjectComment = /* GraphQL */ `
  subscription OnCreateProjectComment {
    onCreateProjectComment {
      content
      id
      project {
        categories {
          nextToken
        }
        comments {
          nextToken
        }
        completionDate
        creationDate
        description
        id
        likes {
          nextToken
        }
        location {
          country
          id
          postalCode
          suburb
          town
          createdAt
          updatedAt
        }
        owner {
          description
          email
          id
          userName
          createdAt
          updatedAt
        }
        participants {
          nextToken
        }
        photos
        skillsNeeded {
          nextToken
        }
        stars {
          nextToken
        }
        createdAt
        updatedAt
      }
      user {
        address {
          country
          id
          postalCode
          suburb
          town
          createdAt
          updatedAt
        }
        description
        email
        id
        projectsCoop {
          nextToken
        }
        projectsLiked {
          nextToken
        }
        projectsOwned {
          nextToken
        }
        projectsStared {
          nextToken
        }
        skills {
          nextToken
        }
        userName
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateProjectComment = /* GraphQL */ `
  subscription OnUpdateProjectComment {
    onUpdateProjectComment {
      content
      id
      project {
        categories {
          nextToken
        }
        comments {
          nextToken
        }
        completionDate
        creationDate
        description
        id
        likes {
          nextToken
        }
        location {
          country
          id
          postalCode
          suburb
          town
          createdAt
          updatedAt
        }
        owner {
          description
          email
          id
          userName
          createdAt
          updatedAt
        }
        participants {
          nextToken
        }
        photos
        skillsNeeded {
          nextToken
        }
        stars {
          nextToken
        }
        createdAt
        updatedAt
      }
      user {
        address {
          country
          id
          postalCode
          suburb
          town
          createdAt
          updatedAt
        }
        description
        email
        id
        projectsCoop {
          nextToken
        }
        projectsLiked {
          nextToken
        }
        projectsOwned {
          nextToken
        }
        projectsStared {
          nextToken
        }
        skills {
          nextToken
        }
        userName
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteProjectComment = /* GraphQL */ `
  subscription OnDeleteProjectComment {
    onDeleteProjectComment {
      content
      id
      project {
        categories {
          nextToken
        }
        comments {
          nextToken
        }
        completionDate
        creationDate
        description
        id
        likes {
          nextToken
        }
        location {
          country
          id
          postalCode
          suburb
          town
          createdAt
          updatedAt
        }
        owner {
          description
          email
          id
          userName
          createdAt
          updatedAt
        }
        participants {
          nextToken
        }
        photos
        skillsNeeded {
          nextToken
        }
        stars {
          nextToken
        }
        createdAt
        updatedAt
      }
      user {
        address {
          country
          id
          postalCode
          suburb
          town
          createdAt
          updatedAt
        }
        description
        email
        id
        projectsCoop {
          nextToken
        }
        projectsLiked {
          nextToken
        }
        projectsOwned {
          nextToken
        }
        projectsStared {
          nextToken
        }
        skills {
          nextToken
        }
        userName
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateLocation = /* GraphQL */ `
  subscription OnCreateLocation {
    onCreateLocation {
      country
      id
      postalCode
      project {
        categories {
          nextToken
        }
        comments {
          nextToken
        }
        completionDate
        creationDate
        description
        id
        likes {
          nextToken
        }
        location {
          country
          id
          postalCode
          suburb
          town
          createdAt
          updatedAt
        }
        owner {
          description
          email
          id
          userName
          createdAt
          updatedAt
        }
        participants {
          nextToken
        }
        photos
        skillsNeeded {
          nextToken
        }
        stars {
          nextToken
        }
        createdAt
        updatedAt
      }
      suburb
      town
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation {
    onUpdateLocation {
      country
      id
      postalCode
      project {
        categories {
          nextToken
        }
        comments {
          nextToken
        }
        completionDate
        creationDate
        description
        id
        likes {
          nextToken
        }
        location {
          country
          id
          postalCode
          suburb
          town
          createdAt
          updatedAt
        }
        owner {
          description
          email
          id
          userName
          createdAt
          updatedAt
        }
        participants {
          nextToken
        }
        photos
        skillsNeeded {
          nextToken
        }
        stars {
          nextToken
        }
        createdAt
        updatedAt
      }
      suburb
      town
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation {
    onDeleteLocation {
      country
      id
      postalCode
      project {
        categories {
          nextToken
        }
        comments {
          nextToken
        }
        completionDate
        creationDate
        description
        id
        likes {
          nextToken
        }
        location {
          country
          id
          postalCode
          suburb
          town
          createdAt
          updatedAt
        }
        owner {
          description
          email
          id
          userName
          createdAt
          updatedAt
        }
        participants {
          nextToken
        }
        photos
        skillsNeeded {
          nextToken
        }
        stars {
          nextToken
        }
        createdAt
        updatedAt
      }
      suburb
      town
      createdAt
      updatedAt
    }
  }
`;
export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject {
    onCreateProject {
      categories {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      comments {
        items {
          content
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      completionDate
      creationDate
      description
      id
      likes {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      location {
        country
        id
        postalCode
        project {
          completionDate
          creationDate
          description
          id
          photos
          createdAt
          updatedAt
        }
        suburb
        town
        createdAt
        updatedAt
      }
      owner {
        address {
          country
          id
          postalCode
          suburb
          town
          createdAt
          updatedAt
        }
        description
        email
        id
        projectsCoop {
          nextToken
        }
        projectsLiked {
          nextToken
        }
        projectsOwned {
          nextToken
        }
        projectsStared {
          nextToken
        }
        skills {
          nextToken
        }
        userName
        createdAt
        updatedAt
      }
      participants {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      photos
      skillsNeeded {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      stars {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject {
    onUpdateProject {
      categories {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      comments {
        items {
          content
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      completionDate
      creationDate
      description
      id
      likes {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      location {
        country
        id
        postalCode
        project {
          completionDate
          creationDate
          description
          id
          photos
          createdAt
          updatedAt
        }
        suburb
        town
        createdAt
        updatedAt
      }
      owner {
        address {
          country
          id
          postalCode
          suburb
          town
          createdAt
          updatedAt
        }
        description
        email
        id
        projectsCoop {
          nextToken
        }
        projectsLiked {
          nextToken
        }
        projectsOwned {
          nextToken
        }
        projectsStared {
          nextToken
        }
        skills {
          nextToken
        }
        userName
        createdAt
        updatedAt
      }
      participants {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      photos
      skillsNeeded {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      stars {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject {
    onDeleteProject {
      categories {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      comments {
        items {
          content
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      completionDate
      creationDate
      description
      id
      likes {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      location {
        country
        id
        postalCode
        project {
          completionDate
          creationDate
          description
          id
          photos
          createdAt
          updatedAt
        }
        suburb
        town
        createdAt
        updatedAt
      }
      owner {
        address {
          country
          id
          postalCode
          suburb
          town
          createdAt
          updatedAt
        }
        description
        email
        id
        projectsCoop {
          nextToken
        }
        projectsLiked {
          nextToken
        }
        projectsOwned {
          nextToken
        }
        projectsStared {
          nextToken
        }
        skills {
          nextToken
        }
        userName
        createdAt
        updatedAt
      }
      participants {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      photos
      skillsNeeded {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      stars {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateProjectLikes = /* GraphQL */ `
  subscription OnCreateProjectLikes {
    onCreateProjectLikes {
      id
      project {
        categories {
          nextToken
        }
        comments {
          nextToken
        }
        completionDate
        creationDate
        description
        id
        likes {
          nextToken
        }
        location {
          country
          id
          postalCode
          suburb
          town
          createdAt
          updatedAt
        }
        owner {
          description
          email
          id
          userName
          createdAt
          updatedAt
        }
        participants {
          nextToken
        }
        photos
        skillsNeeded {
          nextToken
        }
        stars {
          nextToken
        }
        createdAt
        updatedAt
      }
      user {
        address {
          country
          id
          postalCode
          suburb
          town
          createdAt
          updatedAt
        }
        description
        email
        id
        projectsCoop {
          nextToken
        }
        projectsLiked {
          nextToken
        }
        projectsOwned {
          nextToken
        }
        projectsStared {
          nextToken
        }
        skills {
          nextToken
        }
        userName
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateProjectLikes = /* GraphQL */ `
  subscription OnUpdateProjectLikes {
    onUpdateProjectLikes {
      id
      project {
        categories {
          nextToken
        }
        comments {
          nextToken
        }
        completionDate
        creationDate
        description
        id
        likes {
          nextToken
        }
        location {
          country
          id
          postalCode
          suburb
          town
          createdAt
          updatedAt
        }
        owner {
          description
          email
          id
          userName
          createdAt
          updatedAt
        }
        participants {
          nextToken
        }
        photos
        skillsNeeded {
          nextToken
        }
        stars {
          nextToken
        }
        createdAt
        updatedAt
      }
      user {
        address {
          country
          id
          postalCode
          suburb
          town
          createdAt
          updatedAt
        }
        description
        email
        id
        projectsCoop {
          nextToken
        }
        projectsLiked {
          nextToken
        }
        projectsOwned {
          nextToken
        }
        projectsStared {
          nextToken
        }
        skills {
          nextToken
        }
        userName
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteProjectLikes = /* GraphQL */ `
  subscription OnDeleteProjectLikes {
    onDeleteProjectLikes {
      id
      project {
        categories {
          nextToken
        }
        comments {
          nextToken
        }
        completionDate
        creationDate
        description
        id
        likes {
          nextToken
        }
        location {
          country
          id
          postalCode
          suburb
          town
          createdAt
          updatedAt
        }
        owner {
          description
          email
          id
          userName
          createdAt
          updatedAt
        }
        participants {
          nextToken
        }
        photos
        skillsNeeded {
          nextToken
        }
        stars {
          nextToken
        }
        createdAt
        updatedAt
      }
      user {
        address {
          country
          id
          postalCode
          suburb
          town
          createdAt
          updatedAt
        }
        description
        email
        id
        projectsCoop {
          nextToken
        }
        projectsLiked {
          nextToken
        }
        projectsOwned {
          nextToken
        }
        projectsStared {
          nextToken
        }
        skills {
          nextToken
        }
        userName
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateProjectParticipants = /* GraphQL */ `
  subscription OnCreateProjectParticipants {
    onCreateProjectParticipants {
      id
      project {
        categories {
          nextToken
        }
        comments {
          nextToken
        }
        completionDate
        creationDate
        description
        id
        likes {
          nextToken
        }
        location {
          country
          id
          postalCode
          suburb
          town
          createdAt
          updatedAt
        }
        owner {
          description
          email
          id
          userName
          createdAt
          updatedAt
        }
        participants {
          nextToken
        }
        photos
        skillsNeeded {
          nextToken
        }
        stars {
          nextToken
        }
        createdAt
        updatedAt
      }
      user {
        address {
          country
          id
          postalCode
          suburb
          town
          createdAt
          updatedAt
        }
        description
        email
        id
        projectsCoop {
          nextToken
        }
        projectsLiked {
          nextToken
        }
        projectsOwned {
          nextToken
        }
        projectsStared {
          nextToken
        }
        skills {
          nextToken
        }
        userName
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateProjectParticipants = /* GraphQL */ `
  subscription OnUpdateProjectParticipants {
    onUpdateProjectParticipants {
      id
      project {
        categories {
          nextToken
        }
        comments {
          nextToken
        }
        completionDate
        creationDate
        description
        id
        likes {
          nextToken
        }
        location {
          country
          id
          postalCode
          suburb
          town
          createdAt
          updatedAt
        }
        owner {
          description
          email
          id
          userName
          createdAt
          updatedAt
        }
        participants {
          nextToken
        }
        photos
        skillsNeeded {
          nextToken
        }
        stars {
          nextToken
        }
        createdAt
        updatedAt
      }
      user {
        address {
          country
          id
          postalCode
          suburb
          town
          createdAt
          updatedAt
        }
        description
        email
        id
        projectsCoop {
          nextToken
        }
        projectsLiked {
          nextToken
        }
        projectsOwned {
          nextToken
        }
        projectsStared {
          nextToken
        }
        skills {
          nextToken
        }
        userName
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteProjectParticipants = /* GraphQL */ `
  subscription OnDeleteProjectParticipants {
    onDeleteProjectParticipants {
      id
      project {
        categories {
          nextToken
        }
        comments {
          nextToken
        }
        completionDate
        creationDate
        description
        id
        likes {
          nextToken
        }
        location {
          country
          id
          postalCode
          suburb
          town
          createdAt
          updatedAt
        }
        owner {
          description
          email
          id
          userName
          createdAt
          updatedAt
        }
        participants {
          nextToken
        }
        photos
        skillsNeeded {
          nextToken
        }
        stars {
          nextToken
        }
        createdAt
        updatedAt
      }
      user {
        address {
          country
          id
          postalCode
          suburb
          town
          createdAt
          updatedAt
        }
        description
        email
        id
        projectsCoop {
          nextToken
        }
        projectsLiked {
          nextToken
        }
        projectsOwned {
          nextToken
        }
        projectsStared {
          nextToken
        }
        skills {
          nextToken
        }
        userName
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateProjectSkills = /* GraphQL */ `
  subscription OnCreateProjectSkills {
    onCreateProjectSkills {
      id
      project {
        categories {
          nextToken
        }
        comments {
          nextToken
        }
        completionDate
        creationDate
        description
        id
        likes {
          nextToken
        }
        location {
          country
          id
          postalCode
          suburb
          town
          createdAt
          updatedAt
        }
        owner {
          description
          email
          id
          userName
          createdAt
          updatedAt
        }
        participants {
          nextToken
        }
        photos
        skillsNeeded {
          nextToken
        }
        stars {
          nextToken
        }
        createdAt
        updatedAt
      }
      skills {
        description
        id
        name
        proficiency
        projects {
          nextToken
        }
        users {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateProjectSkills = /* GraphQL */ `
  subscription OnUpdateProjectSkills {
    onUpdateProjectSkills {
      id
      project {
        categories {
          nextToken
        }
        comments {
          nextToken
        }
        completionDate
        creationDate
        description
        id
        likes {
          nextToken
        }
        location {
          country
          id
          postalCode
          suburb
          town
          createdAt
          updatedAt
        }
        owner {
          description
          email
          id
          userName
          createdAt
          updatedAt
        }
        participants {
          nextToken
        }
        photos
        skillsNeeded {
          nextToken
        }
        stars {
          nextToken
        }
        createdAt
        updatedAt
      }
      skills {
        description
        id
        name
        proficiency
        projects {
          nextToken
        }
        users {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteProjectSkills = /* GraphQL */ `
  subscription OnDeleteProjectSkills {
    onDeleteProjectSkills {
      id
      project {
        categories {
          nextToken
        }
        comments {
          nextToken
        }
        completionDate
        creationDate
        description
        id
        likes {
          nextToken
        }
        location {
          country
          id
          postalCode
          suburb
          town
          createdAt
          updatedAt
        }
        owner {
          description
          email
          id
          userName
          createdAt
          updatedAt
        }
        participants {
          nextToken
        }
        photos
        skillsNeeded {
          nextToken
        }
        stars {
          nextToken
        }
        createdAt
        updatedAt
      }
      skills {
        description
        id
        name
        proficiency
        projects {
          nextToken
        }
        users {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateProjectStars = /* GraphQL */ `
  subscription OnCreateProjectStars {
    onCreateProjectStars {
      id
      project {
        categories {
          nextToken
        }
        comments {
          nextToken
        }
        completionDate
        creationDate
        description
        id
        likes {
          nextToken
        }
        location {
          country
          id
          postalCode
          suburb
          town
          createdAt
          updatedAt
        }
        owner {
          description
          email
          id
          userName
          createdAt
          updatedAt
        }
        participants {
          nextToken
        }
        photos
        skillsNeeded {
          nextToken
        }
        stars {
          nextToken
        }
        createdAt
        updatedAt
      }
      user {
        address {
          country
          id
          postalCode
          suburb
          town
          createdAt
          updatedAt
        }
        description
        email
        id
        projectsCoop {
          nextToken
        }
        projectsLiked {
          nextToken
        }
        projectsOwned {
          nextToken
        }
        projectsStared {
          nextToken
        }
        skills {
          nextToken
        }
        userName
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateProjectStars = /* GraphQL */ `
  subscription OnUpdateProjectStars {
    onUpdateProjectStars {
      id
      project {
        categories {
          nextToken
        }
        comments {
          nextToken
        }
        completionDate
        creationDate
        description
        id
        likes {
          nextToken
        }
        location {
          country
          id
          postalCode
          suburb
          town
          createdAt
          updatedAt
        }
        owner {
          description
          email
          id
          userName
          createdAt
          updatedAt
        }
        participants {
          nextToken
        }
        photos
        skillsNeeded {
          nextToken
        }
        stars {
          nextToken
        }
        createdAt
        updatedAt
      }
      user {
        address {
          country
          id
          postalCode
          suburb
          town
          createdAt
          updatedAt
        }
        description
        email
        id
        projectsCoop {
          nextToken
        }
        projectsLiked {
          nextToken
        }
        projectsOwned {
          nextToken
        }
        projectsStared {
          nextToken
        }
        skills {
          nextToken
        }
        userName
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteProjectStars = /* GraphQL */ `
  subscription OnDeleteProjectStars {
    onDeleteProjectStars {
      id
      project {
        categories {
          nextToken
        }
        comments {
          nextToken
        }
        completionDate
        creationDate
        description
        id
        likes {
          nextToken
        }
        location {
          country
          id
          postalCode
          suburb
          town
          createdAt
          updatedAt
        }
        owner {
          description
          email
          id
          userName
          createdAt
          updatedAt
        }
        participants {
          nextToken
        }
        photos
        skillsNeeded {
          nextToken
        }
        stars {
          nextToken
        }
        createdAt
        updatedAt
      }
      user {
        address {
          country
          id
          postalCode
          suburb
          town
          createdAt
          updatedAt
        }
        description
        email
        id
        projectsCoop {
          nextToken
        }
        projectsLiked {
          nextToken
        }
        projectsOwned {
          nextToken
        }
        projectsStared {
          nextToken
        }
        skills {
          nextToken
        }
        userName
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSkill = /* GraphQL */ `
  subscription OnCreateSkill {
    onCreateSkill {
      description
      id
      name
      proficiency
      projects {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      users {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSkill = /* GraphQL */ `
  subscription OnUpdateSkill {
    onUpdateSkill {
      description
      id
      name
      proficiency
      projects {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      users {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSkill = /* GraphQL */ `
  subscription OnDeleteSkill {
    onDeleteSkill {
      description
      id
      name
      proficiency
      projects {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      users {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      address {
        country
        id
        postalCode
        suburb
        town
        user {
          description
          email
          id
          userName
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      description
      email
      id
      projectsCoop {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      projectsLiked {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      projectsOwned {
        items {
          completionDate
          creationDate
          description
          id
          photos
          createdAt
          updatedAt
        }
        nextToken
      }
      projectsStared {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      skills {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      userName
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      address {
        country
        id
        postalCode
        suburb
        town
        user {
          description
          email
          id
          userName
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      description
      email
      id
      projectsCoop {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      projectsLiked {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      projectsOwned {
        items {
          completionDate
          creationDate
          description
          id
          photos
          createdAt
          updatedAt
        }
        nextToken
      }
      projectsStared {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      skills {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      userName
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      address {
        country
        id
        postalCode
        suburb
        town
        user {
          description
          email
          id
          userName
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      description
      email
      id
      projectsCoop {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      projectsLiked {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      projectsOwned {
        items {
          completionDate
          creationDate
          description
          id
          photos
          createdAt
          updatedAt
        }
        nextToken
      }
      projectsStared {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      skills {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      userName
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUserSkills = /* GraphQL */ `
  subscription OnCreateUserSkills {
    onCreateUserSkills {
      id
      skill {
        description
        id
        name
        proficiency
        projects {
          nextToken
        }
        users {
          nextToken
        }
        createdAt
        updatedAt
      }
      user {
        address {
          country
          id
          postalCode
          suburb
          town
          createdAt
          updatedAt
        }
        description
        email
        id
        projectsCoop {
          nextToken
        }
        projectsLiked {
          nextToken
        }
        projectsOwned {
          nextToken
        }
        projectsStared {
          nextToken
        }
        skills {
          nextToken
        }
        userName
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUserSkills = /* GraphQL */ `
  subscription OnUpdateUserSkills {
    onUpdateUserSkills {
      id
      skill {
        description
        id
        name
        proficiency
        projects {
          nextToken
        }
        users {
          nextToken
        }
        createdAt
        updatedAt
      }
      user {
        address {
          country
          id
          postalCode
          suburb
          town
          createdAt
          updatedAt
        }
        description
        email
        id
        projectsCoop {
          nextToken
        }
        projectsLiked {
          nextToken
        }
        projectsOwned {
          nextToken
        }
        projectsStared {
          nextToken
        }
        skills {
          nextToken
        }
        userName
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUserSkills = /* GraphQL */ `
  subscription OnDeleteUserSkills {
    onDeleteUserSkills {
      id
      skill {
        description
        id
        name
        proficiency
        projects {
          nextToken
        }
        users {
          nextToken
        }
        createdAt
        updatedAt
      }
      user {
        address {
          country
          id
          postalCode
          suburb
          town
          createdAt
          updatedAt
        }
        description
        email
        id
        projectsCoop {
          nextToken
        }
        projectsLiked {
          nextToken
        }
        projectsOwned {
          nextToken
        }
        projectsStared {
          nextToken
        }
        skills {
          nextToken
        }
        userName
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
