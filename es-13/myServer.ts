import myApp from "./myApp";
import "dotenv/config";

const port = process.env.PORT;

myApp.listen(port, () => {
  console.log(`Server runs at localhost:${port}`);
});
