import { faker } from "@faker-js/faker";

type Comment = {
  username: string;
  commentText: string;
};

export type User = {
  username: string;
  profilePic: string;
};

export type Post = {
  user: User;
  location: string;
  image: string;
  caption: string;
  likes: User[];
  comments: Comment[];
  timestamp: Date;
};

const generatePostData = (): Post => {
  return {
    user: {
      username: faker.internet.userName().toLocaleLowerCase(),
      profilePic: faker.image.avatar(),
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
