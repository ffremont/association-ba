$(() =>{
    const name = "main-modal";

    var modal = new tingle.modal({
        footer: true,
        stickyFooter: false,
        closeMethods: ['overlay', 'button', 'escape'],
        closeLabel: "Fermer",
        cssClass: ['app-modal'],
        beforeClose: function() {
            if(window.sessionStorage){
                window.sessionStorage.setItem(name, '1');
            }
            return true; 
        }
    });
    
    modal.setContent(`
    <div>
        <div class="slogan">Suivez l'actualité de l'association sur la page Facebook</div>
        <div class="and">&</div>
        <div class="slogan">Soutenir la mission de l'association</div>
    </div>
    `);

    modal.addFooterBtn(`S'abonner`, 'tingle-btn tingle-btn--primary btn-app-centered', function() {
        if(window.sessionStorage){
            window.sessionStorage.setItem(name, '1');
        }
        window.location.href = window.facebookPage;
    });

    modal.addFooterBtn(`Soutenir`, 'tingle-btn tingle-btn--primary btn-app-centered', function() {
        if(window.sessionStorage){
            window.sessionStorage.setItem(name, '1');
        }
        window.location.href = window.soutenir;
    });

    if(!window.sessionStorage || window.sessionStorage.getItem(name) !== '1')
        modal.open();

    window.openNewsletter = function() {
        modal.open();
    }
})
