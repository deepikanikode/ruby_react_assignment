export const renderServiceData = () =>
  fetch("/api/v1/users").then(results => {
    return results.json();
  });
