import { creerFormulaireConnexion } from './components/login';
const login = document.querySelector('.user-icon');

login?.addEventListener('click', () => {
    // Initialiser le formulaire
    creerFormulaireConnexion({
    urlPHP: 'connexion.php',
    boutonOuverture: '.btn-connexion',
    surSucces: (reponse) => {
        console.log('Connecté !', reponse);
        window.location.href = 'dashboard.html';
    },
    surErreur: (erreur) => {
        console.error('Erreur:', erreur);
    }
    });
});
