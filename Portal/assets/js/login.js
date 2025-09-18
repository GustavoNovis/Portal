// Configuração específica para a página de login
document.addEventListener('DOMContentLoaded', function() {
    const senhaEye = document.querySelector('#senha + .fa-eye');
    
    if (senhaEye) {
        senhaEye.addEventListener('click', function() {
            togglePasswordVisibility('senha', this);
        });
    }
});