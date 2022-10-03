import http from "../../core/services/http-common";

class ClientsApiService {
  getAll(){
    return http.get("/clients");
  }
}

export default new ClientsApiService();