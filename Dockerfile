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

COPY server/requirements.txt ./

RUN pip install --no-cache-dir -r requirements.txt

COPY server .

COPY --from=client-builder /client/dist ./client/dist

EXPOSE 8000

ENV ENV=production

CMD ["uvicorn","main:app","--host","0.0.0.0","--port","8000"]