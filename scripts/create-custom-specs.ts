import fs from "fs-extra";
import yaml from "js-yaml";

const RESOLVED_SPEC_LOCATION = "dist/spec-resolved.yaml";

type OpenAPISpec = {
  paths: {
    [endpoint: string]: {
      [method: string]: {
        tags: string[];
      };
    };
  };
};

const coreSpec = yaml.load(
  fs.readFileSync(RESOLVED_SPEC_LOCATION, "utf8")
) as OpenAPISpec;

const coreTag = "Core";
const corePaths = Object.fromEntries(
  Object.entries(coreSpec.paths).filter(([, data]) =>
    Object.values(data).some((op) => op.tags && op.tags.includes(coreTag))
  )
);

coreSpec.paths = corePaths;

fs.mkdirpSync("dist");
fs.writeFileSync("dist/core.yaml", yaml.dump(coreSpec));

const feedbackSpec = yaml.load(
  fs.readFileSync(RESOLVED_SPEC_LOCATION, "utf8")
) as OpenAPISpec;

const feedbackTag = "Feedback";
const feedbackPaths = Object.fromEntries(
  Object.entries(feedbackSpec.paths).filter(([, data]) =>
    Object.values(data).some((op) => op.tags && op.tags.includes(feedbackTag))
  )
);

feedbackSpec.paths = feedbackPaths;

fs.mkdirpSync("dist");
fs.writeFileSync("dist/feedback.yaml", yaml.dump(feedbackSpec));
