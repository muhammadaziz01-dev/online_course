import request from "../config";
import { CertificatesRequest } from "@interface";

export const certificates: CertificatesRequest  = {
  getCertificates: () => request.get(`/certificates`, ),
  postCertificates: (data) => request.post("/certificates", data),
  deleteCertificates: (id) => request.delete(`/certificates/${id}`),
  updateCertificates: (data) => request.put(`/certificates/${data?._id}`, data),
};