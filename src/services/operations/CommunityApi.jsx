// CommunityApi.jsx
import { apiConnector } from "../apiconnector";
import { communityEndpoints } from "../apis";
import { setAllUsers, setMessages } from '../../slices/communitySlice';

export const createMessage = async (message, token, dispatch) => {
    try {
        const response = await apiConnector("POST", communityEndpoints.CREATE_MESSAGE, { message }, {
            Authorization: `Bearer ${token}`
        });
        if (response?.data?.success) {
            dispatch(setMessages(response.data.messages_data));
        } else {
            throw new Error("Failed to create message. Please try again later.");
        }
    } catch (error) {
        console.error("Error creating message:", error);
        throw error;
    }
}

export const getAllMessage = async (token, dispatch) => {
    try {
        const response = await apiConnector("GET", communityEndpoints.GET_ALL_MESSAGE, null, {
            Authorization: `Bearer ${token}`,
        });
        if (response?.data?.success) {
            dispatch(setMessages(response.data.messages));
            return response.data.messages;
        } else {
            throw new Error("Failed to fetch messages. Please try again later.");
        }
    } catch (error) {
        console.error("Error fetching messages:", error);
        throw error;
    }
}

export const deleteMessage = async (messageId, token, dispatch) => {
    try {
        const response = await apiConnector("POST", communityEndpoints.DELETE_MESSAGE, { messageId }, {
            Authorization: `Bearer ${token}`,
        });
        if (response?.data?.success) {
            dispatch(setMessages(response.data.messages_data));
        } else {
            throw new Error("Failed to delete message. Please try again later.");
        }
    } catch (error) {
        console.error("Error deleting message:", error);
        throw error;
    }
}

export const allUserApi = async (dispatch, token) => {
    try {
        const response = await apiConnector("GET", communityEndpoints.ALL_USERS, null, {
            Authorization: `Bearer ${token}`,
        });
        localStorage.setItem("allUsers", JSON.stringify(response.data.allUsers));
        dispatch(setAllUsers(response.data.allUsers));
        return response.data.allUsers;
    } catch (error) {
        console.error("Error fetching all users:", error);
        throw error;
    }
}
