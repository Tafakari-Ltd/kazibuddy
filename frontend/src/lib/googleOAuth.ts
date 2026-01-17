// Google OAuth helper using authorization code flow (same as Django backend expects)

export const initiateGoogleLogin = (userType?: 'worker' | 'employer') => {
    const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';
    // Use backend callback URL (same as your HTML test file)
    const redirectUri = `${baseUrl}/v1/auth/google/callback/`;

    // Encode user_type in state parameter if provided
    const state = userType ? JSON.stringify({ user_type: userType }) : '';

    const googleAuthUrl = 'https://accounts.google.com/o/oauth2/v2/auth' +
        '?redirect_uri=' + encodeURIComponent(redirectUri) +
        '&prompt=consent' +
        '&response_type=code' +
        '&client_id=' + googleClientId +
        '&scope=openid%20email%20profile' +
        '&access_type=offline' +
        (state ? '&state=' + encodeURIComponent(state) : '');

    // Redirect to Google
    window.location.href = googleAuthUrl;
};
