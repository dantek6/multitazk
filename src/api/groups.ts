import axios from "./axios";

interface Group {
  title: string;
}

// Realizar una solicitud para crear un nuevo grupo
export const createGroupRequest = (group: string) => axios.post(`groups`, group);

// Realizar una solicitud para obtener todos los grupos del usuario
export const getGroupsRequest = () => axios.get(`groups`);

// Realizar una solicitud para obtener un grupo específico por su ID
export const getGroupRequest = (groupId: string) => axios.get(`groups/${groupId}`);

// Realizar una solicitud para eliminar un grupo por su ID
export const deleteGroupRequest = (groupId: string) => axios.delete(`groups/${groupId}`);

// Realizar una solicitud para actualizar un grupo por su ID
export const updateGroupRequest = (groupId: string, group: Group) =>
  axios.put(`groups/${groupId}`, group);

