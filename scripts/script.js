function handleKeyDown(event) {
    if (event.ctrlKey && event.shiftKey && event.key === 'C') {
        event.preventDefault();
    }
}
document.addEventListener('keydown', handleKeyDown);
window.addEventListener('contextmenu', function(e){
    e.preventDefault();
})