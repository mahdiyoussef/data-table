

## Requirements and Setup

Before you can use the DataTable component, ensure you have the following prerequisites installed and set up:

### 1. Node.js and npm

- Install Node.js (which includes npm) from [nodejs.org](https://nodejs.org/)
- Recommended version: 14.x or later

Verify the installation:

```bash
node --version
npm --version
```

### 2. React

This component is built for React applications. If you don't have a React project set up:

1. Create a new React project:

```bash
npx create-react-app my-datatable-app
cd my-datatable-app
```

2. Or, if you're using an existing project, ensure React is installed:

```bash
npm install react react-dom
```

### 3. Tailwind CSS

This component uses Tailwind CSS for styling. To set up Tailwind in your React project:

1. Install Tailwind and its peer dependencies:

```bash
npm install -D tailwindcss postcss autoprefixer
```

2. Generate Tailwind configuration files:

```bash
npx tailwindcss init -p
```

3. Configure your template paths in `tailwind.config.js`:

```javascript
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

4. Add Tailwind directives to your CSS in `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 4. TypeScript (Optional but Recommended)

If you're using TypeScript (which is recommended for type safety):

1. For a new project, create a TypeScript-based React app:

```bash
npx create-react-app my-datatable-app --template typescript
```

2. For an existing JavaScript project, add TypeScript:

```bash
npm install -D typescript @types/react @types/react-dom
```

### 5. Install the DataTable Component

Assuming the DataTable component is available as a package (e.g., `my-datatable-component`):

```bash
npm install my-datatable-component
```

If it's a local component, ensure it's in your project's component directory.

### 6. Additional Dependencies

Install any additional dependencies required by the DataTable component:

```bash
npm install date-fns # for date formatting, if needed
```

Once you have completed these setup steps, you're ready to use the DataTable component in your React application.

```

This section provides a comprehensive guide for setting up the environment necessary to use the DataTable component. It covers:

1. Node.js and npm installation
2. React setup (both for new and existing projects)
3. Tailwind CSS installation and configuration
4. TypeScript setup (as an optional but recommended step)
5. Instructions for installing the DataTable component (assuming it's available as a package)
6. Additional dependencies that might be required

You can add this section at the beginning of your documentation to ensure users have the correct environment set up before they start implementing the DataTable component.


Let's create a simple example of a user management table with filtering and status fields.

### Example: User Management Table

In this example, we'll create a table displaying user information with the following columns:
1. User ID
2. Name
3. Email
4. Role (with status field)
5. Account Status (with status field)

We'll implement filtering on the Name and Email columns.

Here's the explanation and implementation:

```markdown
# DataTable Implementation Example

## 1. Import necessary components and hooks

First, we need to import the required components and React hooks:

```jsx
import React, { useState, useEffect } from 'react';
import DataTable, { StatusFieldConfigProps } from './DataTable';
```

## 2. Create sample data

Let's create some sample user data:

```jsx
const sampleUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'admin', status: 'active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'user', status: 'inactive' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'user', status: 'active' },
  // Add more users as needed
];
```

## 3. Define column configuration

Next, we'll define the column configuration for our table:

```jsx
const columns = [
  { key: 'User ID', value: 'id' },
  { key: 'Name', value: 'name' },
  { key: 'Email', value: 'email' },
  { key: 'Role', value: 'role', StatusField: true },
  { key: 'Account Status', value: 'status', StatusField: true },
];
```

## 4. Configure Status Fields

Now, let's configure the Status Fields for the 'Role' and 'Account Status' columns:

```jsx
const statusFieldsConfig: StatusFieldConfigProps[] = [
  {
    name: 'role',
    cases: [
      { value: 'admin', TextToReplace: 'Admin', BgColor: '#e3f2fd', TextColor: '#1565c0' },
      { value: 'user', TextToReplace: 'User', BgColor: '#e8f5e9', TextColor: '#2e7d32' },
    ],
    defaultCase: { BgColor: '#f5f5f5', TextColor: '#616161' },
  },
  {
    name: 'status',
    cases: [
      { value: 'active', TextToReplace: 'Active', BgColor: '#e8f5e9', TextColor: '#2e7d32' },
      { value: 'inactive', TextToReplace: 'Inactive', BgColor: '#ffebee', TextColor: '#c62828' },
    ],
    defaultCase: { BgColor: '#f5f5f5', TextColor: '#616161' },
  },
];
```

## 5. Implement the UserTable component

Now, let's create the main `UserTable` component:

```jsx
function UserTable() {
  const [users, setUsers] = useState(sampleUsers);

  const handleFilter = async (column: string, type: string) => {
    const sortedUsers = [...users].sort((a, b) => {
      if (a[column] < b[column]) return type === 'asc' ? -1 : 1;
      if (a[column] > b[column]) return type === 'asc' ? 1 : -1;
      return 0;
    });
    setUsers(sortedUsers);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>
      <DataTable
        columns={columns}
        values={users}
        RowsNumber={5}
        includeRowNumber={true}
        RowNumberName="No."
        StatusFieldsConfig={statusFieldsConfig}
        onFilter={handleFilter}
        style={{
          ThHoverColor: "blue-600",
          SurroundedBorderWidth: "[1px]",
          SurroundedBorderColor: "gray-300",
          width: "full",
          height: "auto"
        }}
      />
    </div>
  );
}
```

## 6. Explanation of the implementation

1. We import the necessary components and hooks.
2. We create sample user data to populate the table.
3. We define the column configuration, specifying which columns should use Status Fields.
4. We configure the Status Fields for the 'Role' and 'Account Status' columns, defining different styles for each case.
5. In the `UserTable` component:
   - We use the `useState` hook to manage the user data.
   - We implement the `handleFilter` function to sort the data when a column header is clicked.
   - We render the `DataTable` component with the necessary props:
     - `columns`: The column configuration we defined earlier.
     - `values`: The user data state.
     - `RowsNumber`: Number of rows per page (5 in this example).
     - `includeRowNumber`: To show row numbers.
     - `RowNumberName`: The header for the row number column.
     - `StatusFieldsConfig`: The status field configuration we defined earlier.
     - `onFilter`: The filtering function we implemented.
     - `style`: Custom styles for the table.

This implementation creates a user management table with sortable columns for Name and Email, and status fields for Role and Account Status. The table will display 5 rows per page and include row numbers.

To use this component, you would simply render the `UserTable` component in your React application:

```jsx
function App() {
  return (
    <div className="App">
      <UserTable />
    </div>
  );
}
```

This example demonstrates how to use the DataTable component with filtering and status fields, providing a practical use case for user management.

this picture demonstrates a case of Logistic App.
![image](https://github.com/user-attachments/assets/f0db3e18-f086-4bb5-a09c-33fc59ccfbff)

```

