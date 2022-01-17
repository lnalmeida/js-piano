window.addEventListener("DOMContentLoaded", () => {
    
    const teclas = document.querySelectorAll(".key");
    const audios = document.querySelectorAll("audio");
    
    function PlayNotes(evento) {

        let keycode = null;

        let isKeyboard = evento.type === 'keydown'
        if(isKeyboard) {
            keycode = evento.keyCode
        }else {
            keycode = evento.target.dataset.key
        }


            audios.forEach(function(audio){
                if(audio.dataset.key == keycode) {
                    audio.play()
                }
            })
    }
    
    window.addEventListener("keydown", PlayNotes);
    teclas.forEach(function(tecla) {
        tecla.addEventListener("click", PlayNotes)
    })

})

