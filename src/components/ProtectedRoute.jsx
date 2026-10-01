```jsx
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isLoggedIn =
    localStorage.getItem("biohers_logged_in") === "true";

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;
```
