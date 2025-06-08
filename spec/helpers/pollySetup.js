import { Polly } from "@pollyjs/core";
import NodeHttpAdapter from "@pollyjs/adapter-node-http";
import FSPersister from "@pollyjs/persister-fs";
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

if (!Polly.झाँकी?.has("node-http")) {
  Polly.register(NodeHttpAdapter);
}
if (!Polly.झाँकी?.has("fs")) {
  Polly.register(FSPersister);
}

export function createPollyInstance(recordingName, customConfig = {}) {
  const defaultConfig = {
    adapters: ["node-http"],
    persister: "fs",
    persisterOptions: {
      fs: {
        recordingsDir: path.resolve(__dirname, "../fixtures"),
      },
    },
    mode: process.env.POLLY_MODE || "replay",
    matchRequestsBy: {
      url: {
        protocol: true,
        hostname: true,
        port: true,
        pathname: true,
        query: (params) => {
          return params;
        },
      },
      method: true,
      headers: {},
      body: true,
      order: false,
    },
    logging: false,
  };

  const mergedConfig = {
    ...defaultConfig,
    ...customConfig,
    persisterOptions: {
      ...defaultConfig.persisterOptions,
      ...(customConfig.persisterOptions || {}),
      fs: {
        ...defaultConfig.persisterOptions.fs,
        ...((customConfig.persisterOptions &&
          customConfig.persisterOptions.fs) ||
          {}),
      },
    },
    matchRequestsBy: {
      ...defaultConfig.matchRequestsBy,
      ...(customConfig.matchRequestsBy || {}),
      url: {
        ...defaultConfig.matchRequestsBy.url,
        ...((customConfig.matchRequestsBy &&
          customConfig.matchRequestsBy.url) ||
          {}),
      },
      headers: {
        ...defaultConfig.matchRequestsBy.headers,
        ...((customConfig.matchRequestsBy &&
          customConfig.matchRequestsBy.headers) ||
          {}),
      },
    },
  };

  const polly = new Polly(recordingName, mergedConfig);

  polly.server.any().on("beforePersist", (req, recording) => {
    if (recording.request.headers && recording.request.headers.Authorization) {
      recording.request.headers.Authorization = "FILTERED_BEARER_TOKEN";
    }

    if (recording.request.query && recording.request.query.api_key) {
      const apiKeyParamIndex = recording.request.queryString.findIndex(
        (p) => p && p.name === "api_key"
      );
      if (apiKeyParamIndex > -1) {
        recording.request.queryString[apiKeyParamIndex].value =
          "FILTERED_API_KEY";
      }
    }
  });

  return polly;
}
