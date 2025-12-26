function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => { page.classList.remove('active'); });
    document.getElementById(pageId).classList.add('active');
}

function showPage(pageId) {
    console.log("Pindah ke:", pageId);

    document.querySelectorAll('.page').forEach(page => { page.classList.remove('active'); });

    const target = document.getElementById(pageId);
    if (target) {
        target.classList.add('active');
    } else {
        alert("Page tidak ditemukan: " + pageId);
    }
}

function showPage(pageId) {
    console.log("Klik:", pageId);

    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    const target = document.getElementById(pageId);
    if (target) {
        target.classList.add('active');
    } else {
        alert("PAGE TIDAK DITEMUKAN: " + pageId);
    }
}