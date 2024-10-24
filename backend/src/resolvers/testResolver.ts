import { Test } from "../entities/Test";
import { Query, Resolver } from "type-graphql";

@Resolver()
class TestResolver {
  @Query(() => [Test])
  findTest() {
    return Test.find();
  }
}

export default TestResolver;
