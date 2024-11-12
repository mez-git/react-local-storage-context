# react-local-storage-context

A custom React hook and context provider to easily manage localStorage with React context. This package provides a simple API to store and retrieve values from `localStorage` while keeping them in sync with your React app's state using context and hooks.

## Installation

To install the package, run:

```bash
npm install react-local-storage-context

Usage
1. Wrap Your App with StorageProvider
First, wrap your app with the StorageProvider component to provide the localStorage context to all child components.

tsx
Copy code
import React from 'react';
import { StorageProvider } from 'react-local-storage-context';
const App = () => {
  return (
    <div>
      <h1>My React App</h1>
    </div>
  );
};

const Root = () => (
  <StorageProvider>
    <App />
  </StorageProvider>
);

export default Root;
2. Use useStorage Hook in Your Components
Now, you can use the useStorage hook to access and update localStorage values. The hook returns the current value from localStorage and a setValue function to update it.

Basic Example
import React from 'react';
import { useStorage } from 'react-local-storage-context';

const UserNameComponent = () => {
  const { value, setValue } = useStorage<{ name: string }>();

  return (
    <div>
      <h1>Welcome {value?.name || 'Guest'}</h1>
      <button onClick={() => setValue({ name: 'Megha' })}>Set Name</button>
    </div>
  );
};

export default UserNameComponent;
In the above example:

The useStorage hook accesses the localStorage for a name property.
The setValue function is used to set a new value for name in localStorage.
3. Optional: Set Default Values
You can provide default values for localStorage when using the useStorage hook. This is useful if you want to initialize values in localStorage.
const { value, setValue } = useStorage<{ firstName: string; lastName: string }>({
  firstName: 'John',
  lastName: 'Doe',
});
In this example, calling clearName will remove the name value from localStorage.

API
StorageProvider: A component that provides the localStorage context to the app.
useStorage: A hook to get and set values in localStorage.
Arguments for useStorage
type (optional): You can provide an object type to define the structure of the value you want to store in localStorage.
Methods
value: The current value stored in localStorage.
setValue: A function to set or update the value in localStorage.
clearValue: A function to clear the value in localStorage.
Example Project
Here's a simple example project that uses react-local-storage-context:

tsx
Copy code
import React from 'react';
import { StorageProvider, useStorage } from 'react-local-storage-context';

const App = () => {
  const { value, setValue } = useStorage<{ name: string }>();

  return (
    <div>
      <h1>Welcome {value?.name || 'Guest'}</h1>
      <button onClick={() => setValue({ name: 'Megha' })}>Set Name</button>
    </div>
  );
};

const Root = () => (
  <StorageProvider>
    <App />
  </StorageProvider>
);

export default Root;
License
MIT License. See LICENSE for more information.

Contributing
If you find a bug or want to contribute to the project, feel free to open an issue or submit a pull request.

markdown
Copy code

### Notes on the `README.md` file:
- **Installation**: Instructions for installing the package via npm.
- **Usage**: Basic and optional usage examples for both basic and advanced implementations.
- **API**: A simple overview of the API (methods and properties available via the hook).
- **Example Project**: A complete example React app using the package.
- **License and Contributing**: Details on how to contribute and the project's license.

This `README.md` provides users with everything they need to get started with your `react-local-storage-context` package. You can further improve it with more complex examples or notes based on your package's features.












