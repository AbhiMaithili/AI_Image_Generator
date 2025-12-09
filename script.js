

const form = document.getElementById('generate-image-form');
const input = document.getElementById('input-value');
const imageContainer = document.getElementById('images-visible');
const imageText = document.getElementById('imageContainerText');
const generatedImage = document.getElementById('generated-image');

async function generateImage(prompt) {
    imageText.textContent = 'Generating your image... Please wait';
    imageContainer.style.display = 'block';
    generatedImage.style.display = 'none';

    try {
        const imgElement = await puter.ai.txt2img(prompt, {
            model: "gpt-image-1-mini",
            quality: "low"
        });

        const dataUrl = imgElement.src;
        generatedImage.src = dataUrl;
        generatedImage.style.display = 'block';
        imageText.textContent = 'Your AI-generated image is ready!';
    } catch (error) {
        console.error('Error:', error);
        imageText.textContent =
            'Error generating image. Please try again after a few seconds.';
    }
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const prompt = input.value.trim();
    
    if (prompt.length < 3) {
        imageText.textContent = 'Please enter at least 3 characters!';
        return;
    }
    
    generateImage(prompt);
    input.value = '';
});

