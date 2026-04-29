FROM oven/bun:1-slim AS builder
WORKDIR /app
COPY ./package.json ./bun.lock ./
RUN bun install --frozen-lockfile --production

FROM oven/bun:1-distroless
WORKDIR /app
COPY --from=builder /app .
COPY ./src ./src
ENV PORT=8080
EXPOSE 8080

CMD ["run", "src/index.ts"]
