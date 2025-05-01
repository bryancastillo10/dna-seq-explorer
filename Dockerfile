# Build Client
FROM node:18-alpine AS client-builder

WORKDIR /client
COPY client/package*.json client/yarn.lock ./

RUN yarn install --frozen-lockfile

COPY client .

RUN yarn build

# Build Server
FROM python:3.11-slim

WORKDIR /server

COPY server .

RUN pip install --no-cache-dir -r requirements.txt

COPY --from=client-builder /client/dist ./client/dist

EXPOSE 8000

ENV ENV=production

CMD ["sh", "-c", "uvicorn main:app --host 0.0.0.0 --port ${PORT:-8000}"]