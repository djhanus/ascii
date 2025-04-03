async function loadAsciiArt() {
    const container = document.getElementById('ascii-container');

    try {
        // Fetch the JSON file listing all .asc files
        const response = await fetch('./art/files.json');
        const files = await response.json();

        for (const file of files) {
            try {
                // Fetch the content of each .asc file
                const fileResponse = await fetch(`./art/${file}`);
                const content = await fileResponse.text();

                // Create a div to display the ASCII art
                const artDiv = document.createElement('div');
                artDiv.className = 'ascii-art';
                artDiv.textContent = content;

                // Append the ASCII art to the container
                container.appendChild(artDiv);
            } catch (error) {
                console.error(`Error loading file ${file}:`, error);
            }
        }
    } catch (error) {
        console.error('Error loading ASCII art list:', error);
    }
}

// Load ASCII art on page load
loadAsciiArt();