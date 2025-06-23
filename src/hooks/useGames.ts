import { useEffect, useState } from "react";
import httpRequest from "../services/http-service";

export const useGames = () => {
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [data, setData] = useState();

  useEffect(() => {});
  return {};
};
