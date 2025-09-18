// Configuração específica para a página de cadastro
document.addEventListener('DOMContentLoaded', function() {
    const senhaEye = document.querySelector('#senha + .fa-eye');
    const confirmSenhaEye = document.querySelector('#confirmSenha + .fa-eye');
    
    if (senhaEye) {
        senhaEye.addEventListener('click', function() {
            togglePasswordVisibility('senha', this);
        });
    }
    
    if (confirmSenhaEye) {
        confirmSenhaEye.addEventListener('click', function() {
            togglePasswordVisibility('confirmSenha', this);
        });
    }
});

// Função de cadastro
function cadastrar() {
    // Verificar se as senhas coincidem
    const senha = document.getElementById('senha').value;
    const confirmSenha = document.getElementById('confirmSenha').value;
    
    if (senha !== confirmSenha) {
        alert('As senhas não coincidem!');
        return false;
    }
    
    // Aqui você pode adicionar a lógica para enviar os dados do cadastro
    alert('Cadastro realizado com sucesso!');
    return true;
}