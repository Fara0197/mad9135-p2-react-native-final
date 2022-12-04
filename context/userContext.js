import React from "react";

const UserContext = React.createContext();

function UserProvider(props) {
  const [users, setUsers] = React.useState();

  React.useEffect(() => {
    fetch("https://api.artic.edu/api/v1/artworks?page=2&limit=10")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.data);
        console.log("the fetched data" + data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return <UserContext.Provider value={[users]} {...props} />;
}

function useUser() {
  const context = React.useContext(UserContext);

  if (!context) {
    throw new Error("cant not find a context");
  }
  return context;
}
export { UserProvider, useUser };
