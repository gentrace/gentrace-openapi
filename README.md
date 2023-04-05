
<!-- TEXT_SECTION:header:START -->
<h1 align="center">
Gentrace OpenAPI Specification
</h1>
<p align="center">
  <a href="https://github.com/gentrace/gentrace-openapi/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="Gentrace is released under the MIT license." />
  </a>
  <a href="https://github.com/gentrace/gentrace-openapi/actions/workflows/release-please.yaml">
    <img src="https://github.com/gentrace/gentrace-openapi/actions/workflows/release-please.yaml/badge.svg" alt="Release Github action status" />
  </a>
</p>
<!-- TEXT_SECTION:header:END -->

This repository contains the OpenAPI specification for the Gentrace API.

The repository also includes build tools for generating the SDKs for [Node.JS](https://github.com/gentrace/gentrace-node/) and the [browser](https://github.com/gentrace/gentrace-browser/) using `@openapitools/openapi-generator-cli`.

## Usage

```
yarn install

# The code assumes that the SDK you want to modify is at one level higher
yarn build
```
