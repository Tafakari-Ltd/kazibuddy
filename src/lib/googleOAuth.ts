// src/lib/googleOAuth.ts

export const initiateGoogleLogin = (userType?: 'worker' | 'employer') => {
    const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';
    const redirectUri = `${baseUrl}/v1/auth/google/callback/`;

    // 1. ROBUST FIX: Save intent to Session Storage
    // This persists locally, ensuring we know the role even if the 'state' param is lost
    if (userType) {
        sessionStorage.setItem('google_auth_intent', userType);
    } else {
        // Clear any old intent if this is a generic login
        sessionStorage.removeItem('google_auth_intent');
    }

    // Keep the state param as a backup, but we will primarily use storage
    const state = userType ? JSON.stringify({ user_type: userType }) : '';

    const googleAuthUrl = 'https://accounts.google.com/o/oauth2/v2/auth' +
        '?redirect_uri=' + encodeURIComponent(redirectUri) +
        '&prompt=consent' +
        '&response_type=code' +
        '&client_id=' + googleClientId +
        '&scope=openid%20email%20profile' +
        '&access_type=offline' +
        (state ? '&state=' + encodeURIComponent(state) : '');

    window.location.href = googleAuthUrl;
};