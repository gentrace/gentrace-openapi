# Gentrace OpenAPI

This repository contains the OpenAPI 3.1.0 specification for the Gentrace API, providing comprehensive documentation for all available endpoints and data models.

## Overview

The Gentrace API enables developers to interact with Gentrace's AI evaluation and testing platform programmatically. This OpenAPI specification covers the core functionality including:

- **Pipelines** - Manage and execute AI pipelines
- **Datasets** - Create and manage test datasets
- **Experiments** - Run and track AI experiments
- **Test Cases** - Define and manage individual test cases

## API Specification

The complete OpenAPI specification is available in `spec.json`. This file contains:

- All available endpoints with request/response schemas
- Authentication requirements (Bearer token)
- Data models and component definitions
- Example requests and responses

## Base URL

```
https://gentrace.ai/api
```

## Authentication

The API uses Bearer token authentication. Include your API key in the Authorization header:

```
Authorization: Bearer YOUR_API_KEY
```

## Usage

You can use this OpenAPI specification to:

- Generate client SDKs in various programming languages
- Import into API testing tools like Postman or Insomnia
- Generate documentation using tools like Swagger UI
- Validate API requests and responses

## Resources

- [Gentrace Platform](https://gentrace.ai)
- [API Documentation](https://docs.gentrace.ai)
- [Support](mailto:support@gentrace.ai)

## License

This OpenAPI specification is licensed under the MIT License.

