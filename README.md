# Advanced REST Client events

A library adding events and type definitions to Advanced REST Client.
Use this library when building a component that triggers the navigation via DOM events.

[![Published on NPM](https://img.shields.io/npm/v/@advanced-rest-client/events.svg)](https://www.npmjs.com/package/@advanced-rest-client/events)

[![tests](https://github.com/advanced-rest-client/events/actions/workflows/deployment.yml/badge.svg)](https://github.com/advanced-rest-client/events/actions/workflows/deployment.yml)

## Usage

### Installation

```sh
npm install --save @advanced-rest-client/events
```

### ARC request navigate event

Dispatched to navigate to a request screen and open a request

```js
import { ARCNavigationEvent } from '@advanced-rest-client/events';

ARCNavigationEvent.navigateRequest(document.body, 'request id', 'saved');
```

### REST API navigate event

Dispatched to navigate to a REST API either as the API Console or to project metadata screen.

```js
import { ARCNavigationEvent } from '@advanced-rest-client/events';

ARCNavigationEvent.navigateRestApi(document.body, 'api id', '1.0.0', 'documentation or detail');
```

### Project navigate event

Dispatched to navigate to an ARC project screen.

```js
import { ARCNavigationEvent } from '@advanced-rest-client/events';

ARCNavigationEvent.navigateProject(document.body, 'project id', 'detail');
```

### Other navigation events

Other events are dispatched via `ARCNavigationEvent.navigate()` helper function as a general purpose navigation event.
It contains the base route and optional route options.

```js
import { ARCNavigationEvent } from '@advanced-rest-client/events';

ARCNavigationEvent.navigate(document.body, 'request', {
  // route params.
});
```

## Development

```sh
git clone https://github.com/advanced-rest-client/events
cd events
npm install
```

### Running the tests

```sh
npm test
```
