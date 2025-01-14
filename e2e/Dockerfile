# must match package json version
FROM mcr.microsoft.com/playwright:v1.49.0-noble

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

RUN npx playwright install

COPY playwright.config.ts /app/playwright.config.ts

COPY tests/ /app/tests/

CMD ["npx", "playwright", "test"]
