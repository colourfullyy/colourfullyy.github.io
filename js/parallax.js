document.addEventListener('mousemove', parallax);
    function parallax(e) {
        this.querySelectorAll('.rainbow').forEach(layer => {
            const speed = layer.getAttribute('data_value')
            const x = (e.clientX * speed) / 300;
            const y = (e.clientY * speed) / 300;
            
            layer.style.transform = `translateX(-${x}px) translateY(-${y}px)`
    })
}