# @hibanka/pino-typeorm-logger

![CI](https://github.com/Hibanka/pino-typeorm-logger/actions/workflows/ci.yml/badge.svg)
[![NPM Version](https://badgen.net/npm/v/@hibanka/pino-typeorm-logger)](https://npmjs.com/package/@hibanka/pino-typeorm-logger)
[![Minimum Node.js Version](https://badgen.net/npm/node/@hibanka/pino-typeorm-logger)](https://npmjs.com/package/@hibanka/pino-typeorm-logger)

Pino TypeORM Logger

## Installation

```bash
npm install @hibanka/pino-typeorm-logger
```

## Usage

```ts
import { pino } from 'pino';
import { PinoTypeORMLogger } from '@hibanka/pino-typeorm-logger';
import { DataSource } from 'typeorm';

const dataSource = new DataSource({
  logger: new PinoTypeORMLogger(pino()),
});
```
