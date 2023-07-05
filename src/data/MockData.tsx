import { faker } from "@faker-js/faker";
import { Post } from "../types/PostTypes";

const generatePostData = (): Post => {
  return {
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
    comments: Array.from({ length: 3 }, () => ({
      username: faker.internet.userName().toLocaleLowerCase(),
      commentText: faker.lorem.lines(),
    })),
    timestamp: faker.date.recent(),
  };
};

export default generatePostData;
