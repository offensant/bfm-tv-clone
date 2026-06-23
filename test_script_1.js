
        // Reading Progress Bar
        window.onscroll = function() {
            var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            var scrolled = (winScroll / height) * 100;
            document.getElementById("progressBar").style.width = scrolled + "%";
        };

        // Cookie Banner
        function hideCookies() {
            document.getElementById('cookieBanner').classList.add('hidden');
        }

        // Premium Modal Logic
        const modal = document.getElementById('premiumModal');
        
        function showPremiumModal(e) {
            e.preventDefault();
            modal.classList.add('active');
        }

        function closePremiumModal() {
            modal.classList.remove('active');
            setTimeout(() => {
                document.getElementById('modalView1').style.display = 'block';
                document.getElementById('modalView2').style.display = 'none';
                document.getElementById('emailSuccess').style.display = 'none';
                document.getElementById('premiumEmail').value = '';
            }, 300);
        }

        function showEmailForm() {
            document.getElementById('modalView1').style.display = 'none';
            document.getElementById('modalView2').style.display = 'block';
        }

        function submitEmail() {
            var email = document.getElementById('premiumEmail').value;
            if(email.includes('@')) {
                document.getElementById('emailSuccess').style.display = 'block';
                setTimeout(closePremiumModal, 3000);
            } else {
                alert("Veuillez saisir une adresse e-mail valide.");
            }
        }

        // Intercept clicks only for the premium paywall subscription button
        document.querySelectorAll('.premium-paywall .btn-premium').forEach(el => {
            el.addEventListener('click', showPremiumModal);
        });

        // Play real audio function
        function playRealAudio() {
            var audio = document.getElementById('realInterviewAudio');
            var iconPlay = document.getElementById('icon-play');
            var iconPause = document.getElementById('icon-pause');

            if (audio.paused) {
                audio.play();
                iconPlay.style.display = 'none';
                iconPause.style.display = 'block';
            } else {
                audio.pause();
                iconPlay.style.display = 'block';
                iconPause.style.display = 'none';
            }
        }

        
        // Intercept audio playback after 6 seconds for the paywall
        let hasShownPaywall = false;
        document.getElementById('realInterviewAudio').addEventListener('timeupdate', function() {
            if (this.currentTime >= 6 && !hasShownPaywall) {
                this.pause();
                hasShownPaywall = true;
                
                // Reset play/pause icons
                document.getElementById('icon-play').style.display = 'block';
                document.getElementById('icon-pause').style.display = 'none';
                
                // Trigger the Premium modal
                document.getElementById('premiumModal').classList.add('active');
            }
        });
        document.getElementById('realInterviewAudio').addEventListener('ended', function() {
            document.getElementById('icon-play').style.display = 'block';
            document.getElementById('icon-pause').style.display = 'none';
        });
    