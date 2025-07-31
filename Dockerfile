FROM node:23-alpine AS base
WORKDIR /app
COPY package*.json ./
EXPOSE 3000
RUN npm install

# FROM base AS builder
WORKDIR /app
COPY . .
# RUN npm run build

# FROM base AS production
# WORKDIR /app
# ENV NODE_ENV=production
# RUN npm ci

# COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=base /app/package.json ./package.json
# COPY --from=builder /app/public ./public

# CMD ["npm", "run", "build", "&&", "npm", "start"]
CMD npm run build && npm start

