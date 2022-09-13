import http from "../../core/services/http-common";

export class RegistrationsApiService {
  getAll() {
    return http.get("/clients");
  }
  create(data) {
    return http.post("/clients", data);
  }
  update(id, data) {
    return http.put(`/clients/${id}`, data);
  }
  delete(id) {
    return http.delete(`/clients/${id}`);
  }
}