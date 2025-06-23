import httpRequest from "./http-service";

class GameService {
  getAll() {
    const controller = new AbortController();
    const request = httpRequest.get("/games", { signal: controller.signal });

    return { request, cancel: () => controller.abort() };
  }
}

export default GameService;
