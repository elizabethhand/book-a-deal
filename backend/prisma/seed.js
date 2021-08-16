const { PrismaClient } = require("@prisma/client");

const dbClient = new PrismaClient();

const {
    users, 
    categories, 
    items, 
    reviews
} = require("../../src/utils/mochData");

async function seed() {

  for (const user of users) {
    await dbClient.user.create({
      data: user,
    });
  }

  for (const category of categories) {
    await dbClient.category.create({
      data: category,
    });
  }

  for (const item of items) {
    await dbClient.item.create({
      data: item,
    });
  }

  for (const review of reviews) {
    await dbClient.review.create({
      data: review,
    });
  }
  
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await dbClient.$disconnect();
  });