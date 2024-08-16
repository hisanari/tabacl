FROM node:22-bookworm-slim
LABEL authors="hm"

ARG UID=1000
ARG GID=1000
ARG LOGIN_USER=app

RUN userdel -r node
RUN apt-get update -y && apt-get install -y openssl
RUN groupadd -r --gid $GID $LOGIN_USER && useradd -m -r --uid $UID --gid $GID $LOGIN_USER
RUN mkdir -p /tabaco
RUN chown -R $LOGIN_USER:$LOGIN_USER /tabaco

USER $LOGIN_USER
WORKDIR /tabaco
COPY --chown=$LOGIN_USER:$LOGIN_USER package*.json .
RUN npm install
COPY --chown=$LOGIN_USER:$LOGIN_USER . /tabaco

CMD ["npm", "run", "dev", "--", "--host"]
