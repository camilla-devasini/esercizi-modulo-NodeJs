import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function run() {
  const cities = await prisma.city.createMany({
    data: [
      {
        name: "Milano",
        european: true,
        country: "Italy",
        Inhabitants: "1352000",
        region: "Lombardia",
      },
      {
        name: "Londra",
        european: false,
        country: "United Kingdom",
        Inhabitants: "8982000",
        region: null,
      },
    ],
  });

  console.table(cities);
}

run();
