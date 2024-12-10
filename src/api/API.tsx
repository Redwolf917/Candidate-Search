const searchGithub = async () => {
  try {
    console.log('Making request to GitHub API...');
    const start = Math.floor(Math.random() * 100000000) + 1;
    const response = await fetch(
      `https://api.github.com/users?since=${start}`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
      }
    );
    if (!response.ok) {
      console.error('Response status:', response.status, response.statusText);
      const errorDetails = await response.text();
      console.error('Error details:', errorDetails);
      throw new Error(`GitHub API responded with ${response.status}`);
    }
    const data = await response.json();
    console.log('API Response:', data); // Debugging
    return data;
  } catch (err) {
    console.error('Error in searchGithub:', err);
    return [];
  }
};


const searchGithubUser = async (username: string) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();
    if (!response.ok) {
      console.error('Invalid API response:', response.status);
      throw new Error('Invalid API response');
    }
    return data;
  } catch (err) {
    console.error(`Error fetching user ${username}:`, err);
    return {};
  }
};

export { searchGithub, searchGithubUser };
