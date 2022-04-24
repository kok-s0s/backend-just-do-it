<details><summary>NestJS 项目生成的 README</summary>

<br />

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>

    <p align="center">

<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>

    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>

  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

* Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
* Website - [https://nestjs.com](https://nestjs.com/)
* Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

</details>

> [NestJS](https://nestjs.com/) 是用于构建高效、可靠和可扩展的服务器端应用程序的渐进式 Node.js 框架；

> [Prisma](https://www.prisma.io/) -- Next-generation Node.js and TypeScript ORM；

> ORM 即[对象关系映射](https://zh.wikipedia.org/wiki/%E5%AF%B9%E8%B1%A1%E5%85%B3%E7%B3%BB%E6%98%A0%E5%B0%84)，能够操控一个虚拟对象数据库；

> [MongoDB Atlas](https://www.mongodb.com/atlas/database) 是 MongoDB 的云服务，关键免费；

> [PM2](https://pm2.keymetrics.io/) is a daemon process manager that will help you manage and keep your application online 24/7

项目基于 NestJS 构建相应的接口服务，利用 Prisma 这个 ORM 来操控我个人所属的 Mongodb Atlas 数据库，这样就能创建几个接口供前端调用，将项目部署到个人服务器后使用 PM2 开启服务；

--- 

Tips

1. `git clone` 后的项目必须有一个 `.env` 文件包含你自己的 `DATABASE_URL`，这样执行 `yarn start:dev` 运行项目时才能成功；

```ts
// prisma/schema.prisma
datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}
```

2. 图片存储我使用的图床方式，利用 PicGo 和 Github 的搭配自动生成图片的链接，将链接存储到 MongoDB Altas 这个数据库中的；

3. 更多不懂的可以看我的 commit，我的 commit 信息虽说写不咋滴，但是我尽可能地展示我是如何一步一步构建起这个项目的，学习这个项目优先建议把上面出现的链接都点一点，利用官方文档来进行学习；

4. 项目更新流程 --> 服务器 `git pull` 项目，执行 `npx prisma generate` 重新构建映射，再执行 `yarn build` 打包项目，用 ~~pm2 重启项目 `pm2 restart just-do-it` 即可~~; 噢，其实用 pm2 创建新服务加上 `--watch` ，一旦项目有文件变更就会自动重启服务，无需我们手动重启。

![](./ERD.svg)
