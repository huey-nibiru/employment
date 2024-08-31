import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TwitterCallback: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const state = urlParams.get('state');
    const storedState = localStorage.getItem('twitter_oauth_state');

    if (state !== storedState) {
      console.error('Invalid state parameter');
      navigate('/login');
      return;
    }

    if (code) {
      // Exchange the code for an access token
      exchangeCodeForToken(code);
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const exchangeCodeForToken = async (code: string) => {
    const clientId = 'YOUR_TWITTER_CLIENT_ID';
    const redirectUri = 'YOUR_REDIRECT_URI';
    const codeVerifier = localStorage.getItem('twitter_oauth_code_verifier');

    try {
      const response = await fetch('https://api.twitter.com/2/oauth2/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          client_id: clientId,
          grant_type: 'authorization_code',
          code,
          redirect_uri: redirectUri,
          code_verifier: codeVerifier || '',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to exchange code for token');
      }

      const data = await response.json();
      // Store the access token securely (e.g., in HttpOnly cookies on your server)
      console.log('Access token:', data.access_token);

      // Navigate to the home page or user dashboard
      navigate('/');
    } catch (error) {
      console.error('Error exchanging code for token:', error);
      navigate('/login');
    }
  };

  return <div>Processing Twitter login...</div>;
};

export default TwitterCallback;