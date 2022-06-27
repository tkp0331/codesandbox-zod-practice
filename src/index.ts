//参考文献： https://zenn.dev/uttk/articles/bd264fa884e026

import { z } from "zod";

const schema = z.object({
  str: z.string(),
  num: z.number()
});

const test_str = {
  str: "this is test",
  num: 1
};

type SchemaType = z.infer<typeof schema>;

try {
  // const ok = schema.parse({ str: "" });
  const ok: SchemaType = schema.parse(test_str);
  console.log("test_str:", test_str);
  console.log("ok:", ok);

  // 以下は常にfalse!!!!!!
  console.log("test_str === ok", test_str === ok);
  // const throw_error = schema.parse({ str: 0 });
  console.log(ok);
} catch (err) {
  console.error(err);
}
