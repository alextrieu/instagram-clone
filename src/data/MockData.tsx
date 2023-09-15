import { faker } from "@faker-js/faker";
import { Post, CurrentUser, SuggestUser } from "../types/PostTypes";
import { v4 as uuidv4 } from "uuid";

export const generateCurrentUser = (): CurrentUser => {
  return {
    username: faker.internet.userName().toLocaleLowerCase(),
    profilePic: faker.image.url(),
    name: faker.person.fullName(),
  };
};

export const generateSuggestUser = (): SuggestUser => {
  return {
    username: faker.internet.userName().toLocaleLowerCase(),
    profilePic: faker.image.url(),
    name: faker.person.fullName(),
  };
};

const generatePostData = (): Post => {
  return {
    id: uuidv4(),
    user: {
      username: faker.internet.userName().toLocaleLowerCase(),
      profilePic: faker.image.avatar(),
      storyImages: Array.from({ length: 3 }, () => faker.image.url()),
    },
    location: faker.location.city(),
    image: faker.image.url(),
    caption: faker.lorem.paragraph(3),
    likes: Array.from({ length: 3 }, () => ({
      username: faker.internet.userName().toLocaleLowerCase(),
      profilePic: faker.image.avatar(),
    })),
    comments: Array.from({ length: 5 }, () => ({
      username: faker.internet.userName().toLocaleLowerCase(),
      profilePic: faker.image.avatar(),
      commentText: faker.lorem.lines(),
    })),
    timestamp: faker.date.recent(),
  };
};

export default generatePostData;
