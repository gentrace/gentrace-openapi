import fs from "fs-extra";
import yaml from "js-yaml";

type OpenAPISpec = {
  paths: {
    [endpoint: string]: {
      [method: string]: {
        tags: string[];
      };
    };
  };
};

const ingestionSpec = yaml.load(
  fs.readFileSync("spec.yaml", "utf8")
) as OpenAPISpec;

const ingestionTag = "Ingestion";
const ingestionPaths = Object.fromEntries(
  Object.entries(ingestionSpec.paths).filter(([, data]) =>
    Object.values(data).some((op) => op.tags && op.tags.includes(ingestionTag))
  )
);

ingestionSpec.paths = ingestionPaths;

fs.mkdirpSync("dist");
fs.writeFileSync("dist/node.yaml", yaml.dump(ingestionSpec));

const feedbackSpec = yaml.load(
  fs.readFileSync("spec.yaml", "utf8")
) as OpenAPISpec;

const feedbackTag = "Feedback";
const feedbackPaths = Object.fromEntries(
  Object.entries(feedbackSpec.paths).filter(([, data]) =>
    Object.values(data).some((op) => op.tags && op.tags.includes(feedbackTag))
  )
);

feedbackSpec.paths = feedbackPaths;

fs.mkdirpSync("dist");
fs.writeFileSync("dist/browser.yaml", yaml.dump(feedbackSpec));
