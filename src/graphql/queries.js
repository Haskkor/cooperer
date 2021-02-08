/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAddress = /* GraphQL */ `
  query GetAddress($id: ID!) {
    getAddress(id: $id) {
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
export const listAddresss = /* GraphQL */ `
  query ListAddresss(
    $filter: ModelAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAddresss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
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
export const listCategorys = /* GraphQL */ `
  query ListCategorys(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getProjectComment = /* GraphQL */ `
  query GetProjectComment($id: ID!) {
    getProjectComment(id: $id) {
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
export const listProjectComments = /* GraphQL */ `
  query ListProjectComments(
    $filter: ModelProjectCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjectComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        content
        id
        project {
          completionDate
          creationDate
          description
          id
          photos
          createdAt
          updatedAt
        }
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
      nextToken
    }
  }
`;
export const getLocation = /* GraphQL */ `
  query GetLocation($id: ID!) {
    getLocation(id: $id) {
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
export const listLocations = /* GraphQL */ `
  query ListLocations(
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
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
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getSkill = /* GraphQL */ `
  query GetSkill($id: ID!) {
    getSkill(id: $id) {
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
export const listSkills = /* GraphQL */ `
  query ListSkills(
    $filter: ModelSkillFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSkills(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
