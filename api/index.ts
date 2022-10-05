import { server } from "./server";

const PORT = 3000;
server.listen(PORT).then(({ url }) => {
  console.log(`server is running on ${url}`);
});
