import { useEffect, useState } from "react";

const useToken = (email) => {
  const [token, setToken] = useState("");
  const [isUserLoading, setIsUserLoading] = useState(true);

  useEffect(() => {
    setIsUserLoading(true);
    if (email) {
      fetch(`https://bikers-ocean-server.vercel.app/jwt?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data?.accessToken) {
            localStorage.setItem("bikersOcean-token", data?.accessToken);
            setToken(data?.accessToken);
            setIsUserLoading(false);
          }
        });
    }
  }, [email]);
  return [token, isUserLoading];
};

export default useToken;
