let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();

    // Hapus opsi yang sudah ada sebelumnya
    voiceSelect.innerHTML = '';

    voices.forEach((voice, i) => {
        let option = document.createElement('option');
        option.textContent = voice.name;
        option.value = i;
        voiceSelect.appendChild(option);
    });

    // Set default voice jika ada suara yang tersedia
    if (voices.length > 0) {
        speech.voice = voices[0];
    }
};

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});
