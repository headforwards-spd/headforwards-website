# React Components

## React Cosmos Visual TDD

Run `yarn cosmos` and view the dashboard at [localhost:5000](http://localhost:5000)

Fixture files with a `*.fixture.*` are automatically included.

Example fixture (`ThingIWantToTest.fixture.js`):

```jsx
import React from "react";
import FixtureLayout from "page-layout/FixtureLayout";
import ThingIWantToTest from "./thing-i-want-to-test.component";

export default function Component() {
  return (
    <FixtureLayout>
      <ThingIWantToTest />
    </FixtureLayout>
  );
}
```

or

```jsx
import React from "react";
import FixtureLayout from "page-layout/FixtureLayout";
import ThingIWantToTest from "./thing-i-want-to-test.component";

import faker from "faker/locale/en_GB";
const xPropFake = faker.random.number();

export default {
  "Thing I want to test": (
    <FixtureLayout>
      <ThingIWantToTest />
    </FixtureLayout>
  ),
  "Thing I want to test with xProp": (
    <FixtureLayout>
      <ThingIWantToTest xProp={xPropFake} />
    </FixtureLayout>
  )
};
```
