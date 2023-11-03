import {
    createContext,
    ReactNode,
    useState,
    useContext,
    useEffect,
} from "react";
import {
    createGroupRequest,
    getGroupsRequest,
    getGroupRequest,
    deleteGroupRequest,
    updateGroupRequest,
} from "../api/groups"; // Asegúrate de importar las funciones para grupos
import { Group, getOneGroup, ErrorData } from "../components/types/types";

interface GroupContextType {
    createGroup: (group: string) => Promise<void>;
    getGroups: () => Promise<void>;
    getGroup: (groupId: string) => Promise<getOneGroup | null>;
    deleteGroup: (groupId: string) => Promise<void>;
    updateGroup: (groupId: string, group: Group) => Promise<void>;
    loading: boolean;
    groups: Group[];
    errorsGroup: ErrorData[];
}

export const GroupContext = createContext<GroupContextType | null>(null);

export const useGroup = () => {
    const context = useContext(GroupContext);
    if (!context) {
        throw new Error("useGroup must be used within a GroupProvider");
    }
    return context;
};

export const GroupProvider = ({ children }: { children: ReactNode }) => {
    const [groups, setGroups] = useState<Group[]>([]);
    const [errorsGroup, setErrorsGroup] = useState<ErrorData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const createGroup = async (group: string ) => {
        console.log(group);
        try {
            const res = await createGroupRequest(group);
            // console.log(res.data);
            setGroups([...groups, res.data]);
        } catch (error: any) {
            setErrorsGroup(error.response.data);
        }
    };

    const getGroups = async () => {
        try {
            const res = await getGroupsRequest();
            setGroups(res.data);
            console.log(res.data);
        } catch (error: any) {
            setErrorsGroup(error.response.data);
        }
    };

    const getGroup = async (groupId: string) => {
        try {
            const res = await getGroupRequest(groupId);
            // console.log(res.data);
            return res.data;
            // Manejar la respuesta como sea necesario
        } catch (error: any) {
            setErrorsGroup(error.response.data);
            return null;
        }
    };

    const deleteGroup = async (groupId: string) => {
        try {
            const res = await deleteGroupRequest(groupId);
            // setGroups(groups.filter((group) => group.id !== groupId));
            // if(res.status === 204) setGroups(groups.filter((group) => group._id !== groupId));
        } catch (error: any) {
            setErrorsGroup(error.response.data);
        }
    };

    const updateGroup = async (groupId: string, group: Group) => {
        try {
            const res = await updateGroupRequest(groupId, group);
            // const updatedGroups = groups.map((g) => (g.id === groupId ? res.data : g));
            // setGroups(updatedGroups);
        } catch (error: any) {
            setErrorsGroup(error.response.data);
        }
    };

    // Resto del código para gestionar errores y carga

    return (
        <GroupContext.Provider
            value={{
                createGroup,
                getGroups,
                getGroup,
                deleteGroup,
                updateGroup,
                loading,
                groups,
                errorsGroup,
            }}
        >
            {children}
        </GroupContext.Provider>
    );
};
