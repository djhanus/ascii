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
                artDiv.style.padding = '30px 60px';
                artDiv.style.maxWidth = '720px';
                artDiv.style.width = 'auto';

                // Append the ASCII art to the container
                container.appendChild(artDiv);

                // Create a p tag to display the filename
                const fileNameTag = document.createElement('p');
                fileNameTag.className = 'ascii-filename';
                fileNameTag.textContent = file;
                fileNameTag.style.padding = '5px';
                fileNameTag.style.backgroundColor = 'rgba(0, 0, 0, 1)';
                fileNameTag.style.marginTop = '0px';
                fileNameTag.style.marginLeft = '10px';
                fileNameTag.style.textAlign = 'left';
                fileNameTag.style.color = 'white';

                // Append the filename below the ASCII art
                container.appendChild(fileNameTag);
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