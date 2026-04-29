# Vertex AI Router

A lightweight, high-performance API for routing between Gemini models, written in Typescript.

## Architecture

- **Runtime**: [Bun](https://bun.sh/)
- **Framework**: [Hono](https://hono.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## Prerequisites

- [Bun](https://bun.sh/) (v1.0.0 or later)
- Node.js v24

## Getting Started

1. Install dependencies:

```bash
bun install
```

2. Run the development server:

```bash
make dev
```

## Testing

Run unit & integration tests:

```bash
make test
```

## Linting & Typecheck

Run all checks:

```bash
make check
```

Or individual checks:

```bash
make lint
make typecheck
```

## API Documentation

### General Endpoints

#### Health Check

**Endpoint:** `GET /`

Returns the status of the service.

**Response:** `Status: OK`

### Gemini Endpoints

#### 1. Summarise

**Endpoint:** `POST /api/v1/summarise`

Summarises text.

**Request Body:**

```json
{
  "text": "The text to summarise"
}
```

**Response Body:**

```json
{
  "content": {
    "summary": "Summarised text content"
  }
}
```

## Docker

Build the container:

```bash
make build
```

Run the container:

```bash
make run
```

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.
