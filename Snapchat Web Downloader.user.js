// ==UserScript==
// @name         Snapchat Web Downloader
// @version      1.0.0
// @description  we want snaps!
// @author       danthekidd
// @match        https://www.snapchat.com/web*
// @run-at       document-start
// @icon         https://www.snapchat.com/web/version/17424f89/favicon.png
// @updateURL    https://github.com/danthekidd/Snapchat-Web-Downloader/raw/refs/heads/main/Snapchat%20Web%20Downloader.user.js
// @grant        none
// ==/UserScript==

(function() {
    document.hasFocus = () => true;

    function addDownloadButtonToImages() {
        const images = document.querySelectorAll('.dCE9D');

        images.forEach((img) => {
            if (!img.parentElement.querySelector('.download-button')) {
                let downloadButton = document.createElement('button');
                downloadButton.innerText = 'Download';
                downloadButton.classList.add('download-button');
                downloadButton.style.position = 'absolute';
                downloadButton.style.bottom = '10px';
                downloadButton.style.left = '10px';
                downloadButton.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
                downloadButton.style.border = 'none';
                downloadButton.style.borderRadius = '6px';
                downloadButton.style.color = 'white';
                downloadButton.style.padding = '5px 10px';
                downloadButton.style.cursor = 'pointer';
                downloadButton.style.zIndex = '10';

                img.parentElement.style.position = 'relative';
                img.parentElement.appendChild(downloadButton);

                downloadButton.addEventListener('click', () => {
                    const link = document.createElement('a');
                    link.href = img.src;
                    link.download = 'image.jpg';
                    link.click();
                });
            }
        });
    }

    const observer = new MutationObserver(() => {
        addDownloadButtonToImages();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    addDownloadButtonToImages();
})();
