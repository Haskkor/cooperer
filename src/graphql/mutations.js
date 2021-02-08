/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAddress = /* GraphQL */ `
  mutation CreateAddress(
    $input: CreateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    createAddress(input: $input, condition: $condition) {
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
export const updateAddress = /* GraphQL */ `
  mutation UpdateAddress(
    $input: UpdateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    updateAddress(input: $input, condition: $condition) {
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
export const deleteAddress = /* GraphQL */ `
  mutation DeleteAddress(
    $input: DeleteAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    deleteAddress(input: $input, condition: $condition) {
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
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
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
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
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
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
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
export const createCategoryProject = /* GraphQL */ `
  mutation CreateCategoryProject(
    $input: CreateCategoryProjectInput!
    $condition: ModelCategoryProjectConditionInput
  ) {
    createCategoryProject(input: $input, condition: $condition) {
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
export const updateCategoryProject = /* GraphQL */ `
  mutation UpdateCategoryProject(
    $input: UpdateCategoryProjectInput!
    $condition: ModelCategoryProjectConditionInput
  ) {
    updateCategoryProject(input: $input, condition: $condition) {
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
export const deleteCategoryProject = /* GraphQL */ `
  mutation DeleteCategoryProject(
    $input: DeleteCategoryProjectInput!
    $condition: ModelCategoryProjectConditionInput
  ) {
    deleteCategoryProject(input: $input, condition: $condition) {
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
export const createProjectComment = /* GraphQL */ `
  mutation CreateProjectComment(
    $input: CreateProjectCommentInput!
    $condition: ModelProjectCommentConditionInput
  ) {
    createProjectComment(input: $input, condition: $condition) {
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
export const updateProjectComment = /* GraphQL */ `
  mutation UpdateProjectComment(
    $input: UpdateProjectCommentInput!
    $condition: ModelProjectCommentConditionInput
  ) {
    updateProjectComment(input: $input, condition: $condition) {
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
export const deleteProjectComment = /* GraphQL */ `
  mutation DeleteProjectComment(
    $input: DeleteProjectCommentInput!
    $condition: ModelProjectCommentConditionInput
  ) {
    deleteProjectComment(input: $input, condition: $condition) {
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
export const createLocation = /* GraphQL */ `
  mutation CreateLocation(
    $input: CreateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    createLocation(input: $input, condition: $condition) {
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
export const updateLocation = /* GraphQL */ `
  mutation UpdateLocation(
    $input: UpdateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    updateLocation(input: $input, condition: $condition) {
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
export const deleteLocation = /* GraphQL */ `
  mutation DeleteLocation(
    $input: DeleteLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    deleteLocation(input: $input, condition: $condition) {
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
export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
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
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
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
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
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
export const createProjectLikes = /* GraphQL */ `
  mutation CreateProjectLikes(
    $input: CreateProjectLikesInput!
    $condition: ModelProjectLikesConditionInput
  ) {
    createProjectLikes(input: $input, condition: $condition) {
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
export const updateProjectLikes = /* GraphQL */ `
  mutation UpdateProjectLikes(
    $input: UpdateProjectLikesInput!
    $condition: ModelProjectLikesConditionInput
  ) {
    updateProjectLikes(input: $input, condition: $condition) {
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
export const deleteProjectLikes = /* GraphQL */ `
  mutation DeleteProjectLikes(
    $input: DeleteProjectLikesInput!
    $condition: ModelProjectLikesConditionInput
  ) {
    deleteProjectLikes(input: $input, condition: $condition) {
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
export const createProjectParticipants = /* GraphQL */ `
  mutation CreateProjectParticipants(
    $input: CreateProjectParticipantsInput!
    $condition: ModelProjectParticipantsConditionInput
  ) {
    createProjectParticipants(input: $input, condition: $condition) {
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
export const updateProjectParticipants = /* GraphQL */ `
  mutation UpdateProjectParticipants(
    $input: UpdateProjectParticipantsInput!
    $condition: ModelProjectParticipantsConditionInput
  ) {
    updateProjectParticipants(input: $input, condition: $condition) {
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
export const deleteProjectParticipants = /* GraphQL */ `
  mutation DeleteProjectParticipants(
    $input: DeleteProjectParticipantsInput!
    $condition: ModelProjectParticipantsConditionInput
  ) {
    deleteProjectParticipants(input: $input, condition: $condition) {
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
export const createProjectSkills = /* GraphQL */ `
  mutation CreateProjectSkills(
    $input: CreateProjectSkillsInput!
    $condition: ModelProjectSkillsConditionInput
  ) {
    createProjectSkills(input: $input, condition: $condition) {
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
export const updateProjectSkills = /* GraphQL */ `
  mutation UpdateProjectSkills(
    $input: UpdateProjectSkillsInput!
    $condition: ModelProjectSkillsConditionInput
  ) {
    updateProjectSkills(input: $input, condition: $condition) {
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
export const deleteProjectSkills = /* GraphQL */ `
  mutation DeleteProjectSkills(
    $input: DeleteProjectSkillsInput!
    $condition: ModelProjectSkillsConditionInput
  ) {
    deleteProjectSkills(input: $input, condition: $condition) {
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
export const createProjectStars = /* GraphQL */ `
  mutation CreateProjectStars(
    $input: CreateProjectStarsInput!
    $condition: ModelProjectStarsConditionInput
  ) {
    createProjectStars(input: $input, condition: $condition) {
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
export const updateProjectStars = /* GraphQL */ `
  mutation UpdateProjectStars(
    $input: UpdateProjectStarsInput!
    $condition: ModelProjectStarsConditionInput
  ) {
    updateProjectStars(input: $input, condition: $condition) {
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
export const deleteProjectStars = /* GraphQL */ `
  mutation DeleteProjectStars(
    $input: DeleteProjectStarsInput!
    $condition: ModelProjectStarsConditionInput
  ) {
    deleteProjectStars(input: $input, condition: $condition) {
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
export const createSkill = /* GraphQL */ `
  mutation CreateSkill(
    $input: CreateSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    createSkill(input: $input, condition: $condition) {
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
export const updateSkill = /* GraphQL */ `
  mutation UpdateSkill(
    $input: UpdateSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    updateSkill(input: $input, condition: $condition) {
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
export const deleteSkill = /* GraphQL */ `
  mutation DeleteSkill(
    $input: DeleteSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    deleteSkill(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createUserSkills = /* GraphQL */ `
  mutation CreateUserSkills(
    $input: CreateUserSkillsInput!
    $condition: ModelUserSkillsConditionInput
  ) {
    createUserSkills(input: $input, condition: $condition) {
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
export const updateUserSkills = /* GraphQL */ `
  mutation UpdateUserSkills(
    $input: UpdateUserSkillsInput!
    $condition: ModelUserSkillsConditionInput
  ) {
    updateUserSkills(input: $input, condition: $condition) {
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
export const deleteUserSkills = /* GraphQL */ `
  mutation DeleteUserSkills(
    $input: DeleteUserSkillsInput!
    $condition: ModelUserSkillsConditionInput
  ) {
    deleteUserSkills(input: $input, condition: $condition) {
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
