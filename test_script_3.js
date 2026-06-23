
document.addEventListener('DOMContentLoaded', function() {
    const shareBtn = document.querySelector('.share-btn');
    if (shareBtn) {
        shareBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const linkToCopy = 'https://article-bfmtv.com/societe/commentateur-autoproclame-kevin-enquete.html';
            
            navigator.clipboard.writeText(linkToCopy).then(() => {
                const originalHtml = shareBtn.innerHTML;
                // Keep the SVG but change the text
                const svg = shareBtn.querySelector('svg');
                shareBtn.innerHTML = '';
                if (svg) shareBtn.appendChild(svg);
                shareBtn.appendChild(document.createTextNode(' Lien copié !'));
                
                // Add a visual cue
                shareBtn.style.backgroundColor = '#28a745';
                shareBtn.style.color = '#fff';
                shareBtn.style.borderColor = '#28a745';
                
                setTimeout(() => {
                    shareBtn.innerHTML = originalHtml;
                    shareBtn.style.backgroundColor = '';
                    shareBtn.style.color = '';
                    shareBtn.style.borderColor = '';
                }, 2000);
            }).catch(err => {
                console.error('Erreur lors de la copie du lien: ', err);
            });
        });
    }
});
