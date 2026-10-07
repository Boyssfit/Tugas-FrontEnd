import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useAuth } from '../utils/AuthContext';

export default function LogoutPage() {
    const [isLoggingOut, setIsLoggingOut] = useState(false);
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        setIsLoggingOut(true);
        try {
            await logout();
            navigate('/login');
        } catch (error) {
            console.error("Failed to log out", error);
            // In case of error, at least re-enable the button
            setIsLoggingOut(false);
        }
    };

    const handleCancel = () => {
        // This is a great UX feature. It sends the user
        // back to the page they were on before.
        navigate(-1); 
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-surface dark:bg-dark-page px-4">
            <div className="w-full max-w-sm p-8 space-y-6 bg-surface dark:bg-dark-surface rounded-xl shadow-lg border border-border dark:border-dark-border">
                
                <h2 className="text-3xl font-extrabold text-center text-ink dark:text-dark-ink">
                    Sign Out
                </h2>
                
                <p className="text-center text-muted dark:text-dark-muted">
                    Are you sure you want to sign out of your account?
                </p>

                {/* Button Container */}
                <div className="space-y-4 pt-4">
                    {/* Confirm Logout Button (Destructive Action) */}
                    <button
                        type="button"
                        onClick={handleLogout}
                        className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-danger hover:bg-danger-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-danger disabled:bg-danger-disabled disabled:cursor-not-allowed transition duration-200 ease-in-out"
                        disabled={isLoggingOut}
                    >
                        {isLoggingOut ? 'Signing out...' : 'Sign Out'}
                    </button>

                    {/* Cancel Button (Secondary Action) */}
                    <button
                        type="button"
                        onClick={handleCancel}
                        className="w-full flex justify-center py-2.5 px-4 border border-border dark:border-dark-border rounded-lg shadow-sm text-base font-medium text-ink dark:text-dark-ink bg-surface dark:bg-dark-surface hover:bg-surface-muted dark:hover:bg-dark-surface focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50"
                        disabled={isLoggingOut}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}