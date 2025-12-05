try{if(localStorage.get("__framer_force_showing_editorbar_since")){const n=document.createElement("link");n.rel = "modulepreload";n.href="https://framer.com/edit/init.mjs";document.head.appendChild(n)}}catch(e){}</script>
    <!-- Start of headStart -->
    
        // Dark/Light Mode Toggle
        (function() {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            const savedMode = localStorage.getItem('theme-mode');
            const isDark = savedMode ? savedMode === 'dark' : prefersDark;
            
            if (isDark) {
                document.documentElement.style.colorScheme = 'dark';
                document.body.style.colorScheme = 'dark';
            } else {
                document.documentElement.style.colorScheme = 'light';
                document.body.style.colorScheme = 'light';
            }
            
            // Handle theme toggle button click
            document.addEventListener('DOMContentLoaded', function() {
                const themeButtons = document.querySelectorAll('[aria-label="Light/Dark Toggle"]');
                themeButtons.forEach(button => {
                    button.addEventListener('click', function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        const currentMode = localStorage.getItem('theme-mode') || (prefersDark ? 'dark' : 'light');
                        const newMode = currentMode === 'dark' ? 'light' : 'dark';
                        localStorage.setItem('theme-mode', newMode);
                        document.documentElement.style.colorScheme = newMode;
                        document.body.style.colorScheme = newMode;
                        location.reload();
                    });
                });
            });
        })();