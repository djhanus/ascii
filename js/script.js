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

                // Create a card container for ASCII art and its label
                const cardDiv = document.createElement('div');
                cardDiv.className = 'ascii-card';

                // Create a div to display the ASCII art
                const artDiv = document.createElement('div');
                artDiv.className = 'ascii-art';
                artDiv.textContent = content;

                // Create a p tag to display the filename
                const fileNameTag = document.createElement('p');
                fileNameTag.className = 'ascii-filename';
                fileNameTag.textContent = file;

                // Append art and label to the card, then card to the container
                cardDiv.appendChild(artDiv);
                cardDiv.appendChild(fileNameTag);
                container.appendChild(cardDiv);
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