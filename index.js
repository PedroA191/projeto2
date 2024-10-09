function trocar(imagem) {
    if (imagem == 1) {
        document.getElementById('foto').src = "imagem/images (1).jpg"
    } else if (imagem == 2) {
        document.getElementById('foto').src = "imagem/foto2.jpg"
    } else if (imagem == 3) {
        document.getElementById('foto').src = "imagem/foto3.jpg"
    }
}

function inicial() {
    document.getElementById('foto').src = "imagem/images (1).jpg"
}