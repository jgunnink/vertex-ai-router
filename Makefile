.PHONY: help dev test build run bench checks lint typecheck check

help: ## Show this help message
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-15s\033[0m %s\n", $$1, $$2}'

dev: ## Run the development server with hot reload
	bun run dev

test: ## Run tests using bun test
	bun test

checks: ## Run all checks (test, lint, typecheck)
	bun run checks

lint: ## Run ESLint
	bun run lint

typecheck: ## Run TypeScript type checking
	bun run typecheck

check: ## Alias for checks
	bun run checks

build: ## Build the Docker image
	docker build -t vertex-ai-router .

run: ## Run the Docker container
	docker run --rm -p 8080:8080 vertex-ai-router
