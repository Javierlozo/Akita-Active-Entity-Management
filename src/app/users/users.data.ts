import { faker } from '@faker-js/faker'
const count = 10;
const data: any = [];

for (let i = 0; i < count; i++) {
  data.push({
    id: faker.random.number(),
    username: faker.name.findName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar()
  });
}

export default data;
