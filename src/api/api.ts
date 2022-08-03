import axios from 'axios';
import {StudentEntity} from 'types';


const API = axios.create({baseURL: 'http://localhost:3001'});

/* Student paths */

export const getStudentUser = (id: string) => API.get(`/student/${id}`);
export const updateStudentUser = (id: string, updatedStudent: StudentEntity) => API.patch(`/student/${id}`, updatedStudent);
export const updateHireStatus = (id: string) => API.patch(`/student/hired/${id}`);

/* HR paths */

export const getAllStudents = () => API.get(`/hr-user`);
export const getAllStudentsToCall = (hrId: string) => API.get(`/hr-user/call-list/${hrId}`);
export const filterAllStudents = (queryString: string) => API.get(`/hr-user/call-list${queryString}`);
export const getStudentCv = (hrId: string, studentId: string) => API.patch(`/hr-user/student-cv/${hrId}/${studentId}`);
export const setUserStatusToInterviewed = (hrId: string, studentId: string) => API.patch(`/hr-user/call/${hrId}/${studentId}`);
export const setUserStatusToHired = (hrId: string, studentId: string) => API.patch(`/hr-user/hired/${hrId}/${studentId}`);
export const setUserStatusToAvailable = (hrId: string, studentId: string) => API.patch(`/hr-user/not-interested/${hrId}/${studentId}`);
