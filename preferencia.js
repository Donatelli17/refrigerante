document.getElementById('rating').addEventListener('input', function() {
    document.getElementById('ratingValue').textContent = this.value;
});

function submitRating() {
    const sodaName = document.getElementById('sodaName').value;
    const rating = document.getElementById('rating').value;
    const resultDiv = document.getElementById('result');
    
    if (sodaName.trim() === "") {
        resultDiv.innerHTML = `<p>Por favor, insira o nome do refrigerante.</p>`;
    } else {
        resultDiv.innerHTML = `<p>Você deu uma classificação de ${rating} para o refrigerante ${sodaName}</p>`;
        
    }
}
