import { useAuth, useUser } from "@clerk/clerk-react";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { syncUser } from "../lib/api";

// the best way to implement this is by using webhooks

function useUserSync() {
    const { isSignedIn } = useAuth();
    const { user } = useUser();

    const {mutate:syncUserMutation, isPending, isSuccess, error }= useMutation({
        mutationFn:syncUser,
        onError: (err) => {
            console.error("❌ Error syncing user:", err);
        },
        onSuccess: (data) => {
            console.log("✅ User synced successfully:", data);
        }
    })

    useEffect(() => {
        if(isSignedIn && user && !isSuccess) {
            const userData = {
                email: user.primaryEmailAddress?.emailAddress,
                name: user.fullName || user.firstName,
                imageUrl: user.imageUrl,
            };
            
            console.log("📤 Syncing user with data:", userData);
            syncUserMutation(userData);
        }
    }, [isSignedIn, user?.id]);

    return { isSynced: isSuccess, syncError: error };
}

export default useUserSync