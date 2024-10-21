// services/http_request.js

export async function sendUserQuery(query) {
    try {
        const response = await fetch(
            "https://logical-witty-ocelot.ngrok-free.app/user-query",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ query }),
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        return { data }; // Return the data to be used in Main.jsx
    } catch (error) {
        console.error("Error sending user query:", error);
        return null; // Return null to handle the error case
    }
}
