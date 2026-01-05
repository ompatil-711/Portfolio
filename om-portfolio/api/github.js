export default async function handler(req, res) {
  // Get the token from the environment
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    return res.status(500).json({ error: "Token missing" });
  }

  // Query GitHub for your specific contributions
  const query = `
    query {
      user(login: "ompatil-711") {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
                color
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    const json = await response.json();
    
    // Check if GitHub returned an error (like bad token)
    if (json.errors) {
      console.error(json.errors);
      return res.status(500).json({ error: "GitHub API Error" });
    }

    return res.status(200).json(json.data.user.contributionsCollection.contributionCalendar);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}